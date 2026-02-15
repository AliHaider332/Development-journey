import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { handleLoading } from '../Redux/action';

const Blogs = () => {
  const navigate = useNavigate();
  const dispatcher = useDispatch();
  const [allBlogs, setBlogs] = useState([]);

  useEffect(() => {
    const URL = 'http://localhost:3000';

    async function getData() {
      try {
        // dispatcher(handleLoading());
        const res = await fetch(`${URL}/allBlogs`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          navigate('/404');
          return;
        }

        const data = await res.json();
        setBlogs(data);
      } catch (error) {
        console.error(error);
        navigate('/404');
      } finally {
        // dispatcher(handleLoading());
      }
    }

    getData();
  }, [navigate]);

  function handleClick(id) {
    navigate(`${id}`); // optional routing
  }

  return (
    <div className="max-w-3xl mx-auto space-y-4 my-10">
      {allBlogs.map((blog) => (
        <div
          key={blog.id}
          className="p-6 bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50"
          onClick={() => handleClick(blog.id)}
        >
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
          <p className="mt-2 text-gray-700">{blog.body}</p>

          <div className="flex justify-between items-center mt-4">
            <a
              href={blog.link}
              onClick={(e) => e.stopPropagation()} // prevent card click
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Visit Article
            </a>
            <span className="text-sm text-gray-500">
              {blog.comment_count} comments
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
