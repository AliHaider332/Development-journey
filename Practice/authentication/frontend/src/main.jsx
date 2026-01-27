import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import './index.css';

import App from './App';
import Login from './controllers/Login';
import Signup from './controllers/Signup';
import AdminDashboard from './controllers/AdminDashboard';
import UnauthorizedPage from './controllers/UnauthorizedPage ';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
      <Route path="dashboard" element={<AdminDashboard />}></Route>
      <Route path="unauthorized" element={<UnauthorizedPage />}></Route>
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>
);
