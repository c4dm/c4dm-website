import "@fortawesome/fontawesome-free/css/all.min.css";
import { graphql, useStaticQuery } from "gatsby";
import React, { useCallback, useState } from "react";
import Layout from "../../components/layout";
import ParallelogramHeader from "../../components/parallelogramHeader";
import TableCard from "../../components/tableCard";
import TagSelector from "../../components/tagSelector";
import "../../style/bulmacustom.scss";

// Return structured content for table card
// Display DOI if available, otherwise display URL, otherwise none
const firstColumn = (title, author, medium, year, doi, url) => (
  <>
    <strong className="is-6">{title || "Name"} </strong>
    <p className="is-3">{author} </p>
    <em>
      {medium}, {year}
    </em>
    {doi ? (
      <p>
        DOI: <a href={`https://doi.org/${doi}`} target="_blank" rel="noopener noreferrer">{doi}</a>
      </p>
    ) : url ? (
      <p>
        URL: <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
      </p>
    ) : null}
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
          doi
          url
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

  const sortedYears = {
    ...data.years,
    group: [...data.years.group].sort((a, b) => b.fieldValue - a.fieldValue)
  };

  return (
    <Layout name="Publications" crumbs={crumbs}>
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
          tags={sortedYears}
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
                pub.year,
                pub.doi,
                pub.url
              )}
            />
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Publications;
