import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('http://localhost:8080/api/auth/users')
      .then(res => setUsers(res.data))
      .catch(err => console.error('Error fetching users:', err));
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
    try {
      await axios.delete(`http://localhost:8080/api/auth/users/${id}`);
      fetchUsers(); // reload danh sách
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('Xoá thất bại!');
    }
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>👥 user list</h2>
        <button className="btn btn-primary" onClick={() => navigate('/users/create')}>
          ➕ Create New User
        </button>
      </div>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Email</th>
            <th>Name</th>
            <th>Role</th>
            <th>Act</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-info btn-sm me-2" onClick={() => navigate(`/users/${user.id}`)}>UserDetail</button>
                <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/users/update/${user.id}`)}>Update</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {users.length === 0 && (
        <div className="text-center text-muted">Không có người dùng nào.</div>
      )}
    </div>
  );
};

export default UserList;
