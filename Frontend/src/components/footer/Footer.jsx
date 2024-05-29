import React from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer className="footer">
            <div className="container">
                <div className="column">
                    <h5>Contacts</h5>
                    <ul>
                        <li>Address: Str: Prinzera 37</li>
                        <li>Phone: +39 3349936330</li>
                        <li>E-mail: vfilippo977@gmail.com</li>
                    </ul>
                </div>
                <div className="column">
                    <h5>Utilities</h5>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="column">
                    <h5>Social</h5>
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i> X</a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i> TikTok</a></li>
                    </ul>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
