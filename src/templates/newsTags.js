import React from "react"
import Layout from "../components/layout";
import NewsCard from "../components/newsCard";
import TagSelector from "../components/tagSelector";

// Components
import { Link, graphql } from "gatsby"

const NewsTags = ({ pageContext, data }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  const tagName = `${tag}`

  return (
    <Layout name="NewsTag" crumbs={crumbs}>
    <section className="section">
      <h1 class="title">News With Tag: {tagName}</h1>
      <TagSelector
                data = {data}
                filterTemplate = {'/newstags/'}
                root ={`/news`}
              />
      <div class="card is-horizontal rows">
            {edges.map(({ node })  => {
                const { slug } = node.fields
                const {title,author,date,image} = node.frontmatter
                const { html } = node.html
                
                return (
                  <Link to={slug}>
                    <NewsCard
                    title={title} 
                    author={author} 
                    date={date}
                    html = {html}
                    />
                  </Link>
                )
                
                }
            )}
      </div> 
      </section>
    </Layout>
    
 
  )
}



export default NewsTags

export const pageQuery = graphql`
    query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC }}
      filter: { fields: { category: { eq: "news" } }, frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
    
    
    allTags: allMarkdownRemark(
      limit: 2000
      filter: { fields: { category: { eq: "news" } }}
      ) {
        group(field: { frontmatter: { tags: SELECT }}) {
          fieldValue
          totalCount
        }

      }
  }
`