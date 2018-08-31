import React from 'react';
import gojo from '../assets/images/pic-gojo.png';
import fifththird from '../assets/images/pic-fifththird.png';
import chhn from '../assets/images/pic-chhn.png';

const Work = () => (
    <section className="work">

        <article className="work-gojo">
            <img src={gojo} alt="a container of purell sanitizer and a phone showing a medical app"/>
            <div>
                <h3>Gojo</h3>
                <h4>Internet of Things</h4>
                <p>Reducing the spread of hospital<br/> infections with the internet of Things.</p>
                <button>Learn More</button>
            </div>
        </article>

        <article className="work-fifththird">
            <img src={fifththird} alt="a phone showing the fifth third bank mobile app"/>
            <div>
                <h3>Fifth Third Bank</h3>
                <h4>Mobile App</h4>
                <p>Reimagine what a mobile banking<br/> experience should be, focusing on the<br/> user rather than the technology.</p>
                <button>View App</button>
            </div>
        </article>

        <article className="work-chhn">
            <img src={chhn} alt="a phone, tablet and desktop showing the christ hospital health network website"/>
            <div>
                <h3>The Christ Hospital<br/>Health Network</h3>
                <h4>Digital Platform</h4>
                <p>A digital front door to the finest patient<br/> experiences.</p>
                <button>Learn More</button>
            </div>
        </article>

    </section>
)
 
export default Work;