import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const UpdateProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => setError('Product not found.'));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedProduct = { ...product };

    try {
      await axios.put(`http://localhost:8080/api/products/${id}`, updatedProduct);
      navigate(`/product/${id}`);  // Navigate to the product details
    } catch (error) {
      setError('An error occurred while updating the product!');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '100%', maxWidth: '500px' }} className="p-4 shadow-lg">
        <Card.Body>
          <h3 className="text-center mb-4">Update Product</h3>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={product.name || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="brand">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                type="text"
                name="brand"
                value={product.brand || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                value={product.category || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                name="price"
                value={product.price || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                value={product.description || ''}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 rounded-pill">
              Update Product
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UpdateProduct;
