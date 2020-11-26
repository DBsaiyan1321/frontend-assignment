import React from "react";
import "./Navbar.scss";

const Navbar = () => { 
    return (
        <nav className="nav">
            <div> 
                <h1>Travelize</h1>
                <h2>My traveling experiences</h2>
            </div>
            <ul className="links">
                <li className="links__elem">Home</li>
                <li className="links__elem">Blog</li>
                <li className="links__elem links__elem--blue">About</li>
            </ul>
        </nav>
    )
}

export default Navbar;