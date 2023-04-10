import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/layout.js";
import Carousel from "../components/carousel";
import BlogCard from "../components/blogCard";


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
        projects: allMarkdownRemark(
          filter: { fields: { category: { eq: "projects" } } }
          sort: { frontmatter: { date: DESC } }
          limit: 6
        ) {
          nodes {
            fields {
              slug
            }
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              title
              author
              date(formatString: "ddd DD MMM yy")
            }
            html
            id
          }
        }
      }
    `);

    const projectCards = data.projects.nodes.map((project) => (
      <BlogCard
        title={project.frontmatter.title}
        author={project.frontmatter.author}
        date={project.frontmatter.date}
        image={project.frontmatter.image.childImageSharp.gatsbyImageData}
        html={project.html}
        slug={project.fields.slug}
      />
    ));

  return (
    <Layout name="Homepage">
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
          <Carousel content={projectCards}/>
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
