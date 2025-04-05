import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook dùng để chuyển hướng

  useEffect(() => {
    axios.get('http://localhost:8080/api/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching product list:', error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      setProducts(products.filter(product => product.id !== id)); // Cập nhật danh sách sản phẩm sau khi xóa
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleLogout = () => {
    // Xóa token xác thực từ localStorage hoặc sessionStorage
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    // Chuyển hướng đến trang đăng nhập
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛍️ Product List</h2>
      
      {/* Đặt nút Logout sang bên phải */}
      <div className="row mb-4">
        <div className="col text-end"> {/* Căn phải */}
          <button onClick={handleLogout} className="btn btn-danger">
            Logout
          </button>
        </div>
      </div>

      {/* Nút Thêm Sản Phẩm */}
      <div className="row mb-4">
        <Link to="/products/add" className="btn btn-success">Create Product</Link>
      </div>
      
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow h-100 border-0 rounded-4">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {product.brand} • {product.category}
                </h6>
                <p className="card-text text-truncate">{product.description}</p>
                <p className="card-text">
                  <strong>Price:</strong>{' '}
                  <span className="text-success fw-bold">{product.price.toLocaleString()} VND</span>
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-outline-primary mt-auto w-100 mb-2"
                >
                  View Details
                </Link>
                <Link
                  to={`/products/update/${product.id}`}
                  className="btn btn-warning w-100 mb-2"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product.id)}
                  className="btn btn-danger w-100"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
        {products.length === 0 && (
          <div className="text-center text-muted">No products available.</div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
