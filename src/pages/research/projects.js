import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import ProjectCard from "../../components/projectCard";
import TableCard from "../../components/tableCard";
import {startCase, camelCase} from 'lodash';
import TagSelector from "../../components/tagSelector";
import ParallelogramHeader from "../../components/parallelogramHeader";

// Active and completed sections
const sections = [
  { key: "active", title: "All Active Projects" },
  { key: "completed", title: "All Completed Projects" },
];

// Return structured content for table card
const firstColumn = (image) => (
  <>
    {image ? (
      <GatsbyImage alt="picture of project" image={image} />
    ) : (
      <StaticImage
        alt="default event picture as no event picture was specified"
        src="../../static/defaultevent.png"
      />
    )}
  </>
);

const secondColumn = (title, author, begin, end, grant, amount, link) => (
              <>
                <p className="title is-6">{title || "Name"} </p>
                <p className="is-3">{author}  </p>
                <p>{grant}</p>  
              </>
            );

const Project = ({pageContext}) => {
      const {
        breadcrumb: { crumbs },
      } = pageContext;

      const data = useStaticQuery(graphql`
      {
        active: allMarkdownRemark(
          filter: { fields: { category: { eq: "projects" } }, frontmatter: { status: { eq: "active" } } }
          sort: { frontmatter: { end: DESC } }
        ) {
          nodes {
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
            id
          }
        }

        completed: allMarkdownRemark(
          filter: { fields: { category: { eq: "projects" } }, frontmatter: { status: { eq: "complete" } } }
          sort: { frontmatter: { date: DESC } }
        ) {
          nodes {
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
            id
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
    `);

      return (
        <Layout name="Project" crumbs={crumbs}>
          <section className="section">
            <ParallelogramHeader
              text="Research Projects"
              backgroundColor="primary"
              textColor="white"
              className="mb-6"
            />
            <TagSelector
              data={data}
              filterTemplate={"/projectstags/"}
              root={`/research/projects`}
            />

            {sections.map((section) => (
              <>
                <div className="lowerPadding"></div>
                <h2 className="subtitle">{section.title}</h2>
                {data[section.key].nodes.map((projectentry) => (
                  <Link to={projectentry.frontmatter.link}>
                    <div
                      className="card-image row is-three-fifths pt-3"
                      key={projectentry.id}
                    >
                      <TableCard
                        first={firstColumn(
                          projectentry.frontmatter.image.childImageSharp
                            .gatsbyImageData
                        )}
                        second={secondColumn(
                          projectentry.frontmatter.title,
                          projectentry.frontmatter.author,
                          projectentry.frontmatter.begin,
                          projectentry.frontmatter.end,
                          projectentry.frontmatter.grant,
                          projectentry.frontmatter.amount,
                          projectentry.frontmatter.link
                        )}
                      />
                    </div>
                  </Link>
                ))}
              </>
            ))}
          </section>
        </Layout>
      );
}

export default Project;