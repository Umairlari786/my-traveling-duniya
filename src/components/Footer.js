import React from 'react';
import './footer.css'; // You can create a CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">TripOnWeekend</div>
                <div className="footer-links">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/services">Services</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
            <p className="footer-text">© 2023 Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
