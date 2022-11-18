import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
const LoginScreen = () => {
  return (
    <Container className="small-container ">
      <h1 className="my-3">Login</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>
        <div className="mb-3">
          <Button type="submit" variant="dark">
            Login
          </Button>
        </div>
      </Form>
      <Container>
        <Link to="/signin" variant="body2 ">
          {"Don't have an account? Sign Up"}
        </Link>
      </Container>
    </Container>
  );
};

export default LoginScreen;
