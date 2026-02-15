import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../Store/Feature/Authentication';
import { toast } from 'react-toastify';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authInfo = useSelector((state) => state.auth);

  const handleLogout = async () => {
    try {
      const URL = 'http://localhost:3000';
      const res = await fetch(`${URL}/logOut`, {
        method: 'GET',
        credentials: 'include',
      });

      if (res.ok) {
        dispatch(logoutUser());
        toast.success('Logout successfully 🎉');
        navigate('/login');
      } else {
        toast.error('Logout failed ❌');
      }
    } catch (error) {
      toast.error('Server error ❌');
      console.error(error);
    }
  };

  return (
    <nav className="bg-indigo-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            MyBlog
          </Link>

          {/* Navigation */}
          <div className="flex space-x-4">
            {authInfo.isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-indigo-500"
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
