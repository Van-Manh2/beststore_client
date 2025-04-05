import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const { id } = useParams(); // Get the product id from the URL

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        setError('Error loading product details.');
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  if (error) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mt-5">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Product Details</h2>
      <div className="card shadow border-0 rounded-4">
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {product.brand} • {product.category}
          </h6>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Price:</strong> 
            <span className="text-success fw-bold">{product.price.toLocaleString()} VND</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
