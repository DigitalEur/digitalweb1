import React from 'react'
import {navigate} from 'gatsby-link'
import Layout from '../../../components/Layout'
import MiniHero from "../../../components/IndexSections/MiniHero";
import {
    Button,
    Card,
    CardBody,
    Col,
    Container,
    FormGroup,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row
} from "reactstrap";
import classnames from "classnames";
import {Link} from "gatsby";

function encode(data) {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isValidated: false}
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch((error) => alert(error))
    }

    render() {
        return (
            <Layout>
                <MiniHero heading={"Generazione di Contatti"} />
                <section className="section text-justify">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg="3" className="d-none d-sm-block">
                                <ul className="list-unstyled mt-5">
                                    <li className="py-2">
                                        <div className="d-flex align-items-center">
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
                            </Col>
                            <Col lg="9" xs="12" className="text-justify">
                                <div className="d-none d-sm-block">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            alt="..."
                                            style={{width: 500}}
                                            src={require("../../../img/7.jpg")}
                                            top
                                        />
                                    </div>
                                </div>


                                <p className="lead text-center">
                                    <b><i>L'Italia ha un indice di penetrazione di internet che si attesta intorno
                                        all’80% della
                                        popolazione</i></b>
                                </p>

                                <p className="lead">
                                    La <b>Lead Generation</b> è un insieme di azioni di marketing che consente di
                                    acquisire e generare una
                                    lista di <b>contatti</b> realmente interessati ai servizi o prodotti offerti da
                                    un’azienda.
                                </p>

                                <p className="lead">
                                    Il <b>Lead</b>, è un possibile cliente interessato ai nostri servizi o prodotti, che
                                    cerca di mettersi
                                    in contatto con noi lasciando i propri dati per essere ricontattato.
                                </p>

                                <p className="lead text-center">
                                    <b>Perché fare una strategia Lead Generation?</b>
                                </p>

                                <div className="d-flex justify-content-center">
                                    <p>
                                        <ul className="mt-3">
                                            <li className="my-3">Conoscere meglio i nostri clienti per poter offrire un
                                                servizio che rispecchi
                                                le loro necessità
                                            </li>
                                            <li className="my-3">Creare relazioni e guadagnare la fiducia di nuovi
                                                clienti, e far sì che
                                                questi scelgano sempre i servizi o prodotti dell’azienda
                                            </li>
                                        </ul>
                                    </p>
                                </div>

                                <p className="lead">
                                    Ti abbiamo incuriosito?
                                </p>

                                <p className="lead">
                                    Contattaci senza impegni (<a href="tel:+393517155160">+39 3517155160</a> / <a
                                    href="mailto:europadigitaldivision@gmail.com">europadigitaldivision@gmail.com</a>)
                                    e chiedi maggiori informazioni sul nostro servizio, o poni una domanda diretta
                                    attraverso i nostri
                                    social (<a href="https://www.instagram.com/europadigitaldivision/"
                                               target="_blank">Instagram</a>, <a
                                    href="https://www.facebook.com/Europa-Digital-Division-101627202010918"
                                    target="_blank">Facebook</a>, <a href="https://www.linkedin.com/company/europasrl/"
                                                                     target="_blank">
                                    Linkedin</a>). Puoi prendere un appuntamento virtuale su Skype, oppure
                                    possiamo conoscerci di persona (nel rispetto delle normative COVID-19).
                                </p>

                                <div className="d-flex justify-content-center">
                                    <Button
                                        block
                                        className="btn-success mt-5 w-50 align-self-center"
                                        color="default"
                                        href="/contatti/"
                                        size="lg"
                                    >
                                        Richiedi un preventivo
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Layout>
        )
    }
}
