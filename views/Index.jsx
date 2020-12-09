const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Index extends React.Component{
    render() {
        return (
            <Layout>
                <h1>This is my projects page</h1>
                {/* <ul> 
                    {
                    this.props.projects.map((project) => {
                        return (
                            <li>
                                <h1>This is my first {project.name}</h1>
                            </li>
                            )
                        })
                    }
                </ul> */}
            </Layout>
        )
    }
}

module.exports = Index;