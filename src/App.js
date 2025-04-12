import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';
import UpdateProduct from './pages/UpdateProduct';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';
import CreateUser from './pages/CreateUser';
import UpdateUser from './pages/UpdateUser';  // nếu bạn có trang này
import Dashboard from './pages/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          {/* Trang chính */}
          <Route path="/" element={<Dashboard />} />

          {/* Auth */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Products */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/products/add" element={<CreateProduct />} />
          <Route path="/products/update/:id" element={<UpdateProduct />} />

          {/* Users */}
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:id" element={<UserDetail />} />
          <Route path="/users/create" element={<CreateUser />} />
          <Route path="/users/update/:id" element={<UpdateUser />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
