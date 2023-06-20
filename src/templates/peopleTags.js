import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import ParallelogramHeader from "../components/parallelogramHeader";
import PeopleCard from "../components/peopleCard";
import {startCase, camelCase} from 'lodash';
import PeopleSelector from "../components/peopleSelector";
import { useStaticQuery, Link, graphql} from "gatsby";

// Keys for the elements of the table
const keys = ["name", "acadposition", "blurb"];

// Actual Titles for the table
const headingNames = ["Name", "Academic Position", "Description" ];

var headings = {};
keys.forEach((key, i) => headings[key] = headingNames[i]);


const PeopleTags = ({ pageContext, data }) => {

  
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
    <Layout name={startCase(camelCase(tagName))+ " People"} crumbs={crumbs}>
    <section className="section">
      <ParallelogramHeader
            text="People"
            backgroundColor="primary"
            textColor="white"
            className="mb-6"
          />
          <PeopleSelector
              data={data}
              // filterTemplate={"/peopletags/"}
              root={`/people`}
              selected={tag}
            />
            <div className="lowerPadding"></div>
            {console.log(edges)}
            {/* {edges} */}
            {edges.map(({ node })  => {   
              
                           
                return (
                // console.log(node)
                  // <div class="pt-3">
                  <Link to={node.frontmatter.url}>
                <div
                  class="card-image row is-three-fifths pt-3"
                  key={node.id}
                >
                <PeopleCard
                  headings={keys}
                  person={node.frontmatter}
                  name={node.frontmatter.name}
                  role={node.frontmatter.role}
                  topic={node.frontmatter.topic}
                  image={
                    node.frontmatter.image.childImageSharp
                      .gatsbyImageData
                  }
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

export default PeopleTags
export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { frontmatter: { date: DESC }}
      filter: { fields: { category: { eq: "people" } }, frontmatter: { role: { in: [$tag] } } }
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
            name
              role
              topic
              url
              acadposition
              blurb
              themes  
              role
          }
        }
      }
      
    }
  
  allTags: allMarkdownRemark(
      limit: 2000
      filter: { fields: { category: { eq: "people" } }}
      ) {
        group(field: { frontmatter: { role: SELECT }}) {
          fieldValue
          totalCount
        }

      }
  }
`