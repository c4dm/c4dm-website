import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import Layout from "../components/layout";
import "../style/bulmacustom.scss";

const ArchivePost = ({ data, pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout name="Blog" crumbs={crumbs}>
      
      <section className="section" id="header">
        <p style={{ color: 'orange' }}>🗂️ This is an archive page! Some information might not be up to date.</p><br />
        <div className="container">
          <h1 className="title">{frontmatter.title}</h1>
          <div className="lowerPadding"></div>

          {frontmatter.image && frontmatter.image.childImageSharp && (
            <GatsbyImage
              className="news-image"
              alt="Blogpost header image"
              image={frontmatter.image.childImageSharp.gatsbyImageData}
            />
          )}
        </div>
        
        <div className="container">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
        </div>
      </section>
    </Layout>
  );
};

export default ArchivePost;

export const pageQuery = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;