import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import ParallelogramHeader from "../components/parallelogramHeader";
import TableCard from "../components/tableCard";
import "../style/bulmacustom.scss";

// Return structured content for table card
const firstColumn = () => null; // No date, so we return null

const secondColumn = (title) => (
    <>               
      <p className="title is-4">{title || "New Entry"} </p>
      <div className="card-footer p-2 has-text-centered is-align-self-center">
        Read More
      </div>
    </>
);

const Archive = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const data = useStaticQuery(graphql`
  {
    archive: allMarkdownRemark(
      filter: {fields: {category: {eq: "archive"}}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
        id
      }
    }
  }
  `);

  return (
    <Layout name="Archive" crumbs={crumbs}>
      <section className="section">
        <ParallelogramHeader
          text="Archive"
          backgroundColor="primary"
          textColor="white"
          className="mb-6"
        />

        <p className="title is-4 pt-5">Archive Entries</p>

        {data.archive.nodes.map((entry) => (
          <div
            className="card-image row is-three-fifths pt-3"
            key={entry.id}
          >
            <Link to={entry.fields.slug}>
              <TableCard
                first={firstColumn()}
                second={secondColumn(entry.frontmatter.title)}
              />
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Archive;