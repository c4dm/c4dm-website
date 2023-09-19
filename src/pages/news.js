import React, {useState, useCallback} from "react";
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
          tags
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
      
    about: markdownRemark(
        fields: { category: { eq: "about" } }
        fileAbsolutePath: { regex: "/news.md/" }
      ) {
      html
      }  

  }
  `);

    const [filteredNodes, setFilteredNodes] = useState(data.news.nodes);

    const getFilteredNodes = useCallback((nodes) => {
      setFilteredNodes(nodes);
    }, [setFilteredNodes]);

  return (
    <Layout name="News" crumbs={crumbs}>
      <section className="section">
        <ParallelogramHeader
          text="News and Events"
          backgroundColor="primary"
          textColor="white"
          className="mb-6"
        />

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.about.html }}
        ></div>

        <p className="title is-4 pt-5" >Latest News and Events</p>

      
        
        <TagSelector tags={data.allTags} nodes={data.news.nodes} data={data} callback={getFilteredNodes}/>


        {filteredNodes.map((blogentry) => (
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
          )
        )}
      </section>
    </Layout>
  );
};

export default News;