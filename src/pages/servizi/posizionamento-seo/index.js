import React from 'react'
import { navigate } from 'gatsby-link'
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
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
        <MiniHero heading={"Posizionamento SEO"} />
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <p className="lead">
                  La <b>SEO</b> (<i>Search Engine Optimization</i>) sono tutte quelle attività che permettono di
                  scansionare, indirizzare e <b>posizionare in maniera ottimale</b> il tuo sito web nei motori di
                  ricerca  (es. Google, soprattutto, ma anche Yahoo!, Bing, Yandex, Baidu, Ask ecc.,) con l’obiettivo di
                  <b>migliorare o mantenere</b> il <b>posizionamento nelle SERP</b>(pagine di risposta alle domande
                  degli utenti del web).
                </p>

                <p className="lead text-center">
                  <b><i>“Se il tuo sito non è indicizzato non esiste”</i></b>
                </p>

                <p className="lead">La SEO consente al tuo sito internet, blog o e-commerce di comparire tra i primi risultati dei motori
                  di ricerca e di conseguenza aumentare il volume di traffico organico. In questo modo avrai più
                  possibilità di ottenere conversioni e trasformare un visitatore in un potenziale cliente o fidelizzare
                  quelli già acquisiti.
                </p>

                <p className="lead my-5">
                  <b>Europa Digital Division</b>, grazie alle <b>tecniche e strategie sviluppate SEO</b>, e un <b>team
                  specializzato</b>, ha l’obiettivo di aumentare la visibilità del vostro sito nei motori di ricerca per
                  aumentare in questo modo i ritorni aziendali. Il nostro team si focalizza non solo sul posizionamento
                  delle keyword, ma lavora per raggiungere obiettivi reali, che migliorano sia il <b>ROI</b> (return on
                  investiment) sia la reputation aziendale nel contesto web.
                </p>

                <p className="lead text-center">
                  <b>“Sito web e SEO vanno di pari passo”</b>
                </p>

                <p className="my-5">
                  La <b>SEO</b>:
                  <ul className="mt-3">
                    <li className="my-3">migliora il posizionamento sui motori di ricerca</li>
                    <li className="my-3">migliora l’esperienza dell’utente che visita il suo sito web</li>
                    <li className="my-3">ti aiuta a conoscere meglio il target di riferimento</li>
                    <li className="my-3">ti porta nuovi potenziali clienti</li>
                  </ul>
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
