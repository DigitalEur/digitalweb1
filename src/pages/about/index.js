import React from 'react'
import { navigate } from 'gatsby-link'
import Layout from '../../components/Layout'
import MiniHero from "../../components/IndexSections/MiniHero";
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
        <MiniHero heading={"Chi siamo"} />
        <section className="section">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <p>
                <b>Europa Digital Division</b> è l’unità di marketing e comunicazione con caratteristiche
                  di <b>consulenza digitale</b>, della società <a href="https://www.europa-srl.com" target="_blank">
                  Europa s.r.l.</a>.
                  Questa unità nasce nel 2021 dall’esigenza di permettere a tutte quelle attività commerciali ancorate
                  nell’offline o che non hanno una adeguata strategia di comunicazione ed advertising di aumentare il
                  proprio fatturato.
                </p>
                <p>
                Ogni azienda può trarre vantaggio dal Digital Marketing, che oggi è davvero indispensabile per crescere,
                perché gli acquisti sono ormai in gran parte su Internet e questo avviene in ogni mercato o
                business-to-business (<b>B2B</b>).
                </p>
                <p>
                Grazie al nostro team di professionisti attivi da anni nel settore del <b>Digital Marketing</b> offriamo
                <b>diverse soluzioni per aumentare la visibilità e le vendite della vostra attività</b>. La nostra
                consulenza spazia dalla <i>realizzazione di siti web al posizionamento sui motori di ricerca (SEO),
                dall’advertising (Google Adv, Facebook Adv, Instagram Adv, Display Adv ect) al web analytics
                  (Google Analytics) e tanti altri servizi, Generazione Contatti, Link Building, E-mail Marketing.</i>
                </p>
                <p>
                <b><i>Mettiti in contatto con il nostro team per scoprire cosa distingue Europa Digital Division dalle
                  altre agenzie digitali.</i></b>
                </p>

                <div className="d-flex justify-content-center">
                  <Button
                      block
                      className="btn-success mt-5 w-50 align-self-center"
                      color="default"
                      href="/contatti/"
                      size="lg"
                  >
                    Contattaci
                  </Button>
                </div>

                <div className="mt-5">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8927.911532249407!2d9.20694261346993!3d45.47917413870031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6bf6217f1e3%3A0xdc40eb1b1c796290!2sVia%20Lazzaro%20Spallanzani%2C%2010%2C%2020129%20Milano%20MI!5e0!3m2!1sit!2sit!4v1616275702463!5m2!1sit!2sit"
                    width="1000"
                    height="600"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    )
  }
}
