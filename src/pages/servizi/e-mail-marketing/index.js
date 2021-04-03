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
        <MiniHero heading={"E-mail Marketing"} />
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
                      src={require("../../../img/9.jpg")}
                      top
                  />
                </div>

                <p className="lead text-center">
                  <b><i>L’e-mail marketing è un alleato fondamentale per qualsiasi attività al fine di aumentare il
                    proprio business</i></b>
                </p>
                <p className="lead">
                  L’<b>E-mail marketing</b> è un modello di marketing diretto che utilizza la posta elettronica per
                  comunicare alla propria audience messaggi promozionali su prodotti e servizi, messaggi informativi che
                  hanno l’obiettivo di <b>fidelizzare i clienti</b>.
                </p>

                <p className="lead">
                  Attenendosi alla normativa <b>GDPR</b> in materia di protezione dei dati personali, che permette di
                  svolgere attività di comunicazione promozionale, è possibile creare una certa confidenza con i propri
                  utenti che rilasciano volontariamente il proprio contatto. In questo modo l’utente sarà invogliato a
                  tornare sul nostro sito per rimanere sempre informato delle nostre novità, promozioni, sconti e
                  quant’altro!
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
