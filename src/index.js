import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cover from './images/Cover.jpg';
import { Input, Menu, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export default class Navbar extends React.Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item
            name='Home'
            active={activeItem === 'Home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='About'
            active={activeItem === 'About'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Interests'
            active={activeItem === 'Interests'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Projects'
            active={activeItem === 'Projects'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='News'
            active={activeItem === 'News'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Fun'
            active={activeItem === 'Fun'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Philosophy'
            active={activeItem === 'Philosophy'}
            onClick={this.handleItemClick}
          />  
          <Menu.Item
            name='Blog'
            active={activeItem === 'Blog'}
            onClick={this.handleItemClick}
          />                      
        </Menu>
      </div>
    )
  }
}

class Website extends React.Component {
	render() {
		return(
			<div>
				<Navbar />			
				<img src={Cover} width="100%"/>
			</div>
		)
	}
}

ReactDOM.render(
  <React.StrictMode>
    <Website />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
