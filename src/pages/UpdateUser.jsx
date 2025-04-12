// pages/UpdateUser.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({ name: '', role: 'USER' });
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/auth/user/${id}`)
      .then(res => setUser(res.data))
      .catch(err => console.error('Error fetching user:', err));
  }, [id]);

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:8080/api/auth/update/${id}`, user);
      alert('Cập nhật thành công!');
      navigate('/users');
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <div className="container mt-5">
      <h2>✏️ Update user</h2>
      <div className="mb-3">
        <label>Tên</label>
        <input className="form-control" name="name" value={user.name} onChange={handleChange} />
      </div>
      <div className="mb-3">
        <label>Vai trò</label>
        <select className="form-control" name="role" value={user.role} onChange={handleChange}>
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={handleUpdate}>Lưu thay đổi</button>
    </div>
  );
};

export default UpdateUser;
