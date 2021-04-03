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
import {Link} from "gatsby";

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
        <MiniHero heading={"Search Advertising"} />
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
                  <img
                      alt="..."
                      style={{width: 500}}
                      src={require("../../../img/3.jpg")}
                      top
                  />
                </div>
                <p className="lead">
                  La <b>Search Advertising</b> consiste nel <b>mettere online nei motori di ricerca annunci pubblicitari
                  mirati</b>. Gli inserzionisti possono fare offerte per le parole chiavi attinenti la loro attività,
                  questi annunci verranno visualizzati solo da chi cerca la keyword. In questo modo l’utente non
                  percepisce gli annunci di search advertising invasivi, perché la pubblicità corrisponde alle query del
                  consumatore.
                </p>

                <p className="lead">
                  L’obiettivo della search advertising è l’aumento delle conversioni. Le conversioni sono tutte quelle azioni compiute dall’utente, come ad esempio fare una richiesta,  acquistare un prodotto o un servizio, chiamare l’azienda, chiedere un preventivo.
                </p>

                <p className="lead text-center">
                  <b>I vantaggi della SEA</b>
                </p>

                <p className="my-5">
                  <ul className="mt-3">
                    <li className="my-3">Aumenta il traffico di visitatori</li>
                    <li className="my-3">Aumenta la popolarità del marchio</li>
                    <li className="my-3">Raccoglie dati che possono essere utilizzati per migliorare la strategia SEO</li>
                    <li className="my-3">L’inserzionista decide come raggiungere i potenziali clienti e quanto spendere</li>
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
