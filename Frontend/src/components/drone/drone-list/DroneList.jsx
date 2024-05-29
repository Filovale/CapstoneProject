import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import DroneItem from "../drone-item/DroneItem";

const DroneList = (props) => {

  const [drones, setDrones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    fetch("http://localhost:3001/drones")
      .then((response) => response.json())
      .then((data) => {
        setDrones(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching drone data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Row>
      {drones.map((drone, i) => (
        <Col
          key={`item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <DroneItem key={drone.title} {...drone} />
        </Col>
      ))}
    </Row>
  );
};

export default DroneList;



























/*
import React from "react";
import { Col, Row } from "react-bootstrap";
import posts from "../../../data/drone.json";
import DroneItem from "../drone-item/DroneItem";

const DroneList = props => {
  return (
    <Row>
      {posts.map((post, i) => (
        <Col
          key={`item-${i}`}
          md={4}
          style={{
            marginBottom: 50,
          }}
        >
          <DroneItem key={post.title} {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default DroneList;
*/
