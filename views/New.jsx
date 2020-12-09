const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class New extends React.Component{
    render() {
        return (
            <Layout>
                <h1>Penny for your thoughts</h1>
                <form action="/comments" method="POST">
                Name: <input type="text" name="name" /><br/>
                Business: <input type="text" name="business" /><br/>
                Phone: <input type="tel" name="phone" /><br/>
                Link:   <input type="string" name="link" /><br/>
                AboutYou: <input type="string" name="aboutyou" /><br/>
                <input type="submit" name="" value="Create Comment"/>
             </form>
            </Layout>
        )
    }
}

module.exports = New; 