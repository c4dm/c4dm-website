import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import PeopleCard from "../components/peopleCard";

// Keys for the elements of the table
const keys = ["name", "url", "acadposition", "blurb", "themes", "role"];

// Actual Titles for the table
const headingNames = ["Name", "Link", "Academic Position", "Description", "Themes", "Role"];

var headings = {};
keys.forEach((key, i) => headings[key] = headingNames[i]);

// table is of format {
// "name": "Adán Benito", 
// "url": "", 
// "acadposition": "", 
// "blurb": "Beyond the fret: gesture analysis on fretted instruments and its applications to instrument augmentation", 
// "themes": [
// "augmi"
// ], 
// "role": "phd"
// }

const People = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
        allMarkdownRemark(
          filter: { fields: { category: { eq: "people" } } }
          sort: { frontmatter: { role: DESC } }
        ) {
          nodes {
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
            id
          }
        }
      }
    `);
    return (
        <Layout name="People" crumbs={crumbs}>
            <section className="section">
              <h1 className="title">People</h1>
              <table class="table has-sticky-header">
                <thead>
                  <tr>
                    {keys.map((key)=>(
                      <th>{headings[key]}</th>
                      )
                    )
                    }
                  </tr>
                </thead>
                <tbody>
                  {data.allMarkdownRemark.nodes.map((peopleentry) => (
                            <PeopleCard
                                headings = {keys}
                                person = {peopleentry.frontmatter}
                                name={peopleentry.frontmatter.name}
                                role={peopleentry.frontmatter.role}
                                topic={peopleentry.frontmatter.topic}
                                image={peopleentry.frontmatter.image.childImageSharp.gatsbyImageData}
                            />
                    )
                    )}
                </tbody>
              </table>
            </section>
        </Layout>
    );
}

export default People;