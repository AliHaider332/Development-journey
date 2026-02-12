import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleLoading } from '../Redux/action';
const SingleBlog = () => {
  const dispatcher = useDispatch();
  const { id } = useParams();
  const [blog, setBlog] = useState(null); // start as null
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    const URL = 'http://localhost:3000';

    async function getData() {
      dispatcher(handleLoading());
      try {
        const res = await fetch(`${URL}/singleBlog/${id}`, {
          method: 'GET',
          credentials: 'include',
        });

        if (!res.ok) {
          navigate('/404');
          return;
        }

        const data = await res.json();
        setBlog(data);
      } catch (error) {
        console.error(error);
        navigate('/404');
      } finally {
        dispatcher(handleLoading());
      }
    }

    getData();
  }, [id, navigate]);

  if (!blog) {
    // Loading state
    return <div className="text-center mt-10">Loading blog...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold">{blog.title}</h1>
      <p className="mt-4 text-gray-700">{blog.body}</p>
      <div className="mt-4 flex justify-between items-center">
        <a
          href={blog.link}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Article
        </a>
        <span className="text-sm text-gray-500">
          {blog.comment_count} comments
        </span>
      </div>
    </div>
  );
};

export default SingleBlog;
