import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import TableCard from "../components/tableCard";
import TagSelector from "../components/tagSelector";
import ParallelogramHeader from "../components/parallelogramHeader";

// Return structured content for table card
const firstColumn = (date) => <p className="subtitle is-6">{date || null}</p>;

const secondColumn = (title) => (
    <>               
      <p className="title is-4">{title || "New Blog Entry"} </p>
      <div className="card-footer p-2 has-text-centered is-align-self-center">
        Read More
      </div>
    </>
)

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
          title
          date(formatString: "ddd DD MMM yy")
        }
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
        <ParallelogramHeader
          text="News"
          backgroundColor="primary"
          textColor="white"
          className="mb-6"
        />
        <TagSelector data={data} filterTemplate={"/newstags/"} root={`/news`} />

        <div className="lowerPadding"> </div>

        {data.news.nodes.map((blogentry) => (
          <div
            className="card-image row is-three-fifths pt-3"
            key={blogentry.id}
          >
            <Link to={blogentry.fields.slug}>
              <TableCard
                first={firstColumn(blogentry.frontmatter.date)}
                second={secondColumn(blogentry.frontmatter.title)}
              />
            </Link>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default News;