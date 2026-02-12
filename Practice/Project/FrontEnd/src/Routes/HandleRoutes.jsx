// Routes/HandleRoutes.jsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Blogs from '../Pages/Blogs';
import SingleBlog from '../Pages/SingleBlog';

const HandleRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/blogs'} />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/blogs/:id" element={<SingleBlog />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default HandleRoutes;
