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
                <MiniHero heading={"Retargeting Strategy"} />
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
                                            src={require("../../../img/6.jpg")}
                                            top
                                        />
                                    </div>
                                </div>

                                <p className="lead">
                                    La <b>Retargeting Strategy</b> (nota come remarketing) è una tattica di marketing
                                    che
                                    mostra <b>annunci mirati</b> a un pubblico che ha già visitato il tuo sito,
                                    incoraggiandoli a completare la
                                    conversione o per effettuare un nuovo acquisto. </p>
                                <p>Il retargeting tecnicamente consiste nell’utilizzo di
                                    un codice inserito sul tuo sito web che tiene traccia dei cookie (piccoli file che
                                    memorizzano
                                    informazioni sul comportamento dell’utente nel tuo sito) e che non influenzerà sulle
                                    prestazioni del
                                    sito.
                                </p>

                                <p className="lead text-center my-5">
                                    <b>I vantaggi del Retargeting</b>
                                </p>

                                <div className="d-flex justify-content-center">
                                    <p>
                                        <ul className="mt-3">
                                            <li className="my-3">Indica al fornitore di retargeting quando pubblicare
                                                gli annunci, assicurando
                                                che i tuoi <b>annunci vengano mostrati solo a un pubblico che
                                                    precedentemente ha visitato il
                                                    tuo sito</b>
                                            </li>
                                            <li className="my-3">Aiuterà a <b>mantenere il tuo marchio di fronte al
                                                traffico rimbalzato </b>
                                                anche dopo che ha lasciato il tuo sito web
                                            </li>
                                            <li className="my-3">Nell’e-commerce <b>riduce l’abbandono del carrello
                                                della spesa</b> online,
                                                mostrando il prodotto aggiunto al carrello, dopo che l’utente ha
                                                lasciato il sito
                                            </li>
                                        </ul>
                                    </p>
                                </div>

                                <p className="lead text-center">
                                    Sei interessato al retargeting? Contattaci per integrare la tua strategia di web
                                    marketing
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
