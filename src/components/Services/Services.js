import React, { useContext } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { ServiceContext } from "../../App";
import Service from "../Service/Service";
const Services = () => {
  // getting value from service context
  const [services] = useContext(ServiceContext);
  return (
    <div>
      <h1 className="text-center p-5">Our Services</h1>
      {services.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Container>
          <Row xs={1} md={3} sm={2} className="g-4">
            {services.map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};
export default Services;
