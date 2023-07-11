import React from "react";
import {graphql, useStaticQuery } from "gatsby";
import Layout from "../../../components/layout";
import BlogCard from "../../../components/blogCard";
import ParallelogramHeader from "../../../components/parallelogramHeader";

const Research = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const data = useStaticQuery(graphql`
    {
      labs: allMarkdownRemark(
        filter: { fields: { category: { eq: "research/labs" } } }
        sort: { frontmatter: { name: ASC } }
      ) {
        nodes {
          id
          frontmatter {
            name
            link
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
          }
        }
      }
    }
  `);

    return (
        <Layout name="Research" crumbs={crumbs}>
            <section className="section">
            <div className="lowerPadding">
                <div className="column is-one-third">
                    <ParallelogramHeader text="Research Labs" backgroundColor="primary" textColor="white"/>
                </div>
            </div>
                <div className="columns is-multiline">
                    {data.labs.nodes.map((lab) => (
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex" key={lab.id}>
                            <BlogCard 
                                title={lab.frontmatter.name} 
                                link={lab.frontmatter.link} 
                                image={lab.frontmatter.image?.childImageSharp.gatsbyImageData} 
                            />
                        </div>
                    ))}
                </div>
                </section>
        </Layout>
    );
}

export default Research;
