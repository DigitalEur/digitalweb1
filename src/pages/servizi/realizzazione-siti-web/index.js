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
                <MiniHero heading={"Realizzazione siti web"} />
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
                                            src={require("../../../img/1.jpg")}
                                            top
                                        />
                                    </div>
                                </div>
                                <p className="lead">
                                    <b>Il sito web è l’immagine del tuo business</b>, ti permetterà di generare contatti
                                    e di conseguenza
                                    aumentare il tuo fatturato. Noi di <b>Europa Living Division</b> siamo specializzati
                                    nella
                                    realizzazione di siti web.
                                </p>

                                <p className="lead text-center">
                                    <i>“Il 70% delle persone cerca online un servizio prima di acquistarlo”</i>
                                </p>

                                <p className="lead text-center">
                                    <b>Perché è importante avere un sito web?</b>
                                </p>

                                <ul className="mt-3">
                                    <li className="my-3"><b>I clienti se lo aspettano</b>: le persone sono abituate a
                                        utilizzare Google per qualsiasi necessità. Quando ti cercano, si aspettano di
                                        trovare la tua attività sul web. Se non la trovano, passano altrove.
                                    </li>
                                    <li className="my-3"><b>Credibilità</b>: se le persone non trovano la tua attività
                                        online, sono più scettiche, scatta in loro un campanello d’allarme: Questa
                                        azienda esiste? Stanno cercando di truffarmi?. Per questo un buon sito web dà
                                        tranquillità alle persone che lo visitano e rende la tua attività affidabile e
                                        prestigiosa.
                                    </li>
                                    <li className="my-3"><b>Aumentare le vendite</b>: la maggior parte degli acquisti
                                        iniziano sul web, per questo è importante avere una forte presenza digitale. Se
                                        un’azienda ha cura della sua presenza online, migliorerà l’esperienza dei suoi
                                        clienti sin dalla prima interazione e avrà maggiori possibilità di fargli
                                        completare l’acquisto.
                                    </li>
                                    <li className="my-3"><b>Superare i tuoi competitors</b>: con un sito web
                                        professionale puoi lasciarti alle spalle la concorrenza e affermare la tua
                                        presenza sul mercato.
                                    </li>
                                    <li className="my-3"><b>Costruire il vostro marchio</b>: un sito web ben fatto vi
                                        permetterà di creare la vostra reputazione online e costruire la brand identity.
                                        In questo modo potrete promuovere la vostra attività attraverso il web.
                                    </li>
                                </ul>
                                <p className="lead my-5">
                                    Ora che ti abbiamo spiegato perché è importante avere una presenza online, se non
                                    hai un sito web o vuoi un restyling del tuo sito contattaci senza impegni (<a
                                    href="tel:+393517155160">+39 3517155160</a> / <a
                                    href="mailto:europadigitaldivision@gmail.com">europadigitaldivision@gmail.com</a>) e
                                    chiedi maggiori informazioni sui nostri servizi, o poni una domanda diretta
                                    attraverso i nostri social (<a
                                    href="https://www.instagram.com/europadigitaldivision/"
                                    target="_blank">Instagram</a>, <a
                                    href="https://www.facebook.com/Europa-Digital-Division-101627202010918"
                                    target="_blank">Facebook</a>, <a href="https://www.linkedin.com/company/europasrl/"
                                                                     target="_blank">
                                    Linkedin</a>). Puoi prendere un appuntamento virtuale su Skype, oppure possiamo
                                    conoscerci di persona (nel rispetto delle normative COVID-19).
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
