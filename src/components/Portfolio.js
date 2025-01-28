import React from "react";
import computer from "../img/comp.png";
import cv from "../img/cv.png";
import itunes from "../img/itunes.png";
import todo from "../img/to-do-list.png";
import netflix from "../img/netflix.png";
import "../styles/Portfolio.css";

function Portfolio() {
  return (
    <div className="text-box">
      <h2>Portfolio</h2>
      <p>
        Here, I’ve showcased a selection of my projects to highlight my skills
        and experience in full-stack web development. These examples represent
        just a portion of the work I’ve completed. If you’d like to see more or
        discuss any of these projects in detail, please don’t hesitate to
        contact me. I’d be happy to share more about my journey and work!
      </p>
      <div className="portfolio-body">
        <div className="portfolio-item">
          <a href="/assets/store.zip" className="nav-link" download>
            <img src={computer} className="computer" alt="computer" />
          </a>
          <p>Online Store</p>
        </div>
        <div className="portfolio-item">
          <a href="/assets/itunes-search-app.zip" className="nav-link" download>
            <img src={itunes} className="itunes" alt="itunes" />
          </a>
          <p>iTunes Search App</p>
        </div>
        <div className="portfolio-item">
          <a href="/assets/to-do-app.zip" className="nav-link" download>
            <img src={todo} className="todo" alt="todo" />
          </a>
          <p>To-Do App</p>
        </div>
        <div className="portfolio-item">
          <a href="/assets/app-clone.zip" className="nav-link" download>
            <img src={netflix} className="app-clone" alt="app-clone" />
          </a>
          <p>Netflix App Clone</p>
        </div>
        <div className="portfolio-item">
          <a href="/assets/Casey Baines CV.pdf" className="nav-link" download>
            <img src={cv} className="cv" alt="cv" />
          </a>
          <p>Casey Baines CV</p>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
