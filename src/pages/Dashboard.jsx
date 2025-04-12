import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-4">📊 Admin Dashboard</h2>

      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4 p-4">
            <h4 className="mb-3">📦 Products</h4>
            <button className="btn btn-primary w-100" onClick={() => navigate('/products')}>
              View Products
            </button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card shadow border-0 rounded-4 p-4">
            <h4 className="mb-3">👤 Users</h4>
            <button className="btn btn-secondary w-100" onClick={() => navigate('/users')}>
              View Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
