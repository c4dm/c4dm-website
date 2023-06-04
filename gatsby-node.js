const { graphql } = require("gatsby");
const path = require("path");
const _ = require("lodash")


exports.onCreateNode = async ({ node, actions }) => {
    const { createNodeField } = actions


    // Add a category field to all MarkdownRemark nodes
    const contentDir = path.resolve("./src/content");

    if (node.internal.type === "MarkdownRemark") {
        const category = path.dirname(
            path.relative(contentDir, node.fileAbsolutePath)
        )
    const fields = {
      category: category,
      slug:
        "/" +
        category +
        "/" +
        path.basename(node.fileAbsolutePath, ".md").replace("_", "-"),
    };

        for (const [name, value] of Object.entries(fields)) {
          createNodeField({ node, name, value });
        }
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const newsPostTemplate = path.resolve("./src/templates/newsPost.js");
    const projectPostTemplate = path.resolve("./src/templates/projectPost.js");
    const projectTagTemplate = path.resolve("src/templates/projectTags.js")
    const newsTagTemplate = path.resolve("src/templates/newsTags.js")
    const yearTemplate = path.resolve("src/templates/years.js")

    const result = await graphql(`
        {
            news: allMarkdownRemark ( filter: {fields: {category: {eq: "news"}}})
            {   
                nodes {
                    fields {
                        slug
                    }
                }
            }

            newsTagsGroup: allMarkdownRemark(
                filter: {fields: {category: {eq: "news"}}}
                limit: 2000) 
                {
                group(field: { frontmatter: { tags: SELECT }}) {
                  fieldValue
                }
            }

            projects: allMarkdownRemark ( filter: {fields: {category: {eq: "projects"}}})
            {
                nodes {
                    fields {
                        slug
                    }
                }
            }

            projectsTagsGroup: allMarkdownRemark(
                filter: { fields: { category: { eq: "projects" } }}
                limit: 2000) 
                {
                group(field: { frontmatter: { tags: SELECT }}) {
                  fieldValue
                }
            }

    
            yearsGroup: allReference(limit: 2000) {
                group(field:  { year: SELECT }) {
                  fieldValue
                }
            }
        }
    `);


    // Create news pages 
    result.data.news.nodes.forEach(node => {
        createPage({
            path: node.fields.slug,
            component: newsPostTemplate,
            context: {
                slug: node.fields.slug,
            },
        })
    })

    // Extract news tag data from query
    const newsTags = result.data.newsTagsGroup.group

    // Make one page for each tag (only tags inside news)
    newsTags.forEach(tag => {
    createPage({
      path: `/newstags/${_.kebabCase(tag.fieldValue)}/`,
      component: newsTagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
    })


    // Create project pages
    result.data.projects.nodes.forEach((node) => {
        createPage({
        path: node.fields.slug,
        component: projectPostTemplate,
        context: {
            slug: node.fields.slug,
        },
        });
    });

    // Extract project tag data from query
    const projectTags = result.data.projectsTagsGroup.group

    // Make one page for each tag (only tags inside projects)
    projectTags.forEach(tag => {
    createPage({
      path: `/projectstags/${_.kebabCase(tag.fieldValue)}/`,
      component: projectTagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
    })

    const years = result.data.yearsGroup.group

    // Make one page for each year (for publications)
    years.forEach(year => {
    createPage({
      path: `/years/${_.kebabCase(year.fieldValue)}/`,
      component: yearTemplate,
      context: {
        year: year.fieldValue,
      },
    })
    })

}

