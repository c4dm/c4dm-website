import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blogCard";

const Blog = () => {
  const data = useStaticQuery(graphql`
  {
    allMarkdownRemark(
    filter: {fields: {category: {eq: "blog"}}}
    sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          image {
            childrenImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
          title
          author
          date(formatString: "ddd DD MMM yy")
        }
        html
        id
      }
    }
  }
  `);
  return (
    <Layout name="Blog">
      <section className="section">
        <div className="columns is-multiline">
          {data.allMarkdownRemark.nodes.map((blogentry) => (
            <div className="column is-one-quarter is-one-third-tabled is-full-mobile is-flex" key={blogentry.id}>
              <BlogCard
                title={blogentry.frontmatter.title}
                author={blogentry.frontmatter.author}
                date={blogentry.frontmatter.date}
                image={blogentry.frontmatter.image.childrenImageSharp[0].gatsbyImageData}
                html={blogentry.html}
                slug={blogentry.fields.slug}
              />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
