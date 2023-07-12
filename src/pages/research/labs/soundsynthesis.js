import React from "react";
import {graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../../components/layout";
import BlogCard from "../../../components/blogCard";
import ParallelogramHeader from "../../../components/parallelogramHeader";
import TableCard from "../../../components/tableCard";

// Functions to return strucutred content for table card
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


const Research = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext

  const data = useStaticQuery(graphql`
  {
    text: markdownRemark(
      fileAbsolutePath: {regex: "research/labs/communicationacoustics.md/"}
    ) {
      html
      frontmatter {
        title

      }
    }

    people: allMarkdownRemark(
      filter: {fields: {category: {eq: "people"}}, frontmatter: {themes: {eq: "soundsynthesis"}}}
    ) {
     
        nodes {
          id
          frontmatter {
            image {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, aspectRatio: 1)
              }
            }
            name
            role
            url
            acadposition
            blurb
            themes
            role
          }
        }
      
    }
    
  }
  `);

    return (
        <Layout name="AudioEng" crumbs={crumbs}>
            <section className="section">
            <div className="lowerPadding">
                <div className="column is-one-half">
                    <ParallelogramHeader text="Sound Synthesis Lab" backgroundColor="primary" textColor="white"/>
                </div>
            </div>
            <div 
             className="content"
             dangerouslySetInnerHTML={{ __html: data.text.html }}   
            >
        
            </div>
          
            {data.people.nodes.map((peopleentry) => (
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

export default Research;
