import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import PatentCard from "../../components/patentCard";


const Patents = () => {
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
     
        <Layout name="Patents">
            <section className="section">
              <h1>Patents</h1>
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