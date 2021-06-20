import React from "react";
import { Link } from "react-router-dom";
import '../styles.css';

  function Home() {
    return (
      <>
      <div id="root"></div>
      <div className="bg">
      <div class="jumbotron">
        <h1> Jake Alexander</h1> 
      </div>
      <p class="subtitle">Front End Developer Looking for Gainful Employment </p>
      
      <a href="#about-sec" class="scrolling">
        <div class="scrolldown">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </a>
      
      <div class="about" id="about-sec">
        <h2 class="about-title">About</h2>
          <p class="about-info">
            As a recent graduate from two of <a className="about-link" href="www.nucamp.co">Nucamp's </a>intensive developer bootcamp tracks, I’m looking for a junior or
            intro-level web developer position. I’m well versed in React.js, HTML, CSS, and JavaScript and am interested in
            taking my skillset to the next level by learning from experienced developers in the field that are implementing
            code-based solutions to real-world problems. 
        </p>
      </div>
      <div class="project-container">
        <h2 id="project-title">Projects</h2>
      <div class="project-content">
        <div class="project1" id="main-project">
            <a href="https://rachel-and-oliver.web.app"  target="_blank">
              <img src='/images/rachandoliver.jpg'/>
              <p class="project-subtitles"> 
                <span>
                  Freelance Wedding Website
                </span>
                </p>
            </a>
        </div>
        <div class="project2">
          <Link to="/js-games" target="_blank">
            <img src="/images/jsgaming-pic.png" />
            <p class="project-subtitles"> 
              <span>
                JS Gaming
              </span>
              </p>
          </Link>
        </div>
        <div class="project3">
          <Link to="/menu-home" target="_blank">
            <img class="image-filler" src="/images/JakesFamous.png" />
            <p class="project-subtitles"> 
              <span>
                Jake's Famous Diner
              </span>
              </p>
          </Link>
        </div>
        </div> 
      </div>
      <div class="resume-container">
        <h2 class="education"> Education </h2>
          <ul className="resume-box">
            <h3 class="education-title">Nucamp Developer Bootcamp Program</h3>
            <h3 className="fullstack">Full-stack Web Development Bootcamp | March 2020 – August 2020 </h3>
            <li class="resume-content">
              <h4 class="resume-content-1">Strong introduction to front-end and back-end development in React, NodeJS and MongoDB. </h4>
              <h4 class="resume-content-2">Coded and collaborated with a partner to implement a design and coding solution. </h4>
              <h4 class="resume-content-3">Developed a CRUD application with a functional shopping cart. </h4>
              <h4 class="resume-content-4">Received a certificate of honors for my final project implementation and design. </h4>
            </li>
            <h3 className="Webdev">Web Development Fundamentals Bootcamp | August 2020 – September 2020 </h3>
            <li class="resume-content">
              <h4>A four-week concentrated bootcamp focused on establishing familiarity with HTML, CSS, and JavaScript. </h4>
              <h4>Culminated in a final project designed around JavaScript gaming algorithms and design. </h4>
            </li>
            <h3 class="education-title">Harford Community College</h3>
            <h3>Basic C++ | Summer 2018</h3>
            <li class="resume-content">
             <h4> Learned the fundamentals of programming through the basics of C++, included programming assignments
              working with variables, arrays, for loops, and data types. </h4>
            </li>
              <h2> Additional Education </h2>
             
                <h3> Associate of Arts & Psychology, Harford Community College (2015-2017)  </h3>
                <h3>Bachelor of Science in Homeland Security, University of Maryland Global Campus (2016-2020)</h3> 
                
             
              <h2> Internship Experience </h2>
              <h3 class="education-title">Living Legacy Foundation, Baltimore, MD</h3>
              <h3 className="PO-intern">Public Outreach Intern | May 2017 - August 2017 </h3>
              <li class="resume-content">
                <h4>Updated website content through the organization’s in-house content management system</h4>
                <h4>Worked with a wide variety of team members and staff to support operational work across the
                  organization</h4>
                <h4>Supported organ-donation sign-up initiatives at tabling events</h4>
              </li>
          </ul>
      </div>
      <div class="contact">
        <ul class="contact-list">
          <li>
            <a class="resume-link" href="/images/Jake-resume1.pdf" target="_blank">
              <i class="fas fa-file fa-2x"></i>
            </a>
          </li>
          <li>
            <a class="contact-link" href="mailto:jalexander91196@gmail.com" target="_blank">
              <i class="fas fa-envelope" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="contact-link" href="https://github.com/JakeAlex15" target="_blank">
              <i class="fab fa-github-square" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a class="contact-link" href="https://www.linkedin.com/in/jake-alexander-895987187/" target="_blank">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
      </div> 
      </div>
      </>
    );
    }
  
    


export default Home;