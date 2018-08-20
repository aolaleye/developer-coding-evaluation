import React from 'react';
import fifththird from '../assets/logos/logo-fifththird.png';
import chhn from '../assets/logos/logo-chhn.png';
import chs from '../assets/logos/logo-chs.png';
import skanska from '../assets/logos/logo-skanska.png';
import pg from '../assets/logos/logo-p&g.png';
import rackroom from '../assets/logos/logo-rackroom.png';

const clients = [{logo: fifththird, name: "fifth third bank", class: "fifththird"},
                 {logo: chhn, name: "the christ hospital health network", class: "chhn"},
                 {logo: chs, name: "carolina healthcare system", class: "chs"},
                 {logo: skanska, name: "skanska", class: "skanska"},
                 {logo: pg, name: "p&g", class: "pg"},
                 {logo: rackroom, name: "rack room shoes", class: "rackroom"}];

const Clients = () => (
    <section className="clients">
    <div className="clients-container">
        <div className="client-info">
            <h3>Our Clients</h3>
            <p>Over the years, our team has had the distinction of working with a variety of brands in different industries. Here is a short list of some of the names we have worked with.</p>
        </div>
    
        {clients.map((client, i) => (
            <div className="client-logo">
                <img key={i} src={client.logo} alt={client.name} className={client.class}/>
            </div>
        ))}
    </div>
    </section>
)
 
export default Clients;