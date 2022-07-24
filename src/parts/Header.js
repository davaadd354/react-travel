import Button from "../components/Buttons";
import React from "react";
import BrandIcon from "./iconText";
import { Nav,Navbar,NavDropdown,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from 'react-reveal/Fade';

export default function(props){
    const home = ""
    const browse = ""
    const stories = ""
    const agent = ""
    const getNavLinkClass = path => {
        //console.log(window.location.pathname)
        return window.location.pathname === path? "active" : ""
    }

    if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm" style={{borderBottom:"1px solid #e9ecef"}}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light" >
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

    if(props.isLogin)
    return(
        <Fade>
             <div>
                <Navbar expand="lg" style={{borderBottom:"1px solid #e9ecef"}}>
                    <Container>
                        <BrandIcon  className="nav-link"/>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <ul className="navbar-nav">
                                <li className={`nav-item `}>
                                    <Link to="/login" style={{textDecoration:"none"}}>
                                        <span className={`link_nav ${getNavLinkClass("/login")}`}>Login</span>
                                    </Link>
                                </li>
                                <li className={`nav-item `}>
                                    <Link to="/register" style={{textDecoration:"none"}}>
                                        <span className={`link_nav ${getNavLinkClass("/register")}`}>Register</span>
                                    </Link>
                                </li>
                            </ul>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Fade>
    )

    return (
       <Fade>
            <div>
                <Navbar expand="lg" style={{borderBottom:"1px solid #e9ecef"}}>
                    <Container>
                        <BrandIcon  className="nav-link"/>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <ul className="navbar-nav">
                                <li className={`nav-item `}>
                                    {/* <Button isExternal className="nav-link" type="link" href="/">
                                        <span className="link_nav">Home</span>
                                    </Button> */}
                                    <Link to="/" style={{textDecoration:"none"}}>
                                        <span className={`link_nav ${getNavLinkClass("/")}`}>Home</span>
                                    </Link>
                                </li>
                                <li className={`nav-item `} >
                                    <Link to="/browse-by" style={{textDecoration:"none"}}>
                                        <span className={`link_nav ${getNavLinkClass("/browse-by")}`}>Browse By</span>
                                    </Link>
                                </li>
                                <li className={`nav-item `}>
                                    <Link to="/stories" style={{textDecoration:"none"}}>
                                        <span className={`link_nav ${getNavLinkClass("/stories")}`}>Stories</span>
                                    </Link>
                                </li>
                                <li className={`nav-item `}>
                                    <Link to="/agents" style={{textDecoration:"none"}}>
                                        <span className={`link_nav ${getNavLinkClass("/agents")}`}>Agents</span>
                                    </Link>
                                </li>
                            </ul>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
       </Fade>
    )

   
}