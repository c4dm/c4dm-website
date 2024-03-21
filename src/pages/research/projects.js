import React, {useState, useCallback} from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import TableCard from "../../components/tableCard";
import TagSelector from "../../components/tagSelector";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";

// Create project card
const createProjectCard = (projectentry) => (
  <Link to={projectentry.frontmatter.link}>
    <div className="card-image row is-three-fifths pt-3" key={projectentry.id}>
      <TableCard
        first={firstColumn(
          projectentry.frontmatter.image.childImageSharp.gatsbyImageData
        )}
        second={projectInfo(
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
);

// Separate active and completed projects
const separateProjects = (projects) => {
  const active = [];
  const completed = [];
  projects.forEach((project) => {project.frontmatter.status === "active" ? active.push(createProjectCard(project)) : completed.push(createProjectCard(project))});

  return {active,completed};
}

// Return structured content for table card
const firstColumn = (image) => (
  <>
    {image ? (
      <GatsbyImage alt="picture of project" image={image} />
    ) : (
      <StaticImage
        alt="default event picture as no event picture was specified"
        src="../../../static/defaultevent.png"
      />
    )}
  </>
);

// Post the info from query into project card
const projectInfo = (title, author, begin, end, grant, amount, link) => (
              <>
                <p className="title is-6">{title || "Name"} </p>
                <p className="subtitle is-6">{begin}-{end}</p>
                <p className="is-3">{author}  </p>
                <br></br>
                <p className="subtitle is-6 has-text-grey-light">{grant}</p>  
                
              </>
            );

const Project = ({pageContext}) => {
      const {
        breadcrumb: { crumbs },
      } = pageContext;

      const data = useStaticQuery(graphql`
      {
        projects: allMarkdownRemark(
          filter: { fields: { category: { eq: "projects" } }}
          sort: { frontmatter: { begin: DESC } }
        ) {
          nodes {
            frontmatter {
              image {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED)
                }
              }
              status
              tags
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

    const [filteredProjects, setFilteredProjects] = useState(separateProjects(data.projects.nodes));

    const getFilteredNodes = useCallback((nodes) => {
      setFilteredProjects(separateProjects(nodes));
    }, [setFilteredProjects]);

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
            tags={data.allTags}
            nodes={data.projects.nodes}
            callback={getFilteredNodes}
          />
          {filteredProjects.active.length ? (
            <>
              <div className="lowerPadding"></div>
              <h2 className="subtitle">All Active Projects</h2>
              {filteredProjects.active}
            </>
          ) : undefined}

          {filteredProjects.completed.length ? (
            <>
              <div className="lowerPadding"></div>
              <h2 className="subtitle">All Completed Projects</h2>
              {filteredProjects.completed}
            </> ) : undefined}
            
        </section>
      </Layout>
    );
}

export default Project;