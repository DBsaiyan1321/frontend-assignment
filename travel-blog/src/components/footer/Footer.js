import React from "react";
import "./Footer.scss";

const Footer = () => { 
    return ( 
        <footer className="footer">
            <p>&copy; 2020 Travelize</p>
            <ul className="footer__links">
                <li className="footer__link">Privacy Policy</li>
                <li className="footer__link">Terms and Conditions</li>
            </ul>
        </footer>
    )
};

export default Footer;