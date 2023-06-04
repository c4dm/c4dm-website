import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import ProjectCard from "../components/projectCard";

// Components
import { Link, graphql } from "gatsby"

const NewsTags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  const tagName = `${tag}`

  return (
    <Layout name="NewsTag">
    <section className="section">
      <h1 class="title">News with tag: {tagName}</h1>
      <div class="card is-horizontal rows">
            {edges.map(({ node })  => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                const { author } = node.frontmatter
                const { begin } = node.frontmatter
                const { end } = node.frontmatter
                const { grant } = node.frontmatter
                const { image } = node.frontmatter
                
                
                return (
                  <div class="pt-3">
                  <Link to={slug}>
                 
                  <ProjectCard
                  title={title} 
                  author={author} 
                  begin={begin}
                  end={end}
                  grant={grant}
                  image={image.childImageSharp.gatsbyImageData}
                
                 
              />
             
              </Link>
              </div>
              
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
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
            title
            author
            begin
            end
            grant
            amount
            link
          }
        }
      }
    }
  }
`