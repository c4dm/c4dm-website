import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import software_examples from '../../../src/content/research/index/software_examples.png';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";


const IndexPage = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
  
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
    <Layout name="Software" crumbs={crumbs}>
      <section className="section">
      <div className="column is-one-third">
                <ParallelogramHeader text={data.software.frontmatter.title} backgroundColor="primary" textColor="white"/>
      </div>
      <div className="lowerPadding"></div>

        <div className="image-container">
            <img src={software_examples} alt="Screenshots of C4DM software Tony, Sonic Visualiser, and Sonic Lineup." />
        </div>
       
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.software.html }}
        ></div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Software</title>
