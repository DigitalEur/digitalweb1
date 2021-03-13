import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Content, {HTMLContent} from '../components/Content'
import MiniHero from "../components/IndexSections/MiniHero";
import {Button, Col} from "reactstrap";

export const AboutPageTemplate = ({title, content, contentComponent}) => {
    const PageContent = contentComponent || Content

    return (
        <>
            <MiniHero heading={title} />
            <section className="section section--gradient">
                <div className="container">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className="section">
                                <p className="lead">
                                    <b>Europa Digital Division</b> è l’unità di marketing e comunicazione con caratteristiche di <b>consulenza digitale</b>,
                                    della società [Europa s.r.l.](https://www.europa-srl.com). Questa unità nasce nel 2021 dall’esigenza di permettere a tutte quelle attività commerciali
                                    ancorate nell’offline o che non hanno una adeguata strategia di comunicazione ed advertising di aumentare il proprio
                                    fatturato.
                                </p>
                                <p className="lead">
                                    Ogni azienda può trarre vantaggio dal Digital Marketing, che oggi è davvero indispensabile per crescere, perché gli
                                    acquisti sono ormai in gran parte su Internet e questo avviene in ogni mercato o business-to-business (<b>B2B</b>).
                                </p>
                                <p className="lead">
                                    Grazie al nostro team di professionisti attivi da anni nel settore del <b>Digital Marketing</b> offriamo <b>diverse soluzioni
                                    per aumentare la visibilità e le vendite della vostra attività</b>. La nostra consulenza spazia dalla <i>realizzazione di siti web
                                    al posizionamento sui motori di ricerca (SEO), dall’advertising (Google Adv, Facebook Adv, Instagram Adv, Display Adv
                                    ect) al web analytics (Google Analytics) e tanti altri servizi, Generazione Contatti, Link Building, E-mail Marketing.</i>
                                </p>
                                <p className="lead">
                                    <b>Mettiti in contatto con il nostro team per scoprire cosa distingue Europa Digital Division dalle altre agenzie digitali.</b>
                                </p>
                                <div className="d-flex justify-content-center">
                                    <Button
                                        block
                                        className="btn-success mt-5 w-25 align-self-center"
                                        color="default"
                                        href="/contatti/"
                                        size="lg"
                                    >
                                        Contattaci
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

AboutPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func,
}

const AboutPage = ({data}) => {
    const {markdownRemark: post} = data

    return (
        <Layout>
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    )
}

AboutPage.propTypes = {
    data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
