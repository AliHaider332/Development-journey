import React from 'react';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Help from './Help.jsx';
import ContactDetail from './ContactDetail.jsx';
import Login from './Login.jsx';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import App from './src/App.jsx';
const rou = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
        children: [
          { path: ':id', element: <ContactDetail /> },
          { path: 'login', element: <Login /> },
        ],
      },
      {
        path: '/help',
        element: <Help />,
        loader: async (a) => {
          const res = await fetch('http://localhost:3000/api/get-data');
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }

          const data = await res.json();
          console.log(data);
        },
      },
      {
        path: '/login',
        element: <Navigate to={'/'} />,
      },
    ],
  },
]);

export default rou;
