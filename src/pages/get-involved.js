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
        getInvolved: markdownRemark(
          fields: { category: { eq: "get-involved" } }
          fileAbsolutePath: { regex: "/getInvolved.md/" }
        ) {
          html
          frontmatter {
            title
          }
        }
      }
    `);

  return (
    <Layout name="get-involved" crumbs={crumbs}>
      <section className="section">
        <ParallelogramHeader
          text={data.getInvolved.frontmatter.title}
          backgroundColor="primary"
          textColor="white"
          className="mb-6"
        />
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.getInvolved.html }}
        ></div>
      </section>
    </Layout>
  );
}

export default NewsPage

export const Head = () => <title>Get Involved</title>
