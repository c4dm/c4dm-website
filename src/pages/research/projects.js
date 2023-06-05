import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import ProjectCard from "../../components/projectCard";
// import kebabCase from "lodash/kebabCase"
import {startCase, camelCase, kebabCase} from 'lodash';
import TagSelector from "../../components/tagSelector";

const Project = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    const data = useStaticQuery(graphql`
      {
        active: allMarkdownRemark(
          filter: { fields: { category: { eq: "projects" } }, frontmatter: { status: { eq: "active" } } }
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
              <h1>Research Projects</h1>
              <TagSelector
                data = {data}
                filterTemplate = {'/projectstags/'}
                root ={`/research/projects`}
              />
              <h1>{startCase(camelCase("All ACTIVE PROJECTS"))}</h1>
              <div class="card is-horizontal rows">
                    {data.active.nodes.map((projectentry) => (
                       <Link to={projectentry.frontmatter.link}>
                        <div class="card-image row is-three-fifths pt-3" key={projectentry.id}> 
                            <ProjectCard
                                title={projectentry.frontmatter.title}
                                author={projectentry.frontmatter.author}
                                begin={projectentry.frontmatter.begin}
                                end={projectentry.frontmatter.end}
                                grant= {projectentry.frontmatter.grant}
                                amount={projectentry.frontmatter.amount}
                                image={projectentry.frontmatter.image.childImageSharp.gatsbyImageData}
                            />
                        </div>
                        </Link>
                    ))}
                </div>
               
                <h1 class="pt-5">{startCase(camelCase("All COMPLETED PROJECTS"))}</h1>
              <div class="card is-horizontal rows">
                    {data.completed.nodes.map((projectentry) => (
                        <Link to={projectentry.frontmatter.link}>
                        <div class="card-image row is-three-fifths pt-3" key={projectentry.id}> 
                            <ProjectCard
                                title={projectentry.frontmatter.title}
                                author={projectentry.frontmatter.author}
                                begin={projectentry.frontmatter.begin}
                                end={projectentry.frontmatter.end}
                                grant= {projectentry.frontmatter.grant}
                                amount={projectentry.frontmatter.amount}
                                image={projectentry.frontmatter.image.childImageSharp.gatsbyImageData}
                            />
                        </div>
                        </Link>

                    ))}
                </div>
            </section>
        </Layout>
    );
}

export default Project;