import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cowsville from "../../Assets/Projects/cowsville.jpg";
import campussync from "../../Assets/Projects/campussync.jpg";
import asset from "../../Assets/Projects/asset.jpg";
import planning from "../../Assets/Projects/planning.jpg";
import shopify from "../../Assets/Projects/shopify.jpg";
import landing from "../../Assets/Projects/landing.jpg";


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
              imgPath={cowsville}
              isBlog={false}
              title="Cowsville"
              description="A precision dairy‐management platform I co‑founded to help farmers optimize herd health, reproduction and resource allocation. I built a Django back‑end and React.js front‑end connected via RESTful APIs, and layered in predictive analytics for fertility tracking, real‑time alerts using WebSockets and SMS APIs, and bi‑weekly/monthly data collection through ODK forms. A responsive React dashboard visualizes herd metrics (including a custom fertility‑window graph) and offers dynamic search of farms and animals, all deployed on a Linux server in anticipation of production."
              ghLink="https://github.com/Ephrem758/Cowsville"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campussync}
              isBlog={false}
              title="Campus-Sync"
              description="Architected and delivered a Django‑based college management system featuring both server‑rendered UIs and RESTful APIs. I implemented role‑based authentication with a unified login portal for students, teachers, and admins; built core modules for attendance tracking, marks management, and timetable scheduling (including a custom Django‑Admin action to reset attendance over arbitrary date ranges); exposed CRUD operations on Students, Teachers, Departments, Courses, and Classes via Django REST Framework; and crafted responsive front‑end interfaces using Django templates, SCSS, and vanilla JavaScript. ."
              ghLink="https://github.com/Ephrem758/Campus-Sync"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asset}
              isBlog={false}
              title="Asset Tokenization Platform"
              description="A blockchain‑powered solution for digitizing, managing and trading both tangible and intangible assets. I built a React front‑end paired with a Node.js/Express back‑end to provide users with an intuitive interface for creating and monitoring their tokens. On the blockchain side, I used Truffle Suite and Ganache for smart‑contract development and local testing, deploying ERC‑20/721‑based contracts on Ethereum to handle minting, fractional ownership and immutable ownership records. The platform features a decentralized marketplace where users can list, discover and trade asset‑backed tokens, complete with real‑time balances, transaction history and built‑in regulatory compliance checks. Its architecture ensures cross‑chain interoperability, enhanced security via on‑chain governance rules, and seamless liquidity for traditionally illiquid assets."
              ghLink="https://github.com/Capstone-Project-Asset-Tokenization/Asset-Tokenization"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={planning}
              isBlog={false}
              title="Graph Plan and AUtomated Planning"
              description="Contributed to an Automated Planning and Acting project under Profs. Dawn Tilbury and Kira Barton alongside PhD students Tyler Toner and Abigail Rafter. I implemented GraphPlan using the AIMA Python library and benchmarked planning algorithms that fused camera‑sensor, environmental, and factory‑floor data to optimize robot paths and actions—dramatically improving simulation efficiency and reducing cycle times. In the lab, I validated our methods with 3D printing, CNC machining, collaborative robots, and high‑performance simulations. I also collected machine and robot telemetry to build digital twin models for predictive maintenance and adaptive control, and helped model manufacturing operations with advanced computing and networking to anticipate disruptions and sustain productivity. My work culminated in a presentation at the African Undergraduate Research Adventure seminar."
              ghLink="https://github.com/Ephrem758/Graph-plan-demo"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="Django Shopify"
              description="built a full‑featured e‑commerce site from the ground up using Django, SQLite, and Bootstrap. I architected Product and Offer models and extended the Django Admin so store owners could manage inventory, discounts, and promotions without touching any code . On the front end, I crafted a mobile‑friendly storefront with Bootstrap cards and grid layouts—complete “All Products” and “New Arrivals” pages displaying images, prices, and “Add to Cart” buttons. To handle transactions, I implemented a session‑based shopping cart and an order summary flow with placeholder checkout endpoints ready for integration with Stripe, PayPal, or other gateways. Finally, by sticking to Django’s defaults and SQLite, I ensured zero‑friction deployment on any Linux server or PaaS."
              ghLink="https://github.com/Ephrem758/Django-Shopify"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Stock Price Predictor"
              description="I developed a Stock Price Predictor as a full‑stack, end‑to‑end application combining a Flutter front‑end, a Django REST‑API backend, and a Decision Tree machine‑learning model. On the backend (Python/Django), I ingested and preprocessed historical market data, engineered features (e.g. moving averages, volume indicators), and trained a DecisionTreeRegressor to forecast next‑day closing prices, tuning tree depth and splitting criteria to balance bias and variance. I exposed both historical time‑series and live predictions via REST endpoints, complete with automated training routines and versioned model artifacts. In the Flutter app, users can select tickers, view interactive price charts and model forecasts, and receive alert notifications for significant predicted movements. This project leveraged my expertise in mobile‑app development (Flutter), back‑end API design (Django/DRF), and classical ML workflows (Decision Tree modeling) "
              ghLink="https://github.com/Ephrem758/Stock-Price-Predictor"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
