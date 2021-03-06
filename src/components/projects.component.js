import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import Profile from '../images/Profile.jpg';
import 'semantic-ui-css/semantic.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import twitter from "../images/twitter.png";
import instagram from "../images/gh_logo.png";
import linkdin from "../images/linkdin.png";

import ingig from '../images/ingig.png';
import scrappy from '../images/ScrappySquirrels.webp';
import certificate from '../images/certificate.jpg';
import bootcamp from '../images/bootcamp.PNG';
import substack from '../images/substack.png';
import twitterBot from '../images/twitter_bot.png';
import livestream from '../images/livestream.jpg';
import gsoc from '../images/gsoc.png';
import aniketLogo from '../images/aniket_logo.png';

class MiniAbout extends React.Component {
  render() {
    return(
      <div className="row">
        <div className="col mb-3">    
          <img src={Profile} className="rounded-circle" width={210}/>
        </div>
        <div className="col project-text">
          <p>
            <h3 className="project-header">Aniket Gupta</h3>
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
      </div>
    )
  }
}
class ProjectCards extends React.Component {
  renderProjectCards()
  {
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
                <td className="p-3"><img className="project-img" src={content["image"]}/></td>
                <td className="p-3 project-text">
                    <h4 className="project-header">{content["project"]}</h4>
                    <p>{content["description"]}</p>
                    <a href={content["link"]} target="_blank">
                      Visit Link &#x2197;
                    </a>
                </td>
               </tr>
    });

    return(val);
  }  
  render(){
    return(
      <div className="row">
        <div className="d-flex justify-content-center mt-5">
          <div>
            <h3>Projects</h3>
          <hr />                  
          </div>
        </div>
        <div className="d-flex justify-content-center col-sm-12 flex-nowrap">
          <br />
          <table className="">{this.renderProjectCards()}</table>
        </div>
      </div>
    )
  }
}
class ProjectList extends React.Component {
  render() {
    return(
      <div className="d-flex justify-content-center flex-nowrap">
        <div className="row col-md-8 col-lg-8 col-xl-8 col-sm-12 col-12 align-items-center clearfix mt-5">
          <MiniAbout />
          <br /><br />
          <ProjectCards />
        </div>
      </div>
    )
  }
}

export default ProjectList;