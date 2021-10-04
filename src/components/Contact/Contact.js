import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
const Contact = () => {
  return (
    <Container>
      <h1 className="text-center p-5">Want to Contact Us?</h1>
      <Row>
        <Col xs={12} md={7} className="p-3">
          <Card className="shadow-lg p-3 mb-5 bg-body rounded">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Any Questions??</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="write your question here"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card>
        </Col>
        <Col xs={12} md={5} className="p-3">
          <img
            src="https://i.ibb.co/jkR2WSj/contact.png"
            alt=""
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
