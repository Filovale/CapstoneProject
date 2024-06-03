import React, { useState } from "react";
import { Form, Button, Alert, Collapse } from "react-bootstrap";
import "./PostReview.css";

const PostReview = ({ droneId, onReviewPosted }) => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [stars, setStars] = useState(1);
  const [successMessage, setSuccessMessage] = useState("");
  const [formVisible, setFormVisible] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const review = {
      author,
      title,
      description: content,
      stars,
      date: new Date().toISOString().split("T")[0],
    };

    fetch(`http://localhost:3001/drones/${droneId}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((data) => {
        onReviewPosted(data); // Chiama la funzione di callback per aggiornare le recensioni
        setAuthor("");
        setTitle("");
        setContent("");
        setStars(1);
        setSuccessMessage("Review submitted successfully!");
        setTimeout(() => setSuccessMessage(""), 3000); // Rimuovi il messaggio dopo 3 secondi
        setFormVisible(false); // Nascondi il form dopo l'invio
      })
      .catch((error) => {
        console.error("Error posting review:", error);
      });
  };

  const isLoggedIn = !!localStorage.getItem("authToken");

  return (
    <div className="post-review">
      {isLoggedIn ? (
        <>
          <Button
            onClick={() => setFormVisible(!formVisible)}
            aria-controls="review-form"
            aria-expanded={formVisible}
          >
            {formVisible ? "Hide Review Form" : "Add a Review"}
          </Button>
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          <Collapse in={formVisible}>
            <div id="review-form">
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="reviewAuthor">
                  <Form.Label>Author</Form.Label>
                  <Form.Control
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="reviewTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="reviewContent">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="reviewStars">
                  <Form.Label>Rating</Form.Label>
                  <Form.Control
                    as="select"
                    value={stars}
                    onChange={(e) => setStars(parseInt(e.target.value))}
                    required
                  >
                    {[1, 2, 3, 4, 5].map((star) => (
                      <option key={star} value={star}>
                        {star} Star{star > 1 ? "s" : ""}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit Review
                </Button>
              </Form>
            </div>
          </Collapse>
        </>
      ) : (
        <p>Want to leave a review? Please login or register</p>
      )}
    </div>
  );
};

export default PostReview;
