import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import axios from "axios";
import pdf from "../../Assets/brahada_resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { CgCornerDownRight } from "react-icons/cg";

function Resume() {
  const uri = "https://porfolio-backend.vercel.app/ranks/getRanks";
  const [spojRank, upadteSpojRank] = useState(0);
  const [hackerrank, upadteHackerank] = useState(0);
  const [sem, upadateSem] = useState(0);
  const [cgpa, upadteCgpa] = useState(0);

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        upadteSpojRank(res.data.message[0].spojRank);
        upadteHackerank(res.data.message[1].hackerrank);
        upadteCgpa(res.data.message[2].cgpa);
        upadateSem(res.data.message[3].sem);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <p>You can download my CV here!</p>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="https://docs.google.com/document/d/1akogF3h0wL3B1iKujoBiFqTwwfVMojgpSYcRCTHJmzg/edit?usp=sharing" target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
         <Row className="resume">
           
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Current Position</h3>
            <Resumecontent
              title="Product Engineer at Bright Money"
              date="Oct 2020 - now"
              content={[
                // "Working on the full-stack (including REST-api and UI)  with Django & Reactjs for developing the admin dashboard of various departments under the company.",
                // "Handling infrastructure setup (jenkins,ec2, ansible) for various services.",
                // "Worked with Event management system to remove “Segment” (a CDP tool) and directed the traffic to our system and the cheaper services which saved upto $3000 per month.",
                // "Worked on discourse and alert integrations with slack and other platforms."

              ]}
            />
            <h3 className="resume-title">Previous Positions</h3>
            <Resumecontent
              title="Trainee at IISC, Bangalore"
              date="June 2020 - Oct 2020"
              content={[
              ]}
            />
             <Resumecontent
              title="AI Intern at Samsung, Bangalore"
              date="Oct 2019 - April 2019"
              content={[
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Tutor"
              content={[
                "Tutored college juniors and external student on Python and Machine learning",
              ]}
            />
            <Resumecontent
              title="Blogger"
              content={[
                "I actively pusblish blogs related to tech and non-tech on various platforms such as medium, linkedin and on my own website.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Bachelors of Engg. - JSSATE, Bangalore"
              date="2016 - 2020"
              content={[`CGPA: 8.5 `]}
            />
            <Resumecontent
              title="12TH BOARD [SBC, Karkala]"
              date="2014 - 2016"
              content={["Precentage: 96%"]}
            />
            <Resumecontent
              title="10TH BOARD [NGHS, Sagara] "
              date="2011- 2014"
              content={["Precentage: 96%"]}
            />
            <h3 className="resume-title">Achievements</h3> 
            <Resumecontent
              title=""
              content={[
                `Yoga State Level - Runner up`,
                "Abacus National Level - Champion",
                "Participant in Facebook hackathon",
              ]}
            />
          </Col>
       
         </Row>

      </Container>
    </Container>
  );
}

export default Resume;
