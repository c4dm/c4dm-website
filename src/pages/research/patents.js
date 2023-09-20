import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import TableCard from "../../components/tableCard";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";

// Return structured content for table card
const firstColumn = (title, filingDate, applicationNumber) => (
    <>
      <p className="title is-6">{title || "Name"} </p>
      <p className="is-3">Filing Date: {filingDate || "Date"} </p>
      <p>Application Number: {applicationNumber}</p>
    </>
);

const Patents = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
        active: allMarkdownRemark(
          filter: { fields: { category: { eq: "research/patents/projects" } } }
          sort: { frontmatter: { date: DESC } }
        ) {
          nodes {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              title
              begin
              grant
              link
            }
            id
          }
        }

      
        about: markdownRemark(
            fields: { category: { eq: "research/patents" } }
            fileAbsolutePath: { regex: "/about.md/" }
          ) {
          html
        }
      }
    `);

    return (
      <Layout name="Patents" crumbs={crumbs}>
        <section className="section">
          <ParallelogramHeader
            text="Patents"
            backgroundColor="primary"
            textColor="white"
            className="mb-6"
          />
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: data.about.html }}
          ></div>

          {data.active.nodes.map((patentEntry) => (
            <Link to={patentEntry.frontmatter.link}>
              <div
                class="card-image row is-three-fifths pt-3"
                key={patentEntry.id}
              >
                <TableCard
                  first={firstColumn(
                    patentEntry.frontmatter.title,
                    patentEntry.frontmatter.begin, patentEntry.frontmatter.grant
                  )}
                />
              </div>
            </Link>
          ))}
        </section>
      </Layout>
    );
}

export default Patents;