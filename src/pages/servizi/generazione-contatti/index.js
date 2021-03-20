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
        <MiniHero heading={"Generazione di Contatti"} />
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">


                <p className="lead">
                  <b><i>L'Italia ha un indice di penetrazione di internet che si attesta intorno all’80% della
                    popolazione</i></b>
                </p>

                <p className="lead">
                  La <b>Lead Generation</b> è un insieme di azioni di marketing che consente di acquisire e generare una
                  lista di <b>contatti</b> realmente interessati ai servizi o prodotti offerti da un’azienda.
                </p>

                <p className="lead">
                  Il <b>Lead</b>, è un possibile cliente interessato ai nostri servizi o prodotti, che cerca di mettersi
                  in contatto con noi lasciando i propri dati per essere ricontattato.
                </p>

                <p className="lead text-center">
                  <b>Perché fare una strategia Lead Generation?</b>
                </p>

                <div className="d-flex justify-content-center">
                  <p>
                    <ul className="mt-3">
                      <li className="my-3">Conoscere meglio i nostri clienti per poter offrire un servizio che rispecchi
                        le loro necessità
                      </li>
                      <li className="my-3">Creare relazioni e guadagnare la fiducia di nuovi clienti, e far sì che
                        questi scelgano sempre i servizi o prodotti dell’azienda
                      </li>
                    </ul>
                  </p>
                </div>

                <p className="lead">
                  Ti abbiamo incuriosito?
                </p>

                <p className="lead">
                  Contattaci senza impegni (<a href="tel:+393517155160">+39 3517155160</a> /
                  <a href="mailto:europadigitaldivision@gmail.com">europadigitaldivision@gmail.com</a>) e chiedi
                  maggiori informazioni sul nostro servizio, o poni una domanda diretta attraverso i nostri social
                  (Instagram, Facebook, LinkedIn). Puoi prendere un appuntamento virtuale su Skype, oppure possiamo
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