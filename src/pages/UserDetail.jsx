import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/user/${id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user:', error);
      });
  }, [id]);

  if (!user) {
    return <div className="text-center mt-5">Loading user information...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">👤 User Detail</h2>
      <div className="card shadow p-4 rounded-4">
        <h5><strong>Name:</strong> {user.name}</h5>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <Link to="/users" className="btn btn-secondary mt-3">← Back to User List</Link>
      </div>
    </div>
  );
};

export default UserDetail;
