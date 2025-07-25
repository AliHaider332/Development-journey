// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import InputData from './Components/InputData.jsx';
import Post from './Components/Post.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Post />,
        loader: () =>
          new Promise((resolve) => {
            setTimeout(() => resolve(null), 1000);
          }),
      },
      {
        path: 'Create',
        element: <InputData />,
        loader: () =>
          new Promise((resolve) => {
            setTimeout(() => resolve(null), 2000);
          }),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
