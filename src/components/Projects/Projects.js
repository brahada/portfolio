import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.jpeg";
import dlviz from "../../Assets/Projects/dlviz.png";
import disasters from "../../Assets/Projects/disasters.jpg";
import bright from "../../Assets/Projects/bright.jpeg";
import self from "../../Assets/Projects/self.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={disasters}
              isBlog={false}
              title="Disaster survivors detection using IR imagery:"
              description="Using YOLOv3, Tensorflow in python, build an image recognition model that detects the location of survivors in IR imagery which is captured from disaster-affected areas. I worked on Yolov3 as well as the chatbot (where I used DialogFlow), which is a disaster assistant that is deployed on messenger."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dlviz}
              isBlog={false}
              title="Deep learning visualization"
              description="During my internship, I worked on visualizing the in and outs of deep learning networks to understand what is happening in between to get the specific results. Used Jupyter notebook, docker and python for this."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bright}
              isBlog={false}
              title="Unified Dashboard"
              description=" I am currently working on the full stack development and functionalities of the company's admin dashboard for various departments. I am working with Django, React, and Python for this project."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={self}
              isBlog={false}
              title="Personal portfolio"
              description="A self portfolio develop with reactjs for showing my experience and skillset along with my about."
              link=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
