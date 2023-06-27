import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../../components/layout";
import TableCard from "../../components/tableCard";
import kebabCase from "lodash/kebabCase"
import ParallelogramHeader from "../../components/parallelogramHeader";

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

const Publications = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
    query {
      pubs:  allReference (
          limit: 2000
          sort: {year: DESC}){
          edges {
            node {
                title
                author
                journal
                booktitle
                year
            }
          }
        }
      years: allReference(
        limit: 2000
        ) {
        group(field: {year: SELECT}) {
          fieldValue
          totalCount
        }
      }
    }  
    `);

    return (
      <Layout name="Groups" crumbs={crumbs}>
        <section className="section">
          <ParallelogramHeader
            text="Publications"
            backgroundColor="primary"
            textColor="white"
            className="mb-6"
          />

          <div>
            <h1>Year: </h1>

            {data.years.group.map((year) => (
              <Link to={`/years/${kebabCase(year.fieldValue)}/`}>
                {year.fieldValue}
              </Link>
            ))}
          </div>
              {data.pubs.edges.map((pub) => (
                <div
                  className="card-image row is-three-fifths pt-3"
                  key={pub.node.title}
                >
                  <TableCard
                    first={firstColumn(
                      pub.node.title,
                      pub.node.author,
                      pub.node.journal ||
                        pub.node.booktitle ||
                        pub.node.conference,
                      pub.node.year
                    )}
                  />
                </div>
                ))}
        </section>
      </Layout>
    );
}

export default Publications;