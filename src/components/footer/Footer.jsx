import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            
            <h1 className="footer__title">Rohit</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>

                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
            
            </ul>

            <div className="footer__social">
            <a href="https://leetcode.com/rohit4141/" className="home__social-icon" target="_blank">
            <i class='bx bx-code-block' ></i>    
            </a>
            <a href="https://www.linkedin.com/in/rohit-singh-rs31321/" className="home__social-icon" target="_blank">
            <i className="bx bxl-linkedin "></i>    
            </a>
            <a href="https://github.com/rohit-singh-rs31321" className="home__social-icon" target="_blank">
            <i className="bx bxl-github"></i>    
            </a> 
            </div>

            <span className="footer__copy">
                &#169; RohitSingh. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer