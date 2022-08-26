import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import Form from 'react-bootstrap/Form';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { FaBell } from "react-icons/fa";
import Logo from "../../assets/Ellipse.png";

function NavScrollExample() {
  return (
    <Navbar className="navbarside" bg="light" expand="lg">
      <Container fluid>
        <div className="Container">
          <form className="nosubmit" id="form">
            <input className="nosubmit" id="forminput" type="search" placeholder="Search..." />
          </form>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <FaBell style={{marginRight: "1rem",
    fontSize: "1.5rem",
    color: "#7B54F7"}} />
            <img className="imagelogo" src={Logo} alt="Avatar" />
          </div>
          <div>
          <div class="dropdown">
    <button class="btn btn-default dropdown-toggle buttonnav" type="button" id="menu1" data-toggle="dropdown">Hello John Doe
    <span class="caret"></span></button>
    <ul class="dropdown-menu" role="menu" aria-labelledby="menu1">
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">HTML</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">CSS</a></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">JavaScript</a></li>
      <li role="presentation" class="divider"></li>
      <li role="presentation"><a role="menuitem" tabindex="-1" href="#">About Us</a></li>
    </ul>
  </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
