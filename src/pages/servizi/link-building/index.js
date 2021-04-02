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
        <MiniHero heading={"Link Building"} />
        <section className="section text-justify">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">


                <p className="lead">
                  La <b>Link Building</b> è un insieme di azioni della SEO volte a incrementare link in ingresso,
                  provenienti da altri siti verso la nostra pagina web.
                </p>

                <p className="lead text-center">
                  <b>Perché è utile una strategia Link Building?</b>
                </p>

                <div className="d-flex">
                  <p>
                    <ul className="mt-3">
                      <li className="my-3"><b>Migliora il posizionamento</b> della nostra pagina nella <b>SERP</b>, cioè
                        nella pagina di risultati visualizzata dagli utenti di seguito a una ricerca su Google
                      </li>
                      <li className="my-3">I Link esterni funzionano come <b>referenza</b> per il nostro sito. Se un
                        domino che ci linka è da considerarsi credibile e autorevole per Google, il nostro sito ne
                        beneficerà in termini di <i>ranking</i> e visite.
                      </li>
                    </ul>
                  </p>
                </div>

                <p className="lead">
                  Facciamo alcuni esempi concreti:
                </p>

                <div className="d-flex">
                  <p>
                    <ul className="mt-3">
                      <li className="my-3">Un negozio online che vende abbigliamento che linka una giacca invernale</li>
                      <li className="my-3">Un sito di una agenzia viaggi che linka un tour in montagna</li>
                      <li className="my-3">Un articolo di cucina che linka un domino dedicato agli utensili di cucina</li>
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
