import React from 'react';
import ReactDOM from 'react-dom';
import list from "../blogs.json";

class BlogList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: ""
		}
	}

	componentDidMount() {
		console.log(list);

		this.setState({
			data: list
		})
	}

	listBlogs() {

		console.log("this is running");

		const val = this.state.data.map(function(blog, i){
						return <div>
								<h3>{blog.title}</h3>
								<p>{blog.subtitle}</p>
							   </div>
					});

		return(val);
	}

	render() {
		return(
			<div>
				{this.state.data != "" ? this.listBlogs() : <></>}
			</div>
		)
	}
}

export default BlogList;