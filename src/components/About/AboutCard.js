import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ephrem Alemayehu </span>
            from <span className="purple"> Addis Ababa, Ethiopia.</span>
            <br />
            I have completed Bachelor's degree in Software Engineering and Artificial Intelligence at Addis Ababa University.
            <br />
            I had the opportunity to work as a software Engineer and research Assistant in University of Michigan.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books and light novels
            </li>
            <li className="about-activity">
              <ImPointRight /> Vibe coding
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not in avoiding failures, but in persistently bouncing back from them. Keep pushing forward towards your goals!"{" "}
          </p>
          <footer className="blockquote-footer">Ephrem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
