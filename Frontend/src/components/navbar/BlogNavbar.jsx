import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./BlogNavbar.css";
import login from "./login.jpg";

const NavBar = props => {
  return (
    <Navbar expand="lg" className="blog-navbar" fixed="top">
      <Container className="justify-content-between">
        <Navbar.Brand as={Link} to="/">
          <img className="blog-navbar-brand" alt="logo" src={logo} />
        </Navbar.Brand>
          <div class="container-fluid">
            <h3 class="navbar-text">Drone Central</h3>
          </div>
      </Container>
        <ul class="navbar d-flex align-items-center">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <Navbar.Brand as={Link} to="/">
              <img className="blog-navbar-login" alt="logo" src={login} />
            </Navbar.Brand>
        </ul>
    </Navbar>
  );
};

export default NavBar;
