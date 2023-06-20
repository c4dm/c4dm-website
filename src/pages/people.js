import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../components/layout";
import PeopleCard from "../components/peopleCard";
import {startCase, camelCase} from 'lodash';
import PeopleSelector from "../components/peopleSelector";
import ParallelogramHeader from "../components/parallelogramHeader";

// Keys for the elements of the table
const keys = ["name", "acadposition", "blurb"];

// Actual Titles for the table
const headingNames = ["Name", "Academic Position", "Description" ];

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
    `);

    // some of the students have no academic role, the markdown frontmatters need to be updated, removing role and putting them in academic position

    return (
      <Layout name="People" crumbs={crumbs}>
        <section className="section">
          <ParallelogramHeader
            text="People"
            backgroundColor="primary"
            textColor="white"
            className="mb-6"
          />
          <PeopleSelector
              data={data}
              filterTemplate={"/peopletags/"}
              root={`/people`}
            />
            <div className="lowerPadding"></div>
            {data.allMarkdownRemark.nodes.map((peopleentry) => (
              <Link to={peopleentry.frontmatter.url}>
                <div
                  class="card-image row is-three-fifths pt-3"
                  key={peopleentry.id}
                >
                <PeopleCard
                  headings={keys}
                  person={peopleentry.frontmatter}
                  name={peopleentry.frontmatter.name}
                  role={peopleentry.frontmatter.role}
                  topic={peopleentry.frontmatter.topic}
                  image={
                    peopleentry.frontmatter.image.childImageSharp
                      .gatsbyImageData
                  }
                />
                </div>
                </Link>
              ))}

            
            {/* <div className="container">
              <br></br>
              <h2 className="subtitle">
                {startCase(camelCase("All COMPLETED PROJECTS"))}
              </h2>
              <div class="card is-horizontal rows">
                {data.completed.nodes.map((projectentry) => (
                  <Link to={projectentry.frontmatter.link}>
                    <div
                      class="card-image row is-three-fifths pt-3"
                      key={projectentry.id}
                    >  */}
          {/* <table className="table has-sticky-header is-hoverable">
            <thead>
              <tr>
                {keys.map((key) => (
                  <th>{headings[key]}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.allMarkdownRemark.nodes.map((peopleentry) => (
                <PeopleCard
                  headings={keys}
                  person={peopleentry.frontmatter}
                  name={peopleentry.frontmatter.name}
                  role={peopleentry.frontmatter.role}
                  topic={peopleentry.frontmatter.topic}
                  image={
                    peopleentry.frontmatter.image.childImageSharp
                      .gatsbyImageData
                  }
                />
              ))}
            </tbody>
          </table> */}
        </section>
      </Layout>
    );
}

export default People;