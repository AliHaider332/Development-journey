import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const dataSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Name should have at least 3 characters')
      .max(20, 'Name should be less than 20 characters'),
    email: z.string().email('Email is invalid'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  });

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(dataSchema) });

  function manageData(data) {
    console.log(data);
  }

  return (
    <div className="form-container">
      <form className="signup-form" onSubmit={handleSubmit(manageData)}>
        <h2>Create Account</h2>
        <p className="subtitle">Sign up to get started</p>

        <div className="input-group">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your name" {...register('name')} />
          {errors.name && <span className="error">{errors.name.message}</span>}
        </div>

        <div className="input-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" {...register('email')} />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" {...register('password')} />
          {errors.password && <span className="error">{errors.password.message}</span>}
        </div>

        <div className="input-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" {...register('confirm')} />
          {errors.confirm && <span className="error">{errors.confirm.message}</span>}
        </div>

        <button className="signup-btn">Create Account</button>
      </form>
    </div>
  );
};

export default Form;
