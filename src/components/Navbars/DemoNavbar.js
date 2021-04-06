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
import CookieConsent from "react-cookie-consent";

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
                                <div className="flex-column">
                                    <Nav className="navbar-nav-hover align-items-lg-center my-1" navbar>
                                        <NavItem>
                                            <NavLink
                                                className="nav-link-icon py-1"
                                                href="tel:+393517155160"
                                                id="tooltipTelephone"
                                                target="_blank"
                                            >
                                                <i className="fa fa-phone" />
                                                <span className="nav-link-inner--text ml-2" style={{fontSize: 13}}>
                                                +39 3517155160
                                            </span>
                                            </NavLink>
                                            <UncontrolledTooltip delay={0} target="tooltipTelephone">
                                                Contattaci tramite telefono
                                            </UncontrolledTooltip>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                className="nav-link-icon py-1"
                                                href="mailto:europadigitaldivision@gmail.com"
                                                id="tooltipEmail"
                                            >
                                                <i className="fa fa-envelope" />
                                                <span className="nav-link-inner--text ml-2" style={{fontSize: 13}}>
                                                europadigitaldivision@gmail.com
                                            </span>
                                            </NavLink>
                                            <UncontrolledTooltip delay={0} target="tooltipEmail">
                                                Contattaci tramite email
                                            </UncontrolledTooltip>
                                        </NavItem>
                                    </Nav>
                                    <Nav className="navbar-nav-hover align-items-lg-center my-1" navbar>
                                        <NavLink to="/about" tag={Link} style={{fontSize: 20}}>
                                            Chi siamo
                                        </NavLink>
                                        <NavLink to="/servizi" tag={Link} style={{fontSize: 20}}>
                                            Servizi
                                        </NavLink>
                                        <NavLink to="/blog" tag={Link} style={{fontSize: 20}}>
                                            Blog
                                        </NavLink>
                                        <NavLink to="/contatti" tag={Link} style={{fontSize: 20}}>
                                            Contatti
                                        </NavLink>
                                    </Nav>
                                </div>
                                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.facebook.com/Europa-Digital-Division-101627202010918"
                                            id="tooltip333589074"
                                            target="_blank"
                                        >
                                            <i className="fa fa-facebook-square fa-lg" />
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
                                            <i className="fa fa-instagram fa-lg" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Instagram
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                            Seguici su Instagram
                                        </UncontrolledTooltip>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className="nav-link-icon"
                                            href="https://www.youtube.com/channel/UCtA6qsaCPJldRD0yCKk9Iow"
                                            id="tooltip356693867"
                                            target="_blank"
                                        >
                                            <i className="fa fa-youtube fa-lg" />
                                            <span className="nav-link-inner--text d-lg-none ml-2">
                        Youtube
                      </span>
                                        </NavLink>
                                        <UncontrolledTooltip delay={0} target="tooltip356693867">
                                            Seguici su Youtube
                                        </UncontrolledTooltip>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
                <div className="icon-bar d-none d-lg-block">
                    <div className="mt-2 ml-2">
                        <a href="https://www.facebook.com/Europa-Digital-Division-101627202010918" className="facebook"
                           target="_blank"><i className="fa fa-lg fa-facebook"></i></a>
                    </div>
                    <div className="mt-2 ml-2">
                        <a href="https://www.instagram.com/europadigitaldivision/" className="instagram"
                           target="_blank"><i className="fa fa-lg fa-instagram"></i></a>
                    </div>
                    <div className="mt-2 ml-2">
                        <a href="https://www.youtube.com/channel/UCtA6qsaCPJldRD0yCKk9Iow" className="youtube"><i
                            className="fa fa-lg fa-youtube"></i></a>
                    </div>
                </div>
                <CookieConsent
                    location="bottom"
                    buttonText="Accetta"
                    flipButtons
                    cookieName="gatsby-gdpr-google-analytics"
                    expires={300}
                    buttonStyle={{
                        background: "green",
                        color: "white",
                        fontWeight: "bolder",
                        textShadow: "2px 2px black",
                    }}>
                    <span className={"lead"}>Il nostro sito utilizza i cookies</span>
                    <p>
                        Utilizziamo i cookie perché il sito funzioni correttamente, per fornirti continuamente la
                        migliore
                        esperienza di navigazione possibile, per eseguire analisi sull’utilizzo del nostro sito web, per
                        visualizzare annunci pubblicitari interessanti per te quando navighi su altri siti e per
                        assicurare
                        le funzionalità dei social network.

                        Clicca su “Accetta” per accettare i cookie e continuare la navigazione sul sito oppure clicca su
                        "Privacy policy" per maggiori informazioni.
                    </p>
                    <NavLink to="/privacy-policy" tag={Link}>Privacy Policy</NavLink>

                </CookieConsent>
            </>
        );
    }
}

export default DemoNavbar;
