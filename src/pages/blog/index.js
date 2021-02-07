import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'
import MiniHero from "../../components/IndexSections/MiniHero.js";
import {Row} from "reactstrap";

export default class BlogIndexPage extends React.Component {
    render() {
        return (
            <Layout>
                {/*        <div
          className="full-width-image-container margin-top-0 bg-gradient-primary"
          style={{
            //backgroundImage: `url('/img/blog-index.jpg')`,
            //minHeight: 100,
          }}
        >
         <h1
            className="has-text-weight-bold is-size-1 bg-gradient-primary"
            style={{
              boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
              //backgroundColor: '#ff4400',
              color: 'white',
              padding: '1rem',
            }}
          >
            Latest Stories
          </h1>
        </div>*/}
                <MiniHero heading={"Blog"} />
                <section className="section pt-0">
                    <div className="container pt-0">
                        <div className="content pt-0">
                            <Row>
                                <BlogRoll />
                            </Row>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}
