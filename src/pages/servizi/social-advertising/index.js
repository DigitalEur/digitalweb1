import React from 'react'
import {navigate} from 'gatsby-link'
import Layout from '../../../components/Layout'
import MiniHero from "../../../components/IndexSections/MiniHero";
import {Button, Col, Container, Row} from "reactstrap";
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
                <MiniHero heading={"Social Advertising"} />
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
                                <div className="d-flex justify-content-center">
                                    <div className="d-flex justify-content-center">
                                        <img
                                            alt="..."
                                            style={{width: 500}}
                                            src={require("../../../img/4.jpg")}
                                            top
                                        />
                                    </div>
                                    <p className="my-5">
                                        <ul className="mt-3">
                                            <li className="my-3"><b><i>2,7 miliardi di utenti su Facebook</i></b></li>
                                            <li className="my-3"><b><i>2,0 miliardi di utenti su YouTube</i></b></li>
                                            <li className="my-3"><b><i>2 miliardi di utenti su WhatsApp</i></b></li>
                                            <li className="my-3"><b><i>1,3 miliardi di utenti su Facebook Messenger</i></b>
                                            </li>
                                            <li className="my-3"><b><i>1,15 miliardi di utenti su Instagram</i></b></li>
                                        </ul>
                                    </p>
                                </div>


                                <p className="lead">
                                    Il <b>Social advertising</b> è un tipo di pubblicità interattiva, basata
                                    sulle <b>inserzioni</b> (contenuti testuali e banner), che viene postata <b>esclusivamente
                                    sui Social
                                    Network e Community</b>.
                                    L’ampia diffusione dei social ha reso Social Advertising una delle attività più
                                    usate negli ultimi
                                    anni, addirittura c’è chi investe esclusivamente sui social network e sulle
                                    community, ottenendo
                                    risultati davvero ottimali.

                                </p>

                                <p className="lead text-center">
                                    <b>I vantaggi della Social Advertising</b>
                                </p>

                                <p className="my-5">
                                    <ul className="mt-3">
                                        <li className="my-3">Aumentare la visibilità per attingere a nuovi potenziali
                                            clienti
                                        </li>
                                        <li className="my-3">Perfezionare la targettizazione degli utenti (es. età,
                                            sesso, interessi, luogo), questo permette di definire con attenzione a chi
                                            mostrare il proprio messaggio
                                        </li>
                                        <li className="my-3">Avere visibilità per aumentare il proprio raggio di
                                            consumatori
                                        </li>
                                        <li className="my-3">Interazione, rispondere in maniera immediata alle esigenze
                                            degli utenti, che non sono quelli della televisione, sui social il pubblico
                                            è molto attivo e vuole una risposta diretta
                                        </li>
                                    </ul>
                                </p>
                                <div className="d-flex justify-content-center">
                                    <p className="my-5">
                                        I social network più utilizzati in Italia:
                                        <ul className="mt-3">
                                            <li className="my-3"><b><i>Facebook: 29 milioni di utenti attivi</i></b>
                                            </li>
                                            <li className="my-3"><b><i>Instagram: 20 milioni di utenti attivi</i></b>
                                            </li>
                                            <li className="my-3"><b><i>Linkedin: 14 milioni di utenti attivi</i></b>
                                            </li>
                                            <li className="my-3"><b><i>Twitter: 3,17 milioni di utenti</i></b></li>
                                        </ul>
                                    </p>
                                </div>

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
