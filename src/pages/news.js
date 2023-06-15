import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import NewsCard from "../components/newsCard";
import kebabCase from "lodash/kebabCase";
import TagSelector from "../components/tagSelector";


const News = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

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

    allTags: allMarkdownRemark(
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
    <Layout name="News" crumbs={crumbs}>
      <section className="section">
        <h1 className="title">News</h1>
        <TagSelector
                data = {data}
                filterTemplate = {'/newstags/'}
                root ={`/news`}
              />

          <div className="lowerPadding"> </div>
           
          {data.news.nodes.map((blogentry) => (
              <Link to={blogentry.fields.slug}>
              <NewsCard
                title={blogentry.frontmatter.title}
                author={blogentry.frontmatter.author}
                date={blogentry.frontmatter.date}
                image={blogentry.frontmatter.image.childrenImageSharp[0].gatsbyImageData}
                html={blogentry.html}
              />
              </Link>
          ))}
          
      </section>
    </Layout>
  );
};

export default News;