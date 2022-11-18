import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const HomeScreen = () => {
  return (
    <div>
      <Row className="align-items-center p-5 text-center">
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../images/Instagram.jpg" />
            <Card.Body>
              <Card.Title>Instagram</Card.Title>
              <Card.Text>Check the liste of top instagramers..</Card.Text>
              <Link to="/instagram">
                <Button variant="dark">Go to the liste</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../images/Facebook.jpg" />
            <Card.Body>
              <Card.Title>Facebook</Card.Title>
              <Card.Text>Check the liste of top facebookers..</Card.Text>
              <Link to="/instagram">
                <Button variant="dark">Go to the liste</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="../images/TikTok.jpg" />
            <Card.Body>
              <Card.Title>Tik Tok</Card.Title>
              <Card.Text>Check the liste of top tiktokers..</Card.Text>
              <Link to="/instagram">
                <Button variant="dark">Go to the liste</Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HomeScreen;
