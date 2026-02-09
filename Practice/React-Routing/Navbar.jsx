import React from 'react';
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';
import About from './About';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '15px 30px',
    backgroundColor: '#1e293b',
    color: '#fff',
    fontSize: '18px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '6px 12px',
    borderRadius: '6px',
    transition: '0.3s',
  };

  const linkBaseStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '6px 14px',
    borderRadius: '6px',
    transition: '0.3s',
  };

  const activeStyle = {
    backgroundColor: '#38bdf8',
    color: '#0f172a',
  };

  const PATH = [
    { address: '/', field: 'Home' },
    { address: '/about', field: 'About' },
    { address: '/contact', field: 'Contact' },
    { address: '/help', field: 'Help' },
  ];
  const navigate = useNavigate();
  function handleClick() {
    navigate('/about');
  }
  return (
    <div style={navStyle}>
      {/* <div style={titleStyle}>App</div> */}

      {PATH.map((path) => (
        <NavLink
          key={path.address}
          to={path.address}
          style={({ isActive }) => ({
            ...linkBaseStyle,
            ...(isActive ? activeStyle : {}),
          })}
        >
          {path.field}
        </NavLink>
      ))}
      <NavLink
        to="/login"
        style={({ isActive }) => ({
          ...linkBaseStyle,
          ...(isActive ? activeStyle : {}),
        })}
      >
        Login
      </NavLink>
      <button onClick={handleClick}>Navigate to About</button>
    </div>
  );
};

export default Navbar;
