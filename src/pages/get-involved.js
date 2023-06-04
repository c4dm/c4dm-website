import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/layout.js";


const NewsPage = () => {
    const data = useStaticQuery(graphql`
      {
        participate: markdownRemark(
          fields: { category: { eq: "get-involved" } }
          fileAbsolutePath: { regex: "/participate.md/" }
        ) {
          html
          frontmatter {
            title
            video
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
    <Layout name="get-involved">
      <section className="section">
            <h2 className="title">{data.participate.frontmatter.title}</h2>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.participate.html }}
            ></div>
        </section>
    </Layout>
  );
}

export default NewsPage

export const Head = () => <title>Get Involved</title>
