import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import PartnerCard from "../components/partnerCard";
import ParallelogramHeader from "../components/parallelogramHeader";

const Partners = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
        active: allMarkdownRemark(
          filter: {
            fields: { category: { eq: "partners" } }
            frontmatter: { status: { eq: "active" } }
          }
          sort: { frontmatter: { date: DESC } }
          limit: 400
        ) {
          nodes {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    aspectRatio: 1
                    backgroundColor: "transparent"
                    transformOptions: { fit: CONTAIN }
                  )
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
      <Layout name="Partners" crumbs={crumbs}>
        <section className="section">
          <ParallelogramHeader
            text="Partners"
            backgroundColor="primary"
            textColor="white"
            className="mb-6"
          />
          <div class="columns is-multiline">
            {data.active.nodes.map((partnerentry) => (
              <div
                className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex"
                key={partnerentry.id}
              >
                <Link to={partnerentry.frontmatter.link}>
                  <PartnerCard
                    title={partnerentry.frontmatter.title}
                    image={
                      partnerentry.frontmatter.image.childImageSharp
                        .gatsbyImageData
                    }
                  />
                </Link>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
}

export default Partners;