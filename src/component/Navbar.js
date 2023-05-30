import React from "react";
import "../styles/Navbar.css";
import logo2 from "../assets/TradExpress.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import Button from 'react-bootstrap/Button'
function Navbarsec() {
  return (
    <div className="nav-bar ">
      <Navbar className="nav-hero" expand="lg">
        <Container>
          <Navbar.Brand href="#">
            <img src={logo2} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav
              className="gap-4"
            
            >
              <Nav className="instant text-white" href="#action1">Instant Buy/Sell</Nav>
              <Nav className="instant2 text-white" href="#action2">Learn</Nav>
            </Nav>
            <div className="btn-section">
            <Button className="btn-nav2" variant="outline-success">Search</Button>
            <Button className="bg-light btn-nav ">Login</Button>

            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarsec;
