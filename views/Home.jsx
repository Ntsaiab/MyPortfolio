const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Home extends React.Component{
    render() {
        return (
            <Layout>
                <body>
                    <header>
                        <nav>
                            <div>
                                <li><a href="/about">ABOUT ME</a></li>
                                <li><a href="/projects">PORTFOLIO</a></li>
                                <li><a href="/travels">ADVENTURES</a></li>
                                <li><a href="/comments">ABOUT YOU</a></li>
                                <li><a href="/contact">CONTACT ME</a></li>
                            </div>
                        </nav>
                    </header>
                    <main>
                        <div class="maindiv1">
                            <ul>
                                <li id="name">CANDICE SAMBURY</li>
                                <li id="profile-photo"></li>
                                <li>SO NICE TO MEET YOU!</li>
                            </ul>
                        </div>

                    </main>
                </body>
            </Layout>
        
        )
    }
}

module.exports = Home; 