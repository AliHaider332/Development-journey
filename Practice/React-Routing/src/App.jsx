import React from 'react';
import Navbar from '../Navbar';
//import { Routes, Route, Navigate, createBrowserRouter ,RouterProvider} from 'react-router-dom';
// import Home from '../Home';
// import About from '../About';
// import Contact from '../Contact';
// import Help from './Help';
// import ContactDetail from './ContactDetail';
// import Login from './Login';
import { Outlet } from 'react-router-dom';
const App = () => {
  // const rou = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/about',
  //     element: <About />,
  //   },
  //   {
  //     path: '/contact',
  //     element: <Contact />,
  //   },
  //   {
  //     path: '/help',
  //     element: <Help />,
  //   },
  //   {
  //     path: '/login',
  //     element: <Login />,
  //   },
  // ]);
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      {/* <RouterProvider router={rou}>

      </RouterProvider> */}
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="a" element={<Login />}></Route>
          <Route path="b" element={<Help />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/:id" element={<ContactDetail />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Navigate to={'/'} />}></Route>
      </Routes> */}
    </div>
  );
};

export default App;
