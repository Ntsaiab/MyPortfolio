const React = require('react');
const Layout = require('./Layout/Layout.jsx');

class Index extends React.Component{
    render() {
        return (
            <Layout
            stylesheet="/css/index.css">
                <h1>Projects page</h1>
                <ul> 
                    {
                    this.props.projects.map((project) => {
                        return (
                            <li class="index">
                                <h1><a href={`/projects/${project._id}`}>{project.name} Click To See More</a></h1>
                                <form method="POST" action={`/projects/${project._id}?_method=DELETE`}>
                                    <input type="submit" value={`DELETE ${project.name.toUpperCase()}`}/>
                                </form>
                            </li>
                            )
                        })
                    }
                </ul>
            </Layout>
        )
    }
}

module.exports = Index;