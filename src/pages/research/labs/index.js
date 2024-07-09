import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BlogCard from "../../../components/blogCard";
import Layout from "../../../components/layout";
import ParallelogramHeader from "../../../components/parallelogramHeader";
import "../../../style/bulmacustom.scss";

const Research = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const data = useStaticQuery(graphql`
    {
      labs: allMarkdownRemark(
        filter: {
          fields: { category: { eq: "research/labs" } },
          frontmatter: { status: { ne: "ex-lab" } }
        }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            name
            link
            image {
              childImageSharp {
                gatsbyImageData(
                  layout: CONSTRAINED
                  aspectRatio: 1
                  backgroundColor: "transparent"
                  transformOptions: { fit: CONTAIN }
                )
              }
            }
          }
        }
      }
      exLabs: allMarkdownRemark(
        filter: {
          fields: { category: { eq: "research/labs" } },
          frontmatter: { status: { eq: "ex-lab" } }
        }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <Layout name="Groups" crumbs={crumbs}>
      <section className="section">
        <div className="lowerPadding">
          <div className="column is-one-third">
            <ParallelogramHeader text="Research Labs" backgroundColor="primary" textColor="white" />
          </div>
        </div>
        <div className="columns is-multiline">
          {data.labs.nodes.map((lab) => (
            <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex" key={lab.id}>
              <BlogCard
                title={lab.frontmatter.name}
                link={lab.frontmatter.link}
                image={lab.frontmatter.image?.childImageSharp.gatsbyImageData}
              />
            </div>
          ))}
        </div>
      </section>
      {/* Old labs */}
      <section className="section">
        <div className="container">
          <h2 className="title is-5">Previous labs</h2>
          <ul>
            {data.exLabs.nodes.map((exLab) => (
              <li key={exLab.id}><a href={exLab.frontmatter.link}>{exLab.frontmatter.name}</a></li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export default Research;