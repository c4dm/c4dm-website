import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import BlogCard from "../components/blogCard";
import kebabCase from "lodash/kebabCase"



const News = () => {
  const data = useStaticQuery(graphql`
  {
    news: allMarkdownRemark(
    filter: {fields: {category: {eq: "news"}}}
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

    tags: allMarkdownRemark(
          limit: 2000
          filter: {fields: {category: {eq: "news"}}}
          ) {
          group(field: { frontmatter: { tags: SELECT }}) {
            fieldValue
            totalCount
          }
        }
  }
  `);
  return (
    <Layout name="News">
      <section className="section">
        <div>
                <h1>Tags</h1>
                <ul>
                  {data.tags.group.map(tag => (
                    <li key={tag.fieldValue}>
                      <Link to={`/newstags/${kebabCase(tag.fieldValue)}/`}>
                        {tag.fieldValue} ({tag.totalCount})
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
        <div className="columns is-multiline">
          {data.news.nodes.map((blogentry) => (
            <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex" key={blogentry.id}>
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

export default News;
