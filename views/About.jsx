const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class About extends React.Component{
    render() {
        return (
            <Layout>
                <h1>About Me</h1>
                <div>
                    <p>Xin Chao! Nyob zoo! Hello! Hola!</p>
                    <p>I am an aspiring software developer, that brings multicultural, multiligual and international skills to the industry.<br/>
                    I speak English, Spanish, basic Vietnamese and Hmong if the occasion arises, sprinkled in with basic greetings from about 20 other languages.</p>

                    <p>So enough talking because really there was nothing RESTful about me. Let's finally meet the MVP, CRUD! </p>

                    <p>Creating, Reading, Updating and Destroying language data, among other things, is what this CRUD is all about. CRUD's MVP is MVC which keeps CRUD in line and honest, plus it comes with a whole lot of REST. This REpresentaional State Transfer has nothing to do with what's happening with the Presidency. Ironically REST resides and likes control, controlling and controllers, sounds like an oxymoron right? How can something be RESTful and Controlling? Don't despair, the fact is its inherent design INDUCES a more RESTful route, as a matter of fact it even demands it. So there you have it, confused?<br/>
                    OK. The main take away is: REST INDUCES MVC to CRUD!</p>

                    <p>This CRUD-dy app has been brought to you by RESTful routes and MVC. </p>

                    <p>Hope you enjoyed getting to know me! Looks like I've created my own lorem.  Please tell me <span><a href="/comments">About You</a></span>  and sign the guestbook by way of your business cards before you leave.</p>

                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat temporibus, aut quidem, similique reprehenderit inventore amet nam architecto excepturi optio reiciendis nulla! Consequuntur officiis perspiciatis voluptas accusamus aut! Porro.</p>
                </div>
                
            </Layout>
        )
    }
}

module.exports = About; 