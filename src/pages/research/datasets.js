import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";


const IndexPage = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
        datasets: markdownRemark(
          fields: { category: { eq: "research/datasets" } }
          fileAbsolutePath: { regex: "/datasets.md/" }
        ) {
          html
          frontmatter {
            title
          }
        }
  
 		software: markdownRemark(
         	fields: { category: { eq: "research/datasets" } }
          fileAbsolutePath: { regex: "/software.md/" }
        ) {
          html
          frontmatter {
            title
          }
        }
      }
    `);

  return (
    <Layout name="Datasets" crumbs={crumbs}>
      <section className="section">
      <div className="column is-one-third">
                <ParallelogramHeader text={data.software.frontmatter.title} backgroundColor="primary" textColor="white"/>
      </div>
      <div className="lowerPadding"></div>
       
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.software.html }}
        ></div>
      </section>
      <section className="section">
      <div className="column is-one-third">
                <ParallelogramHeader text={data.datasets.frontmatter.title} backgroundColor="primary" textColor="white"/>
      </div>
      <div className="lowerPadding"></div>
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.datasets.html }}
        ></div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Datasets and Code</title>
