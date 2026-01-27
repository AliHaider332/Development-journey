import React from 'react';
import { useNavigate } from 'react-router-dom';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/'); // Redirect to home or login page
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-xl shadow text-center max-w-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">🚫 Unauthorized</h1>
        <p className="text-gray-700 mb-6">
          You don’t have permission to access this page.
        </p>
        <button
          onClick={goHome}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
