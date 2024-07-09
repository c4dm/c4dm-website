import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import datasets_example from '../../../src/content/research/index/datasets_example.png';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

const IndexPage = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
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
    }
  `);

  return (
    <Layout name="Datasets" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text={data.datasets.frontmatter.title} backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        <div className="image-container">
            <img src={datasets_example} alt="Example of audio annotation." />
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.datasets.html }}
        ></div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Datasets</title>