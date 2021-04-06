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
                <MiniHero heading={"Display Advertising"} />
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
                                    <div className="d-flex justify-content-center d-none d-sm-block">
                                        <img
                                            alt="..."
                                            style={{width: 500}}
                                            src={require("../../../img/5.jpg")}
                                            top
                                        />
                                    </div>
                                </div>

                                <p className="lead">
                                    La <b>display advertising</b> è una delle più tradizionali forme di pubblicità, che
                                    a differenza del
                                    Pay per Click sfrutta l’<b>elemento grafico</b> per trasmettere visivamente un
                                    messaggio commerciale.
                                </p>
                                <p className="lead">
                                    Questo modello mette in risalto la magia di Google. Che non mostra banner
                                    pubblicitari a caso ma
                                    mostra all’utente <b>annunci pubblicitari pertinenti</b> ai suoi gusti e ricerche in
                                    rete.
                                </p>

                                <p className="lead">
                                    Un esempio concreto: supponiamo che vogliamo lanciare sul mercato un nuovo capotto
                                    impermeabile; il
                                    nostro annuncio non verrà visualizzato da chi non ha interesse per il settore, ma
                                    sarà mostrato a che
                                    visita con una certa frequenza siti o blog di abbigliamento.
                                </p>

                                <p className="lead text-center my-5">
                                    <b>I vantaggi dei Display Advertising</b>
                                </p>

                                <div className="d-flex justify-content-center">
                                    <p>
                                        <ul className="mt-3">
                                            <li className="my-3">Promuove il <b>logo dell’attività</b>: in questo modo
                                                rafforzerà la nostra brand identity
                                            </li>
                                            <li className="my-3"><b>Cattura l’attenzione</b> dell’utente: l’annuncio si
                                                può mostrare come un’immagine, un video, che salta subito all’occhio
                                            </li>
                                            <li className="my-3">Aumento delle <b>call to action</b>: l’utente arriverà
                                                sul sito web del produttore
                                            </li>
                                            <li className="my-3">Offre <b>varie strategie</b> in base alla disponibilità
                                                del nostro budget: attraverso diversi metodi di pagamento basati sul
                                                costo per click, oppure sul numero di <i>impression</i> erogate, o
                                                ancora sul
                                                numero di lead ottenuti, o in base al tempo di permanenza dell’annuncio
                                                sulla pagina web
                                            </li>
                                            <li className="my-3">Sfrutta la <b>visibilità gratuita</b>: il nostro
                                                annuncio viene mostrato all’utente che sceglie di non cliccare,
                                                preferendo cercare direttamente la nostra attività, oppure visitando il
                                                nostro sito in un secondo momento, in questo modo abbiamo raggiunto il
                                                target di riferimento e abbiamo risparmiato sul costo per click
                                            </li>
                                            <li className="my-3">Si adatta al <b>trend attuale</b>: attirando
                                                l’attenzione del nostro target con elementi visivi, anche se connessi da
                                                dispositivi mobile, come smartphone e tablet.
                                            </li>
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
