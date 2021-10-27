import About from "./components/about.component";
import ProjectList from "./components/projects.component";
import Blog from "./components/blog.component";
import BlogList from "./components/blogList.component";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Profile from './images/Profile.jpg';
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import twitter from "./images/twitter.png";
import instagram from "./images/gh_logo.png";
import linkdin from "./images/linkdin.png";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
/*
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
}*/

class Website extends React.Component {
	render() {
		return(
        <div>
        <div className="container">
          <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1"> 
            </span>
          </nav>
          <Router>
            <Switch>
              <Route path="/about" exact component={About} />
              <Route path="/homepage" exact component={ProjectList} />
              <Route path="/blogs" exact component={BlogList} />
              <Route path="/blog/:name" exact component={Blog} />
            </Switch>
          </Router>
        </div>
          <div className="bg-dark mt-5 p-3 d-flex justify-content-center">
          <p className="text-white">&copy; Copyright Aniket Gupta, 2021</p>
          copyright
          </div>        
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
