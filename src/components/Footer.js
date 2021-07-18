import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { CgCornerDownRight } from "react-icons/cg";


function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
  
    <Container fluid className="footer">
      
      <br/>
      <Row style={{ justifyContent: "center", position: "relative" }}>
      
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/brahada"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                href="https://twitter.com/Soumyajit4419"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li> */}
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/brahada-srinivas-77a70a16b/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/brahada/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
          </Col>
      </Row>
      <br/>
      <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href="mailto:brahada29@gmail.com" target="_blank">
          <CgCornerDownRight />&nbsp;Reach out to me!
          </Button>
        </Row>  
        <br/>
        <Row>
    <Col md="4" className="footer-copywright">
      <h3>Designed and Developed by Brahada Srinivas</h3>
    </Col>
    <Col md="4" className="footer-copywright">
      <h3>Copyright © {year} BS</h3>
    </Col>
    <Col md="4" className="footer-body">
    
    </Col>
  </Row>
    </Container>


  );
}

export default Footer;
