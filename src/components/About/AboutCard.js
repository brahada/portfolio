import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Brahada Srinivas </span>
            from <span className="purple">Karnataka, India.</span>
            <br />I am a Solutions engineer working at a startup called BrightMoney.
            <br />I have worked on Front end, back end and also a little bit in data science before.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Writing Tech/Non-tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Tutoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "It's never too late to learn anything"{" "}
          </p>
          <footer className="blockquote-footer">Brahada</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
