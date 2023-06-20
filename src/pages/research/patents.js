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
                        <div class="card-image row is-three-fifths pt-3" key={patentEntry.id}> 
                            <PatentCard
                                title={patentEntry.frontmatter.title}
                                applicationNumber={patentEntry.frontmatter.grant}
                                filingDate={patentEntry.frontmatter.begin}
                            />
                        </div>
                        </Link>
                    ))}
                
            </section>
        </Layout>
    );
}

export default Patents;