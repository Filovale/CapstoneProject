import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

const DroneItem = (props) => {

  const { title, cover, _id } = props;
  
  return (
    <Link to={`/drone/${_id}`} className="blog-link">
      <Card className="blog-card">
        <Card.Img variant="top" src={cover} className="blog-cover" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default DroneItem;
