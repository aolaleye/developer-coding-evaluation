import React from 'react';
import twitter from '../assets/icons/icon-twitter.svg';
import facebook from '../assets/icons/icon-facebook.svg';
import googleplus from '../assets/icons/icon-g+.svg';

const Footer = () => (
    <footer className="footer">
        <p>&copy; 2016 Cardinal Solutions. All rights reserved.</p>
        <div className="social-icons">
            <img src={twitter} alt="twitter"/>
            <img src={facebook} alt="facebook"/>
            <img src={googleplus} alt="google plus"/>
        </div>
    </footer>
)
 
export default Footer;