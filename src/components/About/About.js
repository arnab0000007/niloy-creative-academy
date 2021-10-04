import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container>
      <h1 className="text-center p-5">Want to Know About Us?</h1>
      <Row>
        <Col xs={12} md={5} className="p-3">
          <img src="https://i.ibb.co/Bn5X8NQ/aboutus.png" alt="" className="img-fluid" />
        </Col>
        <Col xs={12} md={7} className="p-3">
          <Card className="text-center">
            <Card.Header>History</Card.Header>
            <Card.Body>
              <Card.Title className="py-3">Learn From The Core and Become Mastery</Card.Title>
              <Card.Text className="px-3 pb-5">
                Niloy Creative Academy is an Bangladeshi massive open online course
                (MOOC) provider aimed at professional adults and students. It was
                founded in May 2020 by Niloy and Arnab. As of June of 2021, the
                platform has more than 44 million students, 183,000 courses, and
                65,000 instructors teaching courses in 75 languages. There have been
                over 594 million course enrollments. Students take courses primarily
                to improve job-related skills. Some courses generate credit toward
                technical certification.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">Niloy Creative Academy</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
