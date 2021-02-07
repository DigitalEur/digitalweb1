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

// reactstrap components
import {Col, Container, Row} from "reactstrap";

class Hero extends React.Component {
    render() {
        return (
            <>
                <div className="position-relative" >
                    {/* Hero for FREE version */}
                    <section className="section section-shaped">
                        {/* Background circles */}
                        <div className="shape shape-style-1 shape-default">
                            <span className="span-150" />
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
                        <Container className="">
                            <div className="col px-0">
                                <Row className="align-items-center justify-content-center">
                                    <Col className="text-center" lg="6">
                                        <h1 className="text-white">
                                            {this.props.heading}
                                        </h1>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                        {/* SVG separator */}
                    </section>
                </div>
            </>
        );
    }
}

export default Hero;
