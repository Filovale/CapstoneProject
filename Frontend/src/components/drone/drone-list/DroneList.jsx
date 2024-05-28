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
