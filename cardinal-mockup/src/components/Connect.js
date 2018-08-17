import React from 'react';

const Connect = () => (
    <div>

        <section>
            <h3>Connect With Us</h3>
            <p>Have a question or just want to chat?<br/>Get in touch.</p>
            <form>
                <input type="text" name="name" placeholder="Name"/>
                <br/>
                <input type="email" name="email" placeholder="Email"/>
                <br/>
                <textarea name="message" rows="10" cols="30" placeholder="Message"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </section>

        <section>
            <div>
                <h4>For inqueries, please contact:</h4>
                <p>
                    Tracy Thompson
                    <br/>
                    tthompson@cardinalsolutions.com
                    <br/>
                    <strong>704.396.4444</strong>
                </p>
            </div>
            <div>
                <h4>Come by our office</h4>
                <address>222 S. Church St. Suite 500,<br/>Charlotte, NC 28202</address>
                <iframe title="Google Maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3259.1687454537964!2d-80.84853038477098!3d35.22716916234709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8856a02eff060615%3A0x48d940188845f7fb!2s222+S+Church+St+%23500%2C+Charlotte%2C+NC+28202!5e0!3m2!1sen!2sus!4v1534518731382" width="150" height="150" frameborder="0"></iframe>
                <br/>
                <a href="https://goo.gl/maps/uTYUd56ztkM2">Find parking on our map!</a>
            </div>
        </section>

    </div>
)
 
export default Connect;