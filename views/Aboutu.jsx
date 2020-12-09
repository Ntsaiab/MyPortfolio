const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Aboutu extends React.Component{
    render() {
        return (
            <Layout>
                <h1>Tell me something about you</h1>
                {/* <ul> 
                    {
                    this.props.comments.map((comment) => {
                        return (
                            <li>
                                <h1>This is my first {comment.name}</h1>
                            </li>
                            )
                        })
                    }
                </ul> */}
            </Layout>
        )
    }
}

module.exports = Aboutu;