import React, { useEffect, useState } from 'react';
import Clock from './Clock';
const App = () => {
  const [users, setUser] = useState([]);
  const [count, setCount] = useState(30);
  useEffect(() => {
    const getUsers = async () => {
      const data = await fetch(`https://api.github.com/users?per_page=${count}`);
      const res = await data.json();
      setUser(res);
      console.log('hllo');
    };
    getUsers();
  }, [count]);
  function handleChange(e) {
    const x = e.target.value;
    setCount(x);
    console.log(count);
  }
  return (
    <>
      <Clock/>
      <h1>Helo Users</h1>
      <input type="number" value={count} onChange={handleChange} />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
        }}
      >
        {users.map((user) => (
          <div key={user.id}>
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{ height: '100px', width: '100px', borderRadius: '50%' }}
            />
            <p>{user.login}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
