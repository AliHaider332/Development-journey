import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLoading } from '../Redux/action';
const Navbar = () => {
  const dispatcher = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth);
  async function handelLogout() {
    try {
      dispatcher(handleLoading());
      const URL = 'http://localhost:3000';
      const res = await fetch(`${URL}/logOut`, {
        method: 'GET',
        credentials: 'include',
      });
      if (res.ok) {
        toast.success('Logout successfully 🎉');
        navigate('/login');
        dispatcher(handleAuthentication(false));
      }
    } catch (error) {
      toast.error('Server error ❌');
      console.error(error);
    } finally {
      dispatcher(handleLoading());
    }
  }
  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold">
              MyBlog
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-4">
            {/* Placeholder Links - logic for login/logout will go here */}
            {isAuthenticated ? (
              <button
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
                onClick={() => {
                  // Add logout logic here
                }}
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
