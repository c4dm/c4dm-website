import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import PeopleCard from "../components/peopleCard";
import {startCase, camelCase} from 'lodash';
import PeopleSelector from "../components/peopleSelector";
import ParallelogramHeader from "../components/parallelogramHeader";
import TableCard from "../components/tableCard";

// Keys for the elements of the table
const keys = ["name", "acadposition", "blurb"];

// Actual Titles for the table
const headingNames = ["Name", "Academic Position", "Description" ];

var headings = {};
keys.forEach((key, i) => headings[key] = headingNames[i]);


const firstColumn = (image) => (
  <>
    {image ? (
      <GatsbyImage alt="picture of event" image={image} />
    ) : (
      <StaticImage
        alt="default event picture as no event picture was specified"
        src="../../static/defaultevent.png"
      />
    )}
  </>
);

const secondColumn = (name, acadposition) => (          
                  <>
                    <p className="title is-4">{name || "Name"}</p>
                    <p className="subtitle is-7">{acadposition || "Academic Position"}</p>
                  </>
                );

const thirdColumn = (blurb) => (<p className="is-3">{blurb || "description"}  </p>);

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
                  gatsbyImageData(layout: FIXED, width: 128, aspectRatio: 1)
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
          filter: { fields: { category: { eq: "people" } } }
        ) {
          group(field: { frontmatter: { role: SELECT } }) {
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
                <TableCard 
                    first={firstColumn(peopleentry.frontmatter.image.childImageSharp.gatsbyImageData)} 
                    second={secondColumn(peopleentry.frontmatter.name, peopleentry.frontmatter.acadposition)} 
                    third={thirdColumn(peopleentry.frontmatter.blurb)} 
                />
                </div>
                </Link>
              ))}
        </section>
      </Layout>
    );
}

export default People;