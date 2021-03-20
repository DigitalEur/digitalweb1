import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import MiniHero from "../../components/IndexSections/MiniHero";
import {
  Button,
  Card,
  CardBody, CardImg,
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
        <MiniHero heading={"Contattaci"} />
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg="8">
                <Card className="bg-gradient-secondary shadow">
                  <CardBody className="p-lg-5">
                    <h4 className="mb-1">Richiedi un preventivo</h4>
                    <p className="mt-0">
                      Ci prenderemo cura del tuo progetto.
                    </p>
                    <FormGroup
                        className={classnames("mt-5")}
                    >
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-user-run" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Inserisci il tuo nome"
                            type="text"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-email-83" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            placeholder="Inserisci la tua email"
                            type="email"
                        />
                      </InputGroup>
                    </FormGroup>
                    <FormGroup>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-settings-gear-65" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="select" name="select" id="exampleSelect">
                          <option disabled selected value> -- seleziona un servizio -- </option>
                          <option>Realizzazione siti web</option>
                          <option>Posizionamento SEO</option>
                          <option>Search Advertising</option>
                          <option>Social Advertising</option>
                          <option>Display Advertising</option>
                          <option>Retargeting strategy</option>
                          <option>Generazione contatti</option>
                          <option>Link Building</option>
                          <option>E-mail marketing</option>
                          <option>Altro</option>
                        </Input>
                      </InputGroup>
                    </FormGroup>
                    <FormGroup className="mb-4">
                      <Input
                          className="form-control-alternative"
                          cols="80"
                          name="name"
                          placeholder="Inserisci un messaggio..."
                          rows="4"
                          type="textarea"
                      />
                    </FormGroup>
                    <div>
                      <Button
                          block
                          className="btn-round"
                          color="default"
                          size="lg"
                          type="button"
                      >
                        Invia
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <div>
                    <Img
                        alt="..."
                        src={require("../../assets/img/theme/EU_digital_division.png")}
                        top
                    />
                    <h4 className="mt-5 mb-1 text-center">Sede Milano</h4>
                    <p className="my-0 text-center">
                      Via Lazzaro Spallanzani, 10
                    </p>
                    <p className="my-0 text-center">
                      Tel. +39 0221079190
                    </p>
                    <p className="my-0 text-center">
                      Cell. +39 3517155160
                    </p>
                    <p className="my-0 text-center text-primary">
                      europadigitaldivision@gmail.com
                    </p>
                    <p className="mt-0 text-center text-primary">
                      europasrl@pec.it
                    </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}
