import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import ParallelogramHeader from "../components/parallelogramHeader";
import ProjectCard from "../components/projectCard";
import {startCase, camelCase} from 'lodash';
import TagSelector from "../components/tagSelector";
import { useStaticQuery, Link, graphql} from "gatsby";



const ProjectTags = ({ pageContext, data }) => {

  
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
    <Layout name={startCase(camelCase(tagName))+ " Projects"} crumbs={crumbs}>
    <section className="section">
       <ParallelogramHeader
            text="Research Projects"
            backgroundColor="primary"
            textColor="white"
            className="mb-6"
          />
      <TagSelector
                data = {data}
                // filterTemplate = {'/projectstags/'}
                root ={`/research/projects`}
                selected={tag}
              />
       <div className="lowerPadding">
        
        </div>
      <h2>{startCase(camelCase(tagName))+ " Projects"}</h2>
     {/* {edges} */}
          {console.log(edges)}
            {edges.map(({ node })  => {
                const { slug } = node.fields
                const { title } = node.frontmatter
                const { author } = node.frontmatter
                const { begin } = node.frontmatter
                const { end } = node.frontmatter
                const { grant } = node.frontmatter
                const { image } = node.frontmatter
                
                
                return (
                  // <div class="pt-3">
                  <Link to={slug}>
                 <div class="card-image row is-three-fifths pt-3" key={node.id}> 
                  <ProjectCard
                  title={title} 
                  author={author} 
                  begin={begin}
                  end={end}
                  grant={grant}
                  image={image.childImageSharp.gatsbyImageData}
                
                 
              />
             </div>
              </Link>
              // </div>
              
                )
                
                }
            )}
      
      </section>
    </Layout>
  )
}

export default ProjectTags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC }}
      filter: { fields: { category: { eq: "projects" } }, frontmatter: { tags: { in: [$tag] } } }
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
  
  allTags: allMarkdownRemark(
      limit: 2000
      filter: { fields: { category: { eq: "projects" } }}
      ) {
        group(field: { frontmatter: { tags: SELECT }}) {
          fieldValue
          totalCount
        }

      }
  }
`