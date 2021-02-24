import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'
import {Card, CardBody, Col} from "reactstrap";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <>
        {posts &&
          posts.map(({ node: post }) => (
            <Col xs="12" md="4" key={post.id} >
              <Card className="shadow shadow-lg--hover mt-5">
                {/*<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />*/}
                <CardBody>
                    <header>
                        {post.frontmatter.featuredimage ? (
                            <div className="featured-thumbnail">
                                <PreviewCompatibleImage
                                    imageInfo={{
                                        image: post.frontmatter.featuredimage,
                                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                    }}
                                />
                            </div>
                        ) : null}
                        <p className="post-meta">
                            <Link
                                className="title has-text-primary is-size-4"
                                to={post.fields.slug}
                            >
                                {post.frontmatter.title}
                            </Link>
                            <span> &bull; </span>
                            <span className="subtitle is-size-5 is-block">
                    {post.frontmatter.date}
                  </span>
                        </p>
                    </header>
                  <div className="d-flex px-2">
                    <div>
                      {/*<PreviewCompatibleImage imageInfo={item} />*/}
                      <h5 className="title text-success">
                        {/*{item.text}*/}
                      </h5>
                      <p>
                        {post.excerpt}
                        <br />
                        <br />
                        <Link className="button" to={post.fields.slug}>
                          Continua a leggere →
                        </Link>
                      </p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
      </>
    )
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
