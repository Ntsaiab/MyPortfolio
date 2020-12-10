const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Edit extends React.Component{
    render() {
        const project = this.props.project;
        return (
            <Layout>
                <h1>Edit Project</h1>
                <form action={`/projects/${project._id}?_method=PUT`} method="POST">
                Name: <input type="text" name="name" value={project.name} /><br/>
                Link:   <input type="string" name="link" value={project.link}/><br/>
                Screenshot: <input type="string" name="screenshot" value={project.screenshot} /><br/>
                Description: <input type="string" name="description" value={project.description} /><br/>
                <input type="submit" name="" value="Update Project"/>
             </form>
            </Layout>
        )
    }
}

module.exports = Edit; 