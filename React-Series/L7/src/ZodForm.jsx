import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import './App.css';

const userObjSchema = z
  .object({
    Name: z
      .string()
      .min(3, 'Name must be at least 3 characters')
      .max(20, 'Name must be at most 20 characters'),

    Email: z.string().email('Invalid email address'),

    Age: z.coerce
      .number({ invalid_type_error: 'Not a number' })
      .min(18, 'Under 18 not allowed')
      .max(60, 'Above 60 not allowed'),

    Password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password must be less than 16 characters'),

    Confirm: z.string(),
  })
  .refine((data) => data.Password === data.Confirm, {
    message: "Passwords don't match",
    path: ['Confirm'],
  });

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userObjSchema),
  });

  const handleData = (data) => {
    console.log(data);
  };

  return (
    <div className="form-container">
      <form className="form-card" onSubmit={handleSubmit(handleData)}>
        <h2>Register</h2>

        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter your name" {...register('name')} />
          {errors.Name && <p className="error">{errors.Name.message}</p>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" {...register('Email')} />
          {errors.Email && <p className="error">{errors.Email.message}</p>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" placeholder="Enter your age" {...register('Age')} />
          {errors.Age && <p className="error">{errors.Age.message}</p>}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter password" {...register('Password')} />
          {errors.Password && <p className="error">{errors.Password.message}</p>}
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm password" {...register('Confirm')} />
          {errors.Confirm && <p className="error">{errors.Confirm.message}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ZodForm;
