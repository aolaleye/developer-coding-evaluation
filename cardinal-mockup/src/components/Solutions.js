import React from 'react';
import bi from '../assets/icons/icon-bi.svg';
import ad from '../assets/icons/icon-appdev.svg';
import ba from '../assets/icons/icon-ba.svg';

const Solutions = () => (
    <section className="solutions">

        <article>
            <img src={bi} alt="logo" />
            <h3>Business Intelligence</h3>
            <p>We use technology to turn data into knowledge that can help manage and monitor your business, from anywhere.</p>
        </article>

        <article>
            <img src={ad} alt="logo" />
            <h3>App Development</h3>
            <p>Our mobile specialists work ot create rich, easy-to-use consumer or enterprise experiences for IOS, Android.</p>
        </article>

        <article>
            <img src={ba} alt="logo" />
            <h3>Business Analysis</h3>
            <p>Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
        </article>
        
    </section>
)
 
export default Solutions;