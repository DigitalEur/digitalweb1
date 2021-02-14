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
import Logo from '../../assets/img/brand/EU_WHITE_DIG.svg';

// reactstrap components
import {Button, Col, Container, Row} from "reactstrap";

class Hero extends React.Component {
    render() {
        return (
            <>
                <div className="position-relative">
                    {/* Hero for FREE version */}
                    <section className="section section-hero section-shaped">
                        {/* Background circles */}
                        <div className="shape shape-style-1 shape-default">
                            <span className="span-150" />
                            <span className="span-180" />
                            <span className="span-50" />
                            <span className="span-50" />
                            <span className="span-75" />
                            <span className="span-100" />
                            <span className="span-75" />
                            <span className="span-50" />
                            <span className="span-100" />
                            <span className="span-50" />
                            <span className="span-100" />
                        </div>
                        <Container className="shape-container d-flex align-items-center py-lg">
                            <div className="col px-0">
                                <Row className="align-items-center justify-content-center">
                                    <Col className="text-center" lg="12">
                                        <img src={Logo} alt="Logo" style={{width: "200px"}}/>
                                        <h1 className="display-1 text-white mt-5">
                                        {this.props.heading}
                                        </h1>
                                        <br />
                                        <p className="display-4 text-white">
                                            {this.props.subheading}
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        {/* SVG separator */}
                        <div className="separator separator-bottom separator-skew zindex-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 2560 100"
                                x="0"
                                y="0"
                            >
                                <ellipse cx="2560" cy="100" rx="3000" ry="100" className="fill-white" />
                            </svg>
                        </div>
                    </section>
                </div>
            </>
        );
    }
}

export default Hero;
