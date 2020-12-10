const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class New extends React.Component{
    render() {
        return (
            <Layout>
                <h1>Projects</h1>
                <form action="/projects" method="POST">
                Name: <input type="text" name="name" /><br/>
                Link:   <input type="string" name="link" /><br/>
                Screenshot: <input type="string" name="screenshot" /><br/>
                Description: <input type="string" name="description" /><br/>
                <input type="submit" name="" value="Create Project"/>
             </form>
            </Layout>
        )
    }
}

module.exports = New; 