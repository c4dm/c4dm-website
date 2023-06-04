import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import PartnerCard from "../components/partnerCard";


const Partners = () => {
    const data = useStaticQuery(graphql`
      {
        active: allMarkdownRemark(
          filter: { fields: { category: { eq: "partners" } }, frontmatter: { status: { eq: "active" } } }
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
              link
            }
            id
          }
        }
      }
    `);

    return (
     
        <Layout name="Partners">
            <section className="section">
            <h1>Partners</h1>
              <div className="columns is-multiline">
              <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex"></div>
                    {data.active.nodes.map((partnerentry) => (
                       <Link to={partnerentry.frontmatter.link}>
                            <PartnerCard
                                title={partnerentry.frontmatter.title}
                                image={partnerentry.frontmatter.image.childImageSharp.gatsbyImageData}
                            />
                        </Link>
                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Partners;