import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        navigate('/products');
      }
    } catch (error) {
      setError('Email hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <div style={{ backgroundColor: '#f0f2f5', height: '100vh' }}>
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Row className="w-100">
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="shadow-lg border-0 rounded-4">
              <Card.Body className="p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-primary">BestStore</h2>
                  <p className="text-muted">Chào mừng bạn trở lại! Vui lòng đăng nhập để tiếp tục.</p>
                </div>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Nhập email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
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

                  <Button type="submit" variant="primary" className="w-100 rounded-pill">
                    Đăng nhập
                  </Button>

                  <div className="text-center mt-3">
                    <a href="/register" className="text-decoration-none text-secondary">
                      Chưa có tài khoản? <strong>Đăng ký ngay</strong>
                    </a>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
