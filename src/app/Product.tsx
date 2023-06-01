import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('');
      const data = await response.json();
      setUsers(data.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-8">Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user} className="mb-4">
            <h2 className="text-xl font-semibold">{user}</h2>
            <p className="text-gray-500">{user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
