import React from 'react'
// nodejs library that concatenates classes
import classnames from "classnames";
import PropTypes from 'prop-types'
import {graphql, Link} from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

import Hero from "../components/IndexSections/Hero.js";
// index page sections
import Download from "../components/IndexSections/Download.js";

import "../assets/vendor/nucleo/css/nucleo.css";
import "../assets/vendor/font-awesome/css/font-awesome.min.css";
//import "../assets/scss/argon-design-system-react.scss?v1.1.0";
// nodejs library that concatenates classes
// reactstrap components
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    Col,
    Container,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Label
} from "reactstrap";

export const IndexPageTemplate = ({
                                      image,
                                      title,
                                      heading,
                                      subheading,
                                      mainpitch,
                                      picture,
                                      description,
                                      intro,
                                  }) => (
    <div>
        <main>
            <Hero heading={heading} subheading={subheading} />
            <section className="section section-lg">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col className="order-md-2" md="6">
                            <Card className="bg-default shadow border-0">
                                <CardImg
                                    alt="..."
                                    src={require("../img/digital_marketing.jpeg")}
                                    top
                                />
                            </Card>
                        </Col>
                        <Col className="order-md-1" md="6">
                            <div className="pr-md-5">
                                <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                                    <i className="ni ni-laptop" />
                                </div>
                                <h3>I nostri servizi</h3>
                                <p>
                                    Offriamo diversi servizi in ambito digital che ti consentiranno di sfruttare
                                    tutte le possibilità che offre il web.
                                </p>
                                <ul className="list-unstyled mt-5">
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-settings-gear-65" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/realizzazione-siti-web'}
                                                >
                                                    Realizzazione siti web
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-html5" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/posizionamento-seo'}
                                                >
                                                    Posizionamento SEO
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-bullet-list-67" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/search-advertising'}
                                                >
                                                    Search Advertising
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-single-02" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/social-advertising'}
                                                >
                                                    Social Advertising
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-notification-70" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/display-advertising'}
                                                >
                                                    Display Advertising
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-tag" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/retargeting-strategy'}
                                                >
                                                   Retargeting Strategy
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-satisfied" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/generazione-contatti'}
                                                >
                                                    Generazione Contatti
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-vector" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/link-building'}
                                                >
                                                    Link Building
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <Badge
                                                    className="badge-circle mr-3"
                                                    color="success"
                                                >
                                                    <i className="ni ni-email-83" />
                                                </Badge>
                                            </div>
                                            <div>
                                                <Link
                                                    className=" text-primary"
                                                    to={'/servizi/e-mail-marketing'}
                                                >
                                                    E-mail Marketing
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section bg-secondary">
                <Container>
                    <Row className="row-grid align-items-center">
                        <Col md="6">
                            <Card className="bg-default shadow border-0">
                                <CardImg
                                    alt="..."
                                    src={require("../assets/img/theme/ufficio_Milano.jpeg")}
                                    top
                                />
                                <blockquote className="card-blockquote">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="svg-bg"
                                        preserveAspectRatio="none"
                                        viewBox="0 0 583 95"
                                    >
                                        <polygon
                                            className="fill-default"
                                            points="0,52 583,95 0,95"
                                        />
                                        <polygon
                                            className="fill-default"
                                            opacity=".2"
                                            points="0,42 583,95 683,0 0,95"
                                        />
                                    </svg>
                                    <h4 className="display-3 font-weight-bold text-white">
                                        {picture.title}
                                    </h4>
                                    <p className="lead text-italic text-white">
                                        {picture.description}
                                    </p>
                                </blockquote>
                            </Card>
                        </Col>
                        <Col md="6">
                            <div className="pl-md-5">
                                <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                                    <i className="ni ni-settings" />
                                </div>
                                <h3>{mainpitch.title1}</h3>
                                <p>
                                    {mainpitch.first_paragraph}
                                </p>
                                <h3>{mainpitch.title2}</h3>
                                <p>
                                    {mainpitch.second_paragraph}
                                </p>
                                <a
                                    className="font-weight-bold text-warning mt-5"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                >
                                    Contattaci per un appuntamento in sede
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="position-relative">
                {/* shape Hero */}
                <section className="section section-lg section-shaped pb-250">
                    {/* SVG separator */}
                    <div className="separator separator-bottom separator-skew">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="fill-white"
                                points="2560 0 2560 100 0 100"
                            />
                        </svg>
                    </div>
                </section>
                {/* 1st Hero Variation */}
            </div>
            <section className="section section-lg pt-lg-0 mt--200">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <Row className="row-grid">
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0 h-100">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                <i className="ni ni-check-bold" />
                                            </div>
                                            <h6 className="text-primary text-uppercase">
                                                Presenza sul web
                                            </h6>
                                            <p className="description mt-3">
                                                Ogni giorno, la maggior parte degli utenti ricorre all’utilizzo di
                                                informazioni digitali in relazione a prodotti e servizi di ogni genere.
                                                Per questo è importante impostare una adeguata presenza online del
                                                proprio business personale a aziendale.
                                            </p>
                                            <Button
                                                className="mt-4"
                                                color="primary"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Scopri di più
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0 h-100">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                <i className="ni ni-istanbul" />
                                            </div>
                                            <h6 className="text-success text-uppercase">
                                                Pubblicità
                                            </h6>
                                            <p className="description mt-3">
                                                Secondo l’Advertising Expenditure Forecasts di Zenith, nel 2022 la
                                                pubblicità su Internet arriverà a rappresentare il 54,6% degli
                                                investimenti pubblicitari globali, surclassando la televisione.
                                            </p>
                                            <Button
                                                className="mt-4"
                                                color="success"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Scopri di più
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col lg="4">
                                    <Card className="card-lift--hover shadow border-0 h-100">
                                        <CardBody className="py-5">
                                            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                <i className="ni ni-planet" />
                                            </div>
                                            <h6 className="text-warning text-uppercase">
                                                Strategie
                                            </h6>
                                            <p className="description mt-3">
                                                Nell’attuale mercato digitale una strategia di web marketing
                                                personalizzata è imprescindibile per accrescere il successo del proprio
                                                modello di business. La pubblicità digitale permette di mostrate i
                                                contenuti a target specifici. L’applicazione di questa teoria definisce
                                                una comunicazione one-to-one, diretta e indirizzata al consumatore
                                                finale.
                                            </p>
                                            <Button
                                                className="mt-4"
                                                color="warning"
                                                href="#pablo"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Scopri di più
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="section section-lg bg-gradient-default">
                <Container className="pt-lg pb-300">
                    <Row className="text-center justify-content-center">
                        <Col lg="10">
                            <h2 className="display-3 text-white">Costruiamo qualcosa insieme</h2>
                            <p className="lead text-white">
                                According to the National Oceanic and Atmospheric
                                Administration, Ted, Scambos, NSIDClead scentist, puts the
                                potentially record low maximum sea ice extent tihs year down
                                to low ice.
                            </p>
                        </Col>
                    </Row>
                    <Row className="row-grid mt-5">
                        <Col lg="4">
                            <div
                                className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-settings text-primary" />
                            </div>
                            <h5 className="text-white mt-3">Building tools</h5>
                            <p className="text-white mt-3">
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div
                                className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-ruler-pencil text-primary" />
                            </div>
                            <h5 className="text-white mt-3">Grow your market</h5>
                            <p className="text-white mt-3">
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                            </p>
                        </Col>
                        <Col lg="4">
                            <div
                                className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                                <i className="ni ni-atom text-primary" />
                            </div>
                            <h5 className="text-white mt-3">Launch time</h5>
                            <p className="text-white mt-3">
                                Some quick example text to build on the card title and make
                                up the bulk of the card's content.
                            </p>
                        </Col>
                    </Row>
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
                        <polygon
                            className="fill-white"
                            points="2560 0 2560 100 0 100"
                        />
                    </svg>
                </div>
            </section>
            <section className="section section-lg pt-lg-0 section-contact-us">
                <Container>
                    <Row className="justify-content-center mt--300">
                        <Col lg="8">
                            <Card className="bg-gradient-secondary shadow">
                                <CardBody className="p-lg-5">
                                    <h4 className="mb-1">Richiedi un preventivo</h4>
                                    <p className="mt-0">
                                        Ci prenderemo cura del tuo progetto.
                                    </p>

                                    <form action="https://getform.io/f/00b56a7a-2481-4197-9a17-b8ea83a6952e" method="POST">

                                        <FormGroup
                                            className={classnames("mt-5")}
                                        >
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-user-run" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Inserisci il tuo nome"
                                                    type="text"
                                                    name="name"
                                                    required
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-email-83" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input
                                                    placeholder="Inserisci la tua email"
                                                    type="email"
                                                    name="email"
                                                    required
                                                />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative">
                                                <InputGroupAddon addonType="prepend">
                                                    <InputGroupText>
                                                        <i className="ni ni-settings-gear-65" />
                                                    </InputGroupText>
                                                </InputGroupAddon>
                                                <Input type="select" name="select" id="exampleSelect">
                                                    <option disabled selected value> -- seleziona un servizio -- </option>
                                                    <option>Realizzazione siti web</option>
                                                    <option>Posizionamento SEO</option>
                                                    <option>Search Advertising</option>
                                                    <option>Social Advertising</option>
                                                    <option>Display Advertising</option>
                                                    <option>Retargeting strategy</option>
                                                    <option>Generazione contatti</option>
                                                    <option>Link Building</option>
                                                    <option>E-mail marketing</option>
                                                    <option>Altro</option>
                                                </Input>
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" required/>{' '}
                                                <p>
                                                    Acconsento al trattamento dei dati personali come riportato
                                                    nella   <Link className=" text-primary"
                                                                  to={'/privacy-policy'}>
                                                    Privacy Policy
                                                </Link>
                                                </p>
                                            </Label>
                                        </FormGroup>
                                        <FormGroup className="mb-4">
                                            <Input
                                                className="form-control-alternative"
                                                cols="80"
                                                name="message"
                                                placeholder="Inserisci un messaggio..."
                                                rows="4"
                                                type="textarea"
                                            />
                                        </FormGroup>
                                        <div>
                                            <Button
                                                block
                                                className="btn-round"
                                                color="default"
                                                size="lg"
                                                type="submit"
                                            >
                                                Invia
                                            </Button>
                                        </div>
                                    </form>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </main>
    </div>
)

IndexPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    mainpitch: PropTypes.object,
    picture: PropTypes.object,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
}

const IndexPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                picture={frontmatter.picture}
                description={frontmatter.description}
                intro={frontmatter.intro}
            />
        </Layout>
    )
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title1
          title2
          description
          first_paragraph
          second_paragraph
        }
        picture {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
