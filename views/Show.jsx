const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Show extends React.Component{
    render() {
        const project = this.props.project;
        return (
            <Layout
            stylesheet="/css/show.css">
                <p> Name: {project.name} project</p>
                <p> Link: {project.link}</p>
                <p> Screenshot: <img src={project.screenshot} alt={project.name}/>Logo</p>
                <p> Description: {project.description}</p>

  
               <p><a href={'/projects/new'}>New project</a></p>
                <p><a href={`/projects/${project._id}/edit`}>{`Edit ${project.name}`}</a></p>
            </Layout>
        )
    }
}

module.exports = Show; 