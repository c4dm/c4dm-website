import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../../components/layout";
import PublicationCard from "../../components/publicationCard";
import kebabCase from "lodash/kebabCase"
import ParallelogramHeader from "../../components/parallelogramHeader";

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

          <div class="card is-horizontal rows">
            {data.pubs.edges.map(({ node }) => {
              const { title } = node;
              const { author } = node;
              const { journal } = node;
              const { conference } = node;
              const { booktitle } = node;
              const { year } = node;

              return (
                <div class="pt-3">
                  <PublicationCard
                    title={title}
                    author={author}
                    journal={journal}
                    conference={conference}
                    booktitle={booktitle}
                    year={year}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    );
}

export default Publications;