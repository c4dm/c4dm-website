import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import PatentCard from "../../components/patentCard";
import ParallelogramHeader from "../../components/parallelogramHeader";

const Patents = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
        active: allMarkdownRemark(
          filter: { fields: { category: { eq: "research/patents/projects" } }, frontmatter: { status: { eq: "active" } } }
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
              author
              begin
              end
              grant
              amount
              link
            }
            id
          }
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
              <div class="card is-horizontal rows">
                    {data.active.nodes.map((patentEntry) => (
                       <Link to={patentEntry.frontmatter.link}>
                        <div class="card-image row is-three-fifths pt-3" key={patentEntry.id}> 
                            <PatentCard
                                title={patentEntry.frontmatter.title}
                                applicationNumber={patentEntry.frontmatter.author}
                                filingDate={patentEntry.frontmatter.begin}
                            />
                        </div>
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Patents;