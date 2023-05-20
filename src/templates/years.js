import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout";
import PublicationCard from "../components/publicationCard";

// Components
import { Link, graphql } from "gatsby"

const Years = ({ pageContext, data }) => {
  const { year } = pageContext
  const { edges, totalCount } = data.allReference
  const yearName = `${year}`

  return (
    <Layout name="PubYear">
    <section className="section">
      <h1 class="title">Publications for year  {yearName}</h1>
      <div class="card is-horizontal rows">
            {edges.map(({ node })  => {
                const { title } = node
                const { author } = node
                const { journal } = node
                const { conference } = node
                const { booktitle } = node
                const { year } = node
                
                
                return (
                  <div class="pt-3">

                    <PublicationCard
                      title={title} 
                      author={author} 
                      journal={journal}
                      conference={conference}
                      booktitle={booktitle}
                      year={year}
                    />
            
                  </div>
              
                )
                
                }
            )}
      </div> 
      </section>
    </Layout>
    
 
  )
}



export default Years

export const pageQuery = graphql`
  query($year: String) {
    allReference(
      limit: 2000
      sort: { year: DESC}
      filter: { year: { in: [$year]  } }
    ) {
      totalCount
      
      edges {
        node {
            title
            author
            journal
            booktitle
            year
        }
      }
    }
  }
`