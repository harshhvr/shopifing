import React from "react";
import {} from "react-router-dom";
import "./About.css";
// import YouTubeIcon from "@material-ui/icons/YouTube";
import { FaGithub, FaInstagram } from "react-icons/fa";
const About = () => {
  // const visitInstagram = () => {
  //   window.location = "https://instagram.com/meabhisingh";
  // };
  return (
    <>
      <div className="about-section">
        <div className="about-section-inner">
          <div className="title">About Us</div>

          <div className="article">
            We offer a wide variety of products with great deals on products,
            easy ordering options, secure payment options for your convenience
            and let you find products easily.
          </div>

          <div className="article">
            <div className="title">Team of Developers</div>

            <ul className="card-items">
              <li className="card-item">
                <div className="card">
                  <div className="card-head">
                    <img
                      src="https://avatars.githubusercontent.com/u/120925639?v=4"
                      alt="Profile Pic"
                    />
                  </div>

                  <div className="card-body">Devraj Trivedi</div>

                  <div className="card-foot">
                    <div className="social-icon-links">
                      <a
                        href="https://github.com/devrajtrivedi"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.instagram.com/devraj._trivedi"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="card-item">
                <div className="card">
                  <div className="card-head">
                    <img
                      src="https://res.cloudinary.com/drgu0tbi8/image/upload/v1698349043/avatars/ovbdubdxq1ii8bifuttl.png"
                      alt="Profile Pic"
                    />
                  </div>

                  <div className="card-body">Harsh Verdhan Raj</div>

                  <div className="card-foot">
                    <div className="social-icon-links">
                      <a
                        href="https://github.com/harshhvr"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.instagram.com/harshhvr13"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li className="card-item">
                <div className="card">
                  <div className="card-head">
                    <img
                      src="https://avatars.githubusercontent.com/u/64636872?v=4"
                      alt="Profile Pic"
                    />
                  </div>

                  <div className="card-body">Shlok Jaiswal</div>

                  <div className="card-foot">
                    <div className="social-icon-links">
                      <a
                        href="https://github.com/shlokjaiswal586"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaGithub />
                      </a>
                      <a
                        href="https://www.instagram.com/_shlok__jaiswal"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
