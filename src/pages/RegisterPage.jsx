import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        email,
        password,
        name,
      });

      if (response.status === 200) {
        navigate('/login');
      }
    } catch (error) {
      setError('Đã có lỗi xảy ra khi đăng ký!');
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Card style={{ width: '100%', maxWidth: '500px' }} className="p-4 shadow-lg border-0 rounded-4">
          <Card.Body>
            <div className="text-center mb-4">
              <h2 className="fw-bold text-primary">BestStore</h2>
              <p className="text-muted">Tạo tài khoản mới để bắt đầu mua sắm!</p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Tên</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nhập tên của bạn"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Mật khẩu</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              {error && <Alert variant="danger">{error}</Alert>}

              <Button variant="primary" type="submit" className="w-100 rounded-pill">
                Đăng Ký
              </Button>

              <div className="text-center mt-3">
                <a href="/login" className="text-decoration-none text-secondary">
                  Đã có tài khoản? <strong>Đăng nhập</strong>
                </a>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default RegisterPage;
