import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/layout.js"


const IndexPage = () => {
    const data = useStaticQuery(graphql`
      {
        about: markdownRemark(
          fields: { category: { eq: "about" } }
          fileAbsolutePath: { regex: "/bio.md/" }
        ) {
          html
          frontmatter {
            title
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 400)
              }
            }
          }
        }
      }
    `);
  return (
    <Layout>
      <section className="section">
        <div className="columns">
          <div className="column is-two-thirds">
            <h2 className="title">About</h2>
            <div className="content" dangerouslySetInnerHTML={{ __html: data.about.html }}></div>
          </div>
          <div className="column is-one-third">
            <p>TODO: implement youtube video here</p>  
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="title">Projects</h2>
        <div className="container">
          <p>TODO: carousel with project cards here</p>
        </div>
      </section>
      <section className="section">
        <h2 className="title">News</h2>
        <div className="container">
          <p>TODO: carousel with latest news and tweets</p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
