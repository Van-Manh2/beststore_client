import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/CreateProduct';  // Thêm import trang tạo sản phẩm
import UpdateProduct from './pages/UpdateProduct';  // Thêm import trang cập nhật sản phẩm
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<ProductList />} />  {/* Danh sách sản phẩm */}
          <Route path="/product/:id" element={<ProductDetail />} />  {/* Chi tiết sản phẩm */}
          <Route path="/products/add" element={<CreateProduct />} />  {/* Tạo sản phẩm mới */}
          <Route path="/products/update/:id" element={<UpdateProduct />} />  {/* Cập nhật sản phẩm */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
