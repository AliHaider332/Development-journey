import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function temp(data) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(temp)}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexWrap: 'wrap',
        gap: '20px',
      }}
    >
      <label>Enter Name:</label>
      <input {...register('Name', { required: 'Name is Required' })} />
      {errors.Name && <span>{errors.Name.message}</span>}
      <label>Enter Email:</label>
      <input {...register('Email')} />

      <label>Enter Password:</label>
      <input type="password" {...register('Password')} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
