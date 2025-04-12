// pages/CreateUser.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '', role: 'USER' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8080/api/auth/register', user);
      alert('Tạo người dùng thành công!');
      navigate('/users');
    } catch (err) {
      console.error('Error creating user:', err);
      alert('Tạo thất bại.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>➕ Tạo người dùng mới</h2>
      <div className="mb-3">
        <label>Tên</label>
        <input className="form-control" name="name" value={user.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" name="email" value={user.email} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Mật khẩu</label>
        <input className="form-control" type="password" name="password" value={user.password} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Vai trò</label>
        <select className="form-control" name="role" value={user.role} onChange={handleChange}>
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
      </div>
      <button className="btn btn-success" onClick={handleSubmit}>Tạo</button>
    </div>
  );
};

export default CreateUser;
