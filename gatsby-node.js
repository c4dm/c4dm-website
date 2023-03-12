const { graphql } = require("gatsby");
const path = require("path");


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
    const blogPostTemplate = path.resolve("./src/templates/blogPost.js");

    const result = await graphql(`
        {
            allMarkdownRemark ( filter: {fields: {category: {eq: "blog"}}})
            {   
                nodes {
                    fields {
                        slug
                    }
                }
            }
        }
    `);

    result.data.allMarkdownRemark.nodes.forEach(node => {
        createPage({
            path: node.fields.slug,
            component: blogPostTemplate,
            context: {
                slug: node.fields.slug,
            },
        })
    })
}