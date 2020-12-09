const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Show extends React.Component{
    render() {
        return (
            <Layout>
                <h1>About Me</h1>
                <p> {this.props.comment.name} comment</p>
                <a href={'/'}>Go Back Home</a><br/>
                <a href={'/comments/new'}>Create a New comment</a><br/>
                <a href={`/comments/${this.props.comment._id}/edit`}>{`Edit ${this.props.comment.name}`}</a>
            </Layout>
        )
    }
}

module.exports = Show; 