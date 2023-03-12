import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";


const About = () => {
    const data = useStaticQuery(graphql`
      {
        bio: markdownRemark(
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
        project: markdownRemark(
          fields: { category: { eq: "about" } }
          fileAbsolutePath: { regex: "/project.md/" }
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
    <Layout name="About">
      <section className="section">
        <div className="columns">
          <div className="column is-one-third">
            <GatsbyImage
              alt="Image of Anne Steinhoff"
              image={data.bio.frontmatter.image.childImageSharp.gatsbyImageData}
            />
          </div>
          <div className="column is-two-thirds">
            <h1 className="title">{data.bio.frontmatter.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.bio.html }}
            ></div>
          </div>
        </div>
      </section>
      <hr />
      <section className="section">
        <div className="columns">
          <div className="column is-two-thirds">
            <h1 className="title">{data.project.frontmatter.title}</h1>
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: data.project.html }}
            ></div>
          </div>
          <div className="column is-one-third">
            <GatsbyImage
              alt="Image describing the Coeliac Disease and the Workplace project"
              image={
                data.project.frontmatter.image.childImageSharp.gatsbyImageData
              }
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
