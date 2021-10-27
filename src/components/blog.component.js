/*import React from 'react';
import marked from 'marked';

class Blog extends React.Component {
  getMarkdownText() {
    var rawMarkup = marked('This is _Markdown_.', {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return <div dangerouslySetInnerHTML={this.getMarkdownText()} />
  }
}

export default Blog;
*/

import React from 'react';
import ReactDOM from 'react-dom';
import marked from "marked";
import Parser from 'html-react-parser';

class Blog extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			props: props,
			markdown: ''
		}
	}

	async componentDidMount() {
        import(`../blogs/${this.state.props.match.params.name}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => {
                    	return res.text();                   	
                    })
                    .then(text => {
                    	console.log(text);
						this.setState({
							markdown: marked(text)
						}) 
                    })
             });
	}

	render() {
  		const { markdown } = this.state;
		return(
			<div>
			 {Parser(this.state.markdown)}
			</div>
		)	
	}
}

export default Blog;
