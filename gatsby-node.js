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

            projects: allMarkdownRemark ( filter: {fields: {category: {eq: "projects"}}})
            {
                nodes {
                    fields {
                        slug
                    }
                }
            }

            people: allMarkdownRemark ( filter: {fields: {category: {eq: "people"}}})
            {   
                nodes {
                    fields {
                        slug
                    }
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

}

