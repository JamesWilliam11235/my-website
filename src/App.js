import React, { Component } from "react";
import "./App.css";
import hamburger from "./images/hamburger.png";
import profileImg from "./images/john.png";
import statistic from "./images/statistic.png";
import girl from "./images/girl.png";
import pattern from "./images/pattern.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import twitter from "./images/twitter.png";
import linkedin from "./images/linkedin.png";

export default class App extends Component {
  render() {
    return (
      <body>
        {/* navbar */}

        <nav className="nav-container">
          <ul className="nav-ul">
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <button className="nav-btn">
            <img src={hamburger} alt="img" />
            <ul>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </button>
        </nav>

        {/* header */}

        <header className="container">
          <div className="head-content">
            <h1>Hi, I am John, Creative Technologist</h1>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button>Download Resume</button>
          </div>
          <div className="head-img">
            <img src={profileImg} alt="img" />
          </div>
        </header>

        {/* main */}

        <main>
          {/* posts */}
          <section className="posts">
            <div className="container">
              <div className="posts-side">
                <h4>Recent posts</h4>
                <a href="#">View all</a>
              </div>
              <div className="posts-side">
                <div className="posts-card">
                  <h1>Making a design system from scratch</h1>
                  <div className="posts-info">
                    <span>12 Feb 2020</span>
                    <span>|</span>
                    <span>Design, Pattern</span>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
                <div className="posts-card">
                  <h1>Creating pixel perfect icons in Figma</h1>
                  <div className="posts-info">
                    <span>12 Feb 2020</span>
                    <span>|</span>
                    <span>Figma, Icon Design</span>
                  </div>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* feature */}
          <section className="container feature">
            <h3>Featured works</h3>
            <div className="feature-card">
              <div>
                <img src={statistic} alt="img" />
              </div>
              <div>
                <h1>Designing Dashboards</h1>
                <div className="feature-date">
                  <span>2020</span>
                  <h6>Dashboard</h6>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <hr />
            <div className="feature-card">
              <div>
                <img src={girl} alt="img" />
              </div>
              <div>
                <h1>Vibrant Portraits of 2020</h1>
                <div className="feature-date">
                  <span>2018</span>
                  <h6>Illustration</h6>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <hr />
            <div className="feature-card">
              <div>
                <img src={pattern} alt="img" />
              </div>
              <div>
                <h1>36 Days of Malayalam type</h1>
                <div className="feature-date">
                  <span>2018</span>
                  <h6>Typography</h6>
                </div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <hr />
          </section>
        </main>

        {/* footer */}

        <footer className="container">
          <div>
            <a href="#">
              <img src={facebook} alt="img" />
            </a>
            <a href="#">
              <img src={instagram} alt="img" />
            </a>
            <a href="#">
              <img src={twitter} alt="img" />
            </a>
            <a href="#">
              <img src={linkedin} alt="img" />
            </a>
          </div>
          <p>Copyright ©2020 All rights reserved </p>
        </footer>
      </body>
    );
  }
}
