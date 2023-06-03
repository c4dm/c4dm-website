import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../../components/layout.js";
// import Carousel from "../components/carousel";
// import BlogCard from "../components/blogCard";
// import Video from "../components/video";

const IndexPage = () => {
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
    <Layout name="Datasets">
      <section className="section">
        <h2 className="title">{data.software.frontmatter.title}</h2>
        <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.software.html }}
        ></div>
      </section>
      <section className="section">
        <h2 className="title">{data.datasets.frontmatter.title}</h2>
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
