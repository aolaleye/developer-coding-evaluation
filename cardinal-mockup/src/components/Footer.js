import React from 'react';
import twitter from '../assets/icons/icon-twitter.svg';
import facebook from '../assets/icons/icon-facebook.svg';
import googleplus from '../assets/icons/icon-g+.svg';

const Footer = () => (
    <footer>
        <div>
            <p>&copy;2016 Cardinal Solutions. All rights reserved.</p>
            <div>
                <img src={twitter} alt="logo"/>
                <img src={facebook} alt="logo"/>
                <img src={googleplus} alt="logo"/>
            </div>
        </div>
    </footer>
)
 
export default Footer;