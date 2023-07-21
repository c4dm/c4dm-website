import React from "react";
import {graphql,useStaticQuery} from "gatsby";
import Layout from "../../components/layout";
import ParallelogramHeader from "../../components/parallelogramHeader";
import BlogCard from "../../components/blogCard";

const Research = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

    const data = useStaticQuery(graphql`
      {
        pages: allMarkdownRemark(
            filter: { fields: { category: { eq: "research/index" } } }
            ) {
            nodes {
                id
                frontmatter {
                name
                slug
                image {
                    childImageSharp {
                    gatsbyImageData(layout: CONSTRAINED)
                    }
                }
                }
            }
            }
      }
    `);
    return (
      <Layout name="Research" crumbs={crumbs}>
        <section className="section ">
          <ParallelogramHeader
            text="Research"
            backgroundColor="primary"
            textColor="white"
          />

          <div className="lowerPadding"></div>

          <div className="columns is-flex is-multiline">
            {data.pages.nodes.map((page) => (
              <div
                className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex"
                key={page.id}
              >
                <BlogCard
                  title={page.frontmatter.name}
                  slug={page.frontmatter.slug}
                  image={page.frontmatter.image.childImageSharp.gatsbyImageData}
                  largeTitle={true}
                />
              </div>
            ))}
          </div>
        </section>
      </Layout>
    );
}

export default Research;