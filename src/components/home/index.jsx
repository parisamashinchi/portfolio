import React from "react";
import MainBody from "./MainBody";
import AboutMe from "./AboutMe";
import Project from "./Project";
import Skills from "./Skills";
import Experience from "./Experience";
import {
    mainBody,
    about,
    repos,
    skills,
    experiences
  } from "../../assets/config";

const Home = () => {
    return (
      <>
        <MainBody
          gradient={mainBody.gradientColors}
          title={`${mainBody.firstName} ${mainBody.middleName} ${mainBody.lastName}`}
          message={mainBody.message}
          icons={mainBody.icons}
        />
        {about.show && (
          <AboutMe
            heading={about.heading}
            message={about.message}
            link={about.imageLink}
            imgSize={about.imageSize}
            resume={about.resume}
          />
        )}
        {
          experiences.show && (
            <Experience experiences={experiences}/>
          )
        }
        {repos.show && (
          <Project
            heading={repos.heading}
            username={repos.gitHubUsername}
            length={repos.reposLength}
            specific={repos.specificRepos}
          />
        )}
     
        {skills.show && (
          <Skills
            heading={skills.heading}
            hardSkills={skills.hardSkills}
            softSkills={skills.softSkills}
          />
        )}
    
      </>
    );
  };
  export default Home;
  