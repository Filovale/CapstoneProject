import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import "./DroneReviews.css";

const DroneReviews = ({ droneId }) => {

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (droneId) {

      fetch(`http://localhost:3001/drones/${droneId}/reviews`)
        .then((response) => response.json())
        .then((data) => {
          setReviews(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching reviews:", error);
          setLoading(false);
        });
    }
  }, [droneId]);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  return (
    
    <div className="drone-reviews">
      <h4>Reviews</h4>
      <ListGroup>
        {reviews.map((review, index) => (
          <ListGroup.Item key={index} className="review-item">
            <h5>{review.author}</h5>
            <p>{review.content}</p>
            <small>{review.date}</small>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default DroneReviews;