import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { repos, about, skills } from "../assets/config";
import { NavLink } from "./NavLink";

const Navigation = () => {
  const [scrolling, setScrolling] = useState(false);
  
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <Navbar
      className={`px-3 fixed-top 
        ${ scrolling  ? "navbar-white" : "navbar-transparent" }`}
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto center container">
          {repos.show && <NavLink  
           className={ scrolling ?  "nav-item-scrolled lead ": "nav-item lead"}
          href={"#projects"}>Projects</NavLink>}
          <NavLink
            className={ scrolling ?  "nav-item-scrolled lead ": "nav-item lead"}
            href={about.resume}
            target="_blank"
            rel="noreferrer noopener"
          >
            Resume
          </NavLink>
          {about.show && (
            <NavLink           
              className={ scrolling ?  "nav-item-scrolled lead ": "nav-item lead"}
            href={"#aboutMe"}>
              About
            </NavLink>
          )}
          {skills.show && (
            <NavLink            
             className={ scrolling ?  "nav-item-scrolled lead ": "nav-item lead"}
            href={"#skills"}>
              Skills
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
