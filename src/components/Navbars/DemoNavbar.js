/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
    Col,
    Container,
    Nav,
    Navbar,
    NavbarBrand,
    NavItem,
    NavLink,
    Row,
    UncontrolledCollapse,
    UncontrolledTooltip
} from "reactstrap";

import {Link} from 'gatsby'
import Logo from "../../assets/img/brand/EU_WHITE_DIG.svg";

class DemoNavbar extends React.Component {
    componentDidMount() {
        let headroom = new Headroom(document.getElementById("navbar-main"));
        // initialise
        headroom.init();
    }

    state = {
        collapseClasses: "",
        collapseOpen: false
    };

    onExiting = () => {
        this.setState({
            collapseClasses: "collapsing-out"
        });
    };

    onExited = () => {
        this.setState({
            collapseClasses: ""
        });
    };

    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-main navbar-transparent navbar-light headroom"
                        expand="lg"
                        id="navbar-main"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                                <img src={Logo} alt="Logo" style={{height: "50px"}} />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                                className={this.state.collapseClasses}
                                onExiting={this.onExiting}
                                onExited={this.onExited}
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            <Link to="/">
                                                <img
                                                    alt="..."
                                                    src={require("../../assets/img/brand/EU_COLOR_DIG.svg")}
                                                />
                                            </Link>
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon py-1"
                                            href="tel:+393517155160"
                                            id="tooltipEmail"
                                            target="_blank"
                                        >
                                            <i className="fa fa-phone" />
                                            <span className="nav-link-inner--text ml-2">
                                                +39 3517155160
                                            </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltipEmail">
                                            Contattaci tramite telefono
                                        </UncontrolledTooltip>
                                        <NavLink
                                            className="nav-link-icon py-1"
                                            href="tel:+393517155160"
                                            id="tooltipTelephone"
                                            target="_blank"
                                        >
                                            <i className="fa fa-envelope" />
                                            <span className="nav-link-inner--text ml-2">
                                                europadigitaldivision@gmail.com
                                            </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltipTelephone">
                                            Contattaci tramite email
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavLink to="/about" tag={Link}>
                                        Chi siamo
                                    </NavLink>
                                    <NavLink to="/servizi" tag={Link}>
                                        Servizi
                                    </NavLink>
                                    <NavLink to="/blog" tag={Link}>
                                        Blog
                                    </NavLink>
                                    <NavLink to="/contatti" tag={Link}>
                                        Contatti
                                    </NavLink>
                                </Nav>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.facebook.com/Europa-Digital-Division-101627202010918"
                                            id="tooltip333589074"
                                            target="_blank"
                                        >
                                            <i className="fa fa-facebook-square" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Facebook
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip333589074">
                                            Seguici su Facebook
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.instagram.com/europadigitaldivision/"
                                            id="tooltip356693867"
                                            target="_blank"
                                        >
                                            <i className="fa fa-instagram" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                            Seguici su Instagram
                                        </UncontrolledTooltip>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default DemoNavbar;
