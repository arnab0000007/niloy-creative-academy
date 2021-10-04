import React, { useContext } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import { ServiceContext } from "../../App";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
const Home = () => {
  const [services] = useContext(ServiceContext);
  return (
    <div>
      <Banner></Banner>
      {services.length === 0 ? (
        <Spinner animation="border" />
      ) : (
        <Container>
          <h1 className="text-center p-5">Our Services</h1>
          <Row xs={1} md={4} sm={2} className="g-4">
            {services.slice(0, 4).map((service) => (
              <Service key={service.key} service={service}></Service>
            ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Home;
