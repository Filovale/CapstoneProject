import React, { useEffect, useState } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import PostReview from "./PostReview"; 
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

  const handleReviewPosted = (newReview) => {
    setReviews([...reviews, newReview]);
  };

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  return (
    <div className="drone-reviews">
      <h4>Reviews</h4>
      <ListGroup>
        {reviews.map((review, index) => (
          <ListGroup.Item key={index} className="review-item">
            <h5>{review.title}</h5>
            <p>{review.description}</p>
            <Badge variant="primary">Rating: {review.stars} Star{review.stars > 1 ? "s" : ""}</Badge>
            <div className="review-metadata">
              <small>Published by <strong>{review.author}</strong> on {(new Date(review.date)).toLocaleDateString("it-IT")}</small>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <PostReview droneId={droneId} onReviewPosted={handleReviewPosted} />
    </div>
  );
};

export default DroneReviews;
