import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { MainContainer } from "./MainContainer";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const API = "https://api.github.com";

const Project = ({ heading, username, length, specific }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specificReposAPI = `${API}/repos/${username}`;

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      const response = await axios.get(allReposAPI);
      repoList = [...response.data.slice(0, length)];
      try {
        for (let repoName of specific) {
          const response = await axios.get(`${specificReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }

      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specific, specificReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <MainContainer fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {projectsArray.map((project, index) => (
            <ProjectCard
              key={`project-card-${index}`}
              id={`project-card-${index}`}
              value={project}
            />
          ))}
        </Row>
      </Container>
    </MainContainer>
  );
};

export default Project;
