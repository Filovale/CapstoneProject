import React, { useState, useEffect } from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import login from "./login.jpg";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";
import "./BlogNavbar.css";

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Controlla se esiste un token nel local storage all'avvio
    const token = localStorage.getItem("authToken");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogin = (token) => {
    console.log(token);
    setLoggedIn(true);
    localStorage.setItem("authToken", token);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("authToken");
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
          {loggedIn ? (
            <>
              <li><span>Welcome!</span></li>
              <li>
                <Button onClick={handleLogout}>Logout</Button>
              </li>
            </>
          ) : (
            <>
              <li><Button onClick={() => setShowRegister(true)}>Register</Button></li>
              <li>
                <img
                  className="blog-navbar-login"
                  alt="login"
                  src={login}
                  onClick={() => setShowLogin(true)}
                />
              </li>
            </>
          )}
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
    </>
  );
};

export default NavBar;
