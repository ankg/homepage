import ProjectCards from "./components/projects.component";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Cover from './images/Cover.jpg';
import Profile from './images/Profile.jpg';
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import twitter from "./images/twitter.png";
import instagram from "./images/gh_logo.png";
import linkdin from "./images/linkdin.png";

import ingig from './images/ingig.png';
import scrappy from './images/ScrappySquirrels.PNG';
import certificate from './images/certificate.jpg';
import bootcamp from './images/bootcamp.PNG';
import substack from './images/substack.png';
import twitterBot from './images/twitter_bot.png';
import livestream from './images/livestream.jpg';
import gsoc from './images/gsoc.png';

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
        <div className="container">
          <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand mb-0 h1"> </span>
          </nav>
    			<div className="d-flex justify-content-center flex-nowrap">
            <div className="row col-8 align-items-center clearfix mt-5">
              <div className="col mb-3">		
      				  <img src={Profile} className="rounded-circle img-responsive" width={250}/>
              </div>
              <div className="col ml-n4">
                <p>
                  <h3>Aniket Gupta</h3>
                  <br />
                  An entrepreneur masquerading as a programmer 
                  <br /><br />
                  I used to run <a href={"http://ingig.live"} target="_blank">http://ingig.live</a> until I fell in love with crypto
                </p>
                 <div className="social-links">
                  <a href={"https://twitter.com/ankg404"} target="_blank">
                    <img src={twitter} alt="twitter"/>
                  </a>
                  <a href={"https://github.com/ankg"} target="_blank">
                    <img src={instagram} width="54" alt="github"/>
                  </a>
                  <a
                    href={"https://www.linkedin.com/in/ankg404/"}
                    target="_blank"
                  >
                    <img src={linkdin} alt="linkdin"/>
                  </a>
                </div>
              </div>
              <br /><br />
              <div className="d-flex justify-content-center mt-5">
                <div>
                  <h3>Projects</h3>
                <hr />                  
                </div>
              </div>
              <div className="d-flex justify-content-center flex-nowrap">
                <br />
                <table>{this.renderProjectCards()}</table>
              </div>
            </div>
    			</div>
            

        </div>
		)
	}

  renderProjectCards()
  {
    console.log("function executes")
    const projects = [
      {
        "project": "Ingig Live - A live streaming platform for musicians",
        "link": "http://ingig.live",
        "description": "My recent venture where we scaled to 10,000 users, got backed by Accel Partners' Founderstack and helped 100+ artists make their ONLY income during COVID",
        "image":ingig
      },
      {
        "project": "Crypto: Scrappy squirrels NFT Project",
        "link": "http://www.scrappysquirrels.co",
        "description": "10,000 unique NFTs with nearly 60 different traits. Tentative Launch: November end",
        "image":scrappy
      },
      {
        "project": "Crypto: NFT Certificates for Courses",
        "link": "https://maven.com/preethi/ethereum-bootcamp",
        "description": "Project to disburse certificates for Preethi Kasireddy's Course as NFTs (Private repo)",
        "image":certificate
      },
      {
        "project": "Crypto: Educational Content Development",
        "link": "https://github.com/ankg/smartContracts",
        "description": "Some standard code templates used as introductory smart contracts for beginners",
        "image":bootcamp
      },
      {
        "project": "Crypto: Blog on Crypto and Philosophy",
        "link": "https://cryptodunks.substack.com/",
        "description": "Just started a blog to focus on crypto technicals. First technical blog coming soon.",
        "image":substack
      },
      {
        "project": "Business Thoughts Bot on Twitter",
        "link": "https://twitter.com/bizthoughts_bot",
        "description": "Wrote a quick bot that tweets business advice from top businessmen, mostly Kunal Shah",
        "image":twitterBot
      },
      {
        "project": "Peer to Peer Live streaming engine in C++",
        "link": "https://github.com/adiitya/p2pstream",
        "description": "Passion project that got me curious about video streaming and led to the founding of my first company, Ingig",
        "image":livestream
      },
      {
        "project": "Gesture control of Applications using Leap Motion Device",
        "link": "https://github.com/ankg/GSoC-Leap-Motion",
        "description": "Was one of the youngest people to get selected and worked with The Concord Consortium on Gesture integration in their applications",
        "image":gsoc
      },      
    ];
    let val = projects.map(function(content, i){
      /*return <div className="d-flex mb-4 border-bottom pb-4">
              <div className="row">
                  <div className="col">
                    <img className="" src={content["image"]} width="200"/>
                  </div>
                  <div className="col">
                    <h4>{content["project"]}</h4>
                    <p>{content["description"]}</p>
                    <a href={content["link"]} target="_blank">
                      Visit Link
                    </a>
                  </div>
              </div>
             </div>;*/

        return <tr className="border-bottom">
                <td className="p-3"><img className="" src={content["image"]} width="200"/></td>
                <td className="p-3">
                    <h4>{content["project"]}</h4>
                    <p>{content["description"]}</p>
                    <a href={content["link"]} target="_blank">
                      Visit Link &#x2197;
                    </a>
                </td>
               </tr>
    });

    console.log(val);

    return(val);
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
