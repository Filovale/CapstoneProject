import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="column">
            <h5>Utilities</h5>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
          </div>
          <div className="column">
            <h5>Contacts</h5>
            <ul>
              <li>Address: Str: Prinzera 37</li>
              <li>Phone: +39 3349936330</li>
              <li>E-mail: vfilippo977@gmail.com</li>
            </ul>
          </div>
          <div className="column">
            <h5>Social</h5>
            <ul>
              <li><a href="#" onClick={handleShowModal}><i className="fab fa-facebook"></i> Facebook</a></li>
              <li><a href="#" onClick={handleShowModal}><i className="fab fa-twitter"></i> X</a></li>
              <li><a href="#" onClick={handleShowModal}><i className="fab fa-instagram"></i> Instagram</a></li>
              <li><a href="#" onClick={handleShowModal}><i className="fab fa-tiktok"></i> TikTok</a></li>
            </ul>
          </div>
        </div>
      </footer>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Coming Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We will be present on this platform soon. Stay tuned for updates and exciting content!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Footer;
