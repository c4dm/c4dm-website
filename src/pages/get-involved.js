import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/layout.js";
import ParallelogramHeader from "../components/parallelogramHeader"; 

const NewsPage = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
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
    <Layout name="get-involved" crumbs={crumbs}>
      <section className="section">
        <ParallelogramHeader
          text="Get Involved"
          backgroundColor="primary"
          textColor="white"
          className="mb-6"
        />
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
