import React from "react";
import "./styles.css";
import homeImage from "../../../assets/images/dev.svg";
import Typical from 'react-typical';
import myResume from "../../../assets/pdf/Resume.pdf";

const PageIntro = ({ reff }) => {
  return (
    <section ref={reff}>
      <div className="container">
        <div className="row">
          <div id="intro-section" className="col">
            <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4  text-center">
                    <h3
                      className="display-3 fw-bold   pt-md-5 pt-5"
                      style={{ color: "#2A083F", 
                              fontFamily:"Sacramento,cursive"}}
                    >
                      Nishant Mishra
                    </h3>
                    <hr className=" my-4 text-light" />
                    <p style={{ color: "#2A083F", fontSize: "2em"}}>
                        I'm a{' '}
                        <span style={{ color: 'red' }}>
                        <Typical
                          loop={Infinity}
                          wrapper='b'
                          steps={[
                            'Software Engineer 🧑‍💻',
                            2000,
                            'Fullstack developer 👨‍💻',
                            2000,
                            'Creative Designer 👨‍🎨',
                            2000,
                            'YouTuber 🎥',
                            2000,
                            'Open Sourcer ✅',
                            2000,
                            'Sketch Arstist 🧑‍🎨',
                            2000
                          ]}
                          />
                        </span>
                    </p>
                    <hr className=" my-4 text-light" />
                    <a
                    href={myResume}
                    download="Resume.pdf"
                    className="btn btn-primary btn-lg">
                    Download Resume
                    </a>
                 </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col d-none d-lg-inline">
            <div className=" rgba-gradient d-flex justify-content-center align-items-center header">
              <div className="container px-md-3 px-sm-0">
                <div className="row">
                  <div className="col-md-12 mb-4 mt-3 ms-5 text-center dev-img">
                    <img
                      className="img-fluid mt-3 ms-5 "
                      src={homeImage}
                      alt="home"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro; 