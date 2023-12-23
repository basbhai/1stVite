import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./header.css";
//import { on, onscroll, select } from "../customerFunction/function";

const header = () => {
  useEffect(() => {
    const navbarlinks = document.querySelectorAll("#navbar .scrollto");

    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };

    navbarlinksActive();

    window.addEventListener("load", navbarlinksActive);
    window.addEventListener("scroll", navbarlinksActive);

    return () => {
      window.removeEventListener("load", navbarlinksActive);
      window.removeEventListener("scroll", navbarlinksActive);
    };
  }, []);

  return (
    <header id="header" className="fixed-top">
      <div
        id="navDiv"
        className="container d-flex align-items-center justify-content-between"
      >
        <h1 className="logo">
          <a href="index.html">DevFolio</a>
        </h1>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" className="logo">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a> */}

        <nav id="navbar" className="navbar">
          <ul>
            <li>
              <a className="nav-link scrollto " href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#work">
                Work
              </a>
            </li>
            <li>
              <a className="nav-link scrollto" href="#blog">
                Blog
              </a>
            </li>
            <li className="dropdown">
              <a href="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li>
                  <a href="#">Drop Down 1</a>
                </li>
                <li className="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="#">Deep Drop Down 1</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 2</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 3</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 4</a>
                    </li>
                    <li>
                      <a href="#">Deep Drop Down 5</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Drop Down 2</a>
                </li>
                <li>
                  <a href="#">Drop Down 3</a>
                </li>
                <li>
                  <a href="#">Drop Down 4</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link scrollto" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* .navbar */}
      </div>
    </header>
  );
};

export default header;

// <header id="header" className="fixed-top">
//       <Container className="d-flex align-items-center justify-content-center ">
//         <Navbar.Brand href="#home">Basanta Shrestha</Navbar.Brand>

//         <Navbar id="navbar">
//           <Nav.Link className="nav-link scrollto active" href="#hero">
//             Home
//           </Nav.Link>
//           <Nav.Link className="nav-link scrollto" href="#About">
//             About
//           </Nav.Link>
//           <Nav.Link className="nav-link scrollto" href="##Services">
//             Services
//           </Nav.Link>
//           <Nav.Link className="nav-link scrollto" href="#Work">
//             Work
//           </Nav.Link>
//           <Nav.Link className="nav-link scrollto" href="#blog">
//             Blog
//           </Nav.Link>
//           <NavDropdown title="More" className="dropdown">
//             <NavDropdown.Item href="#">Test</NavDropdown.Item>
//             <NavDropdown.Item href="#">New</NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link className="nav-link scrollto" href="#contact">
//             Lets Talk
//           </Nav.Link>
//           <i class="bi bi-list mobile-nav-toggle"></i>
//         </Navbar>
//       </Container>
//     </header>
