import React from "react";
import { Container } from "react-bootstrap";
import DroneList from "../../components/drone/drone-list/DroneList";
import "./Home.css";

const Home = props => {
  return (
    <Container fluid="sm">
      <h1 className="blog-main-title mb-3">Welcome to Drone Central</h1>
      <h4>Every drone, all the information, always up-to-date.</h4>
      <DroneList />
    </Container>
  );
};

export default Home;
