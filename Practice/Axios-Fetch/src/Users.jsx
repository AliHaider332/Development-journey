import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { configer } from './lib';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios({ ...configer, url: '/api/get-data' });
      console.log(res.data.data); 
      setUsers(res.data.data); 
    })();
  }, []);

  return (
    <div>
      <h2>Users List</h2>

      {users.map((user, index) => (
        <div key={index} style={cardStyle}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Age:</b> {user.age}</p>
          <p><b>Password:</b> {user.password}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '6px',
};
