import React from 'react';
import bi from '../assets/icons/icon-bi.svg';
import ad from '../assets/icons/icon-appdev.svg';
import ba from '../assets/icons/icon-ba.svg';

const Solutions = () => (
    <section className="solutions">
    <div>

        <article>
            <img src={bi} alt="" className="bi"/>
            <h3>Business Intelligence</h3>
            <p>We use technology to turn data into knowledge that can help you manage and monitor your business, from anywhere.</p>
        </article>

        <article>
            <img src={ad} alt="" className="ad"/>
            <h3>App Development</h3>
            <p>Our mobile specialists work to create rich, easy-to-use consumer or enterprise experiences for IOS, Android.</p>
        </article>

        <article>
            <img src={ba} alt="" className="ba"/>
            <h3>Business Analysis</h3>
            <p>Great strategy begins with listening. We learn about businesses from the inside out, and then propose improvements.</p>
        </article>

    </div>
    </section>
)
 
export default Solutions;