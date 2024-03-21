import React, {useState, useCallback} from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import ParallelogramHeader from "../components/parallelogramHeader";
import TableCard from "../components/tableCard";
import TagSelector from "../components/tagSelector";
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";

const firstColumn = (image) => (
  <>
    {image ? (
      <GatsbyImage alt="picture of person" image={image.childImageSharp.gatsbyImageData} />
    ) : (
      <StaticImage
        alt="default picture as no picture was specified"
        src="../content/people/defaultprofile.png"
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
      {people: allMarkdownRemark(
          filter: { fields: { category: { eq: "people" } } }
          sort: { frontmatter: { role: ASC } }
        ) {
          nodes {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1)
                }
              }
              name
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
          limit: 20000
          filter: { fields: { category: { eq: "people" } } }
        ) {
          group(field: { frontmatter: { role: SELECT } }) {
            fieldValue
            totalCount
          }
        }
      }
    `);

const groups = data.people;

    const [filteredNodes, setFilteredNodes] = useState(data.people.nodes);

    const getFilteredNodes = useCallback(
      (nodes) => {
        setFilteredNodes(nodes);
      },
      [setFilteredNodes]
    );

    

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
          <TagSelector
              tags={data.allTags}
              nodes={data.people.nodes}
              callback={getFilteredNodes}
            />

            {filteredNodes.map((peopleentry,index) => {

              let heading;
              if (index === 0 || peopleentry.frontmatter.role !== filteredNodes[index-1].frontmatter.role) {
                heading = 
                <div>
                  <p className="title is-4 pt-5" >{peopleentry.frontmatter.role}</p>
                </div>;
              }
              return (
              <>
                {heading}
              <Link to={peopleentry.frontmatter.url}>
                <div
                  class="card-image row is-three-fifths pt-3"
                  key={peopleentry.id}
                >
                <TableCard 
                    first={firstColumn(peopleentry.frontmatter.image)} 
                    second={secondColumn(peopleentry.frontmatter.name, peopleentry.frontmatter.acadposition)} 
                    third={thirdColumn(peopleentry.frontmatter.blurb)} 
                />
                </div>
                </Link>
                </>
              )
              }
              )
              }

        </section>
      </Layout>
    );
}

export default People;