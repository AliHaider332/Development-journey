import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './App.css';
import { configer } from './lib';
import axios from 'axios';

const dataSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters').max(20),
    email: z.string().email('Email not valid'),
    age: z.number().min(1, 'Age is required'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

const Form = () => {
  const [users, setUsers] = useState([]);
  const [editMode, setEditMode] = useState(-1);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(dataSchema) });

  // Fetch users from backend
  const fetchData = async () => {
    // const res = await axios({ ...configer, url: '/api/get-data' });
    const res = await axios.get('/api/get-data', configer);
    setUsers(res.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Create new user
  const handleCreate = async (data) => {
    await axios.post('/api/post-data', data, configer);
    fetchData();
    reset({
      name: '',
      email: '',
      age: '',
      password: '',
      confirm: '',
    });
  };

  // Edit existing user
  const handleEditSubmit = async (data) => {
    await axios.put(`/api/update-user/${editMode}`, data, configer);
    fetchData();
    reset({
      name: '',
      email: '',
      age: '',
      password: '',
      confirm: '',
    });
    setEditMode(-1);
  };

  // Prefill form for editing
  const handleEdit = (user, index) => {
    setEditMode(index);
    reset({
      name: user.name,
      email: user.email,
      age: user.age,
      password: user.password,
      confirm: user.password,
    });
  };

  // Cancel editing
  const handleCancel = () => {
    reset({
      name: '',
      email: '',
      age: '',
      password: '',
      confirm: '',
    });
    setEditMode(-1);
  };

  return (
    <div className="app-container">
      {/* Form Section */}
      <div className="form-container">
        <form
          className="form-card"
          onSubmit={handleSubmit(
            editMode === -1 ? handleCreate : handleEditSubmit
          )}
        >
          <h2>{editMode === -1 ? 'Create Account' : 'Edit User'}</h2>

          <div className="form-group">
            <input type="text" placeholder="Name" {...register('name')} />
            {errors.name && (
              <span className="error">{errors.name.message}</span>
            )}
          </div>

          <div className="form-group">
            <input type="email" placeholder="Email" {...register('email')} />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="number"
              placeholder="Age"
              {...register('age', { valueAsNumber: true })}
            />
            {errors.age && <span className="error">{errors.age.message}</span>}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('confirm')}
            />
            {errors.confirm && (
              <span className="error">{errors.confirm.message}</span>
            )}
          </div>

          <div className="form-buttons">
            <button type="submit">
              {editMode === -1 ? 'Register' : 'Update'}
            </button>
            {editMode !== -1 && (
              <button
                type="button"
                onClick={handleCancel}
                className="cancel-btn"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Users List Section */}
      <div className="users-section">
        <h2>Registered Users</h2>
        <div className="users-grid">
          {users.map((user, index) => (
            <div className="user-card" key={index}>
              <div className="user-header">
                <div className="avatar">
                  {user.name?.charAt(0)?.toUpperCase() || 'U'}
                </div>
                <div className="user-info">
                  <h3>{user.name || 'No Name'}</h3>
                  <p className="email">{user.email || 'No Email'}</p>
                </div>
              </div>

              <div className="user-body">
                <p>
                  <b>Age:</b> {user.age || 'N/A'}
                </p>
              </div>

              <div className="user-actions">
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(user, index)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
