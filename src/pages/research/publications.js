import React, { useState, useCallback } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../../components/layout";
import TableCard from "../../components/tableCard";
import kebabCase from "lodash/kebabCase";
import ParallelogramHeader from "../../components/parallelogramHeader";
import TagSelector from "../../components/tagSelector";

// Return structured content for table card
const firstColumn = (title, author, medium, year) => (
  <>
    <strong className="is-6">{title || "Name"} </strong>
    <p className="is-3">{author} </p>

    <em>
      {medium}, {year}
    </em>
  </>
);

const Publications = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  const data = useStaticQuery(graphql`
    query {
      pubs: allReference(limit: 2000, sort: { year: DESC }) {
        nodes {
          title
          author
          journal
          booktitle
          year
        }
      }
      years: allReference(limit: 2000) {
        group(field: { year: SELECT }) {
          fieldValue
          totalCount
        }
      }

      about: markdownRemark(
        fields: { category: { eq: "about" } }
        fileAbsolutePath: { regex: "/publications.md/" }
      ) {
      html
      }
    
    }
  `);

  const [filteredNodes, setFilteredNodes] = useState(data.pubs.nodes);

  const getFilteredNodes = useCallback(
    (nodes) => {
      setFilteredNodes(nodes);
    },
    [setFilteredNodes]
  );

  return (
    <Layout name="Groups" crumbs={crumbs}>
      <section className="section">
        <ParallelogramHeader
          text="Publications"
          backgroundColor="primary"
          textColor="white"
          className="mb-6"
        />

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.about.html }}
        ></div>
        
        <div className="lowerPadding"></div>


        <TagSelector
          tags={data.years}
          nodes={data.pubs.nodes}
          callback={getFilteredNodes}
        />


        {filteredNodes.map((pub) => (
          <div className="card-image row is-three-fifths pt-3" key={pub.title}>
            <TableCard
              first={firstColumn(
                pub.title,
                pub.author,
                pub.journal || pub.booktitle || pub.conference,
                pub.year
              )}
            />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Publications;
