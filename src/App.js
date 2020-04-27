import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProblemForm from './ProblemForm';

// import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

function App() {

  return (
    <div className="App">
      <header>
        <Container>
          <Row>
            <Col md={{ span: 4, offset: 4 }} className="text-center logoWrapper">
              <a href="#"><span className="logo">&nbsp;</span></a>
            </Col>
            <Col md="4" className="menu text-right d-none d-md-block">
              <i className="fa fa-search"></i>
            </Col>
          </Row>
        </Container>
      </header>
      <section id="body">
        <Container>
          <Row className="justify-content-md-center">
            <Col md="4">
              <h1 className="text-center">Report a Problem</h1>
              <ProblemForm />
            </Col>
          </Row>
        </Container>
      </section>
      <footer>
        <Container>
          <Row className="justify-content-md-center social">
            <Col md="4">
              <Row>
                <Col className="text-center">
                  <i className="fa fa-twitter-square"></i>
                </Col>
                <Col className="text-center">
                  <i className="fa fa-linkedin-square"></i>
                </Col>
                <Col className="text-center">
                  <i className="fa fa-instagram"></i>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container fluid>
          <Row className="footerNav">
            <Col xs="6" md="4" className="text-center">
              <ul className="footerSiteNav list-unstyled">
                <li><a href="#">Claim Your Venue</a></li>
                <li><a href="#">Venue Log In</a></li>
              </ul>
            </Col>
            <Col xs="6" md="4" className="text-center">
              <ul className="footerLinks list-unstyled">
                <li><a href="#">Terms and Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </Col>
            <Col xs="12" md="4" className="text-center">
              <Button variant="default">Default</Button>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;
