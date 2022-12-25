import React from "react";
import profil from "../../../assets/images/profil.png";
import "./About.css";

const About = ({ reff }) => {
  return (
    <section
      ref={reff}
      id="about"
      className="py-5"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <h2 className="h1-responsive font-weight-bold text-center mb-5"
        style={{ color: "#2A083F"}}>
          About Me
        </h2>

        <div className="row">
          <div className="col-12 col-lg-4">
            <img className="d-block mx-auto mb-4" src={profil} alt="profil" />
          </div>
          <div className="col-lg-8">
            <p className="text-font text-justify">
              I am a highly skilled software engineer with a strong foundation in 
              coding and design. My expertise includes Java, HTML 5, JavaScript,
              and Python, and I have the ability to quickly learn and adapt to new technologies.
              <br /> Through my university studies, I acquired strong skills in
              the field of software engineering. The various projects and
              internships that I have carried out have enabled me to develop not
              only my hard skills but also my soft skills.
              <br /> Motivated, I know how to adapt, I have a sense of
              responsibility and organization.
            </p>
            <h5>Achievements 🏆</h5><p>
            • Semifinalist Agri India Hackathon 2021 🥈<br />
            • Winner Smart India Hackathon 2020 🥇<br />
            • Winner Chhatra Vishwakarma Awards 2020 🥇<br />
            • Semifinalist KPIT Sparkle 2020 🥈<br />
            • Finalist Eyantra Ideas Competetion 2019 🥇<br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
