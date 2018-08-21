import React from 'react';

const Connect = () => (
    <div className="connect">

        <section className="connect-info">
            <h3>Connect With Us</h3>
            <p>Have a question or just want to chat?<br/>Get in touch.</p>
            <form>
                <input className="form-input" type="text" name="name" placeholder="Name"/>
                <br/>
                <input className="form-input" type="email" name="email" placeholder="Email"/>
                <br/>
                <textarea className="form-input" name="message" rows="8" cols="20" placeholder="Message"/>
                <br/>
                <input className="form-submit" type="submit" value="Submit" aria-label="Submit"/>
            </form>
        </section>

        <hr/>

        <section className="contact-info">
            <div className="contact-person">
                <h4>For inqueries, please contact:</h4>
                <p>
                    Tracy Thompson
                    <br/>
                    tthompson@cardinalsolutions.com
                    <br/>
                    <strong>704.396.4444</strong>
                </p>
            </div>
            <div className="contact-address">
                <h4>Come by our office</h4>
                <p>222 S. Church St. Suite 500,<br/>Charlotte, NC 28202</p>
                <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.1687454537964!2d-80.84853038477098!3d35.22716916234709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a02eff060615%3A0x48d940188845f7fb!2s222+S+Church+St+%23500%2C+Charlotte%2C+NC+28202!5e0!3m2!1sen!2sus!4v1534518731382" width="150" height="150" frameBorder="0"></iframe>
                <br/>
                <a href="https://goo.gl/maps/uTYUd56ztkM2">Find parking on our map!</a>
            </div>
        </section>

    </div>
)
 
export default Connect;