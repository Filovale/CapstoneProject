import React, { useState } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import login from "./login.jpg";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import "./BlogNavbar.css";

const NavBar = props => {

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (token) => {
    setLoggedIn(true);
    // salva il token nel local storage o gestiscilo secondo le tue necessità
  };

  return (
    <>
      <Navbar expand="lg" className="blog-navbar" fixed="top">
        <Container className="justify-content-between">
          <Navbar.Brand as={Link} to="/">
            <img className="blog-navbar-brand" alt="logo" src={logo} />
          </Navbar.Brand>
          <div className="container-fluid">
            <h3 className="navbar-text">Drone Central</h3>
          </div>
        </Container>
        <ul className="navbar d-flex align-items-center">
          <li><a href="/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li>
            {loggedIn ? (
              <span>Welcome!</span>
            ) : (
              <img
                className="blog-navbar-login"
                alt="login"
                src={login}
                onClick={() => setShowLogin(true)}
              />
            )}
          </li>
        </ul>
      </Navbar>
      <LoginModal
        show={showLogin}
        handleClose={() => setShowLogin(false)}
        handleLogin={handleLogin}
      />
      <RegisterModal
        show={showRegister}
        handleClose={() => setShowRegister(false)}
      />
      <Button onClick={() => setShowRegister(true)}>Register</Button>
    </>
  );
};

export default NavBar;
