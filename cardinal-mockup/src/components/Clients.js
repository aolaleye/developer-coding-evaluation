import React from 'react';
import fifththird from '../assets/logos/logo-fifththird.png';
import chhn from '../assets/logos/logo-chhn.png';
import chs from '../assets/logos/logo-chs.png';
import skanska from '../assets/logos/logo-skanska.png';
import pg from '../assets/logos/logo-p&g.png';
import rackroom from '../assets/logos/logo-rackroom.png';

const Clients= () => (
    <div>
        <div>
            <h3>Our Clients</h3>
            <p>Over the years, our team has had the distinction of working with a variety of brands in different industries. Here is a short list of some of the have worked with.</p>
        </div>
        <div>
            <img src={fifththird} alt="logo"/>
        </div>
        <div>
            <img src={chhn} alt="logo"/>
        </div>
        <div>
            <img src={chs} alt="logo"/>
        </div>
        <div>
            <img src={skanska} alt="logo"/>
        </div>
        <div>
            <img src={pg} alt="logo"/>
        </div>
        <div>
            <img src={rackroom} alt="logo"/>
        </div>
    </div>
)
 
export default Clients;