import React from 'react';
import { Card, Col } from 'react-bootstrap';
const Service = (props) => {
    // destructuring the props
    const { name, duration, img, price } = props.service;
    return (
        <Col>
            <Card className="shadow-lg mb-5 bg-body rounded">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Course Duration: {duration} Months
                    </Card.Text>
                    <Card.Text>
                        Course Fee:  <span className="text-danger">${price}</span>
                    </Card.Text>
                    <button className="btn btn-secondary">Course Details</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Service;