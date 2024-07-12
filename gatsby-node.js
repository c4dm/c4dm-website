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
    const { createRedirect } = actions
    const newsPostTemplate = path.resolve("./src/templates/newsPost.js");
    const projectPostTemplate = path.resolve("./src/templates/projectPost.js");
    const archivePostTemplate = path.resolve("./src/templates/archivePost.js");

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

            archive: allMarkdownRemark ( filter: {fields: {category: {eq: "archive"}}})
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
        })
    })

    // Create archive pages
    result.data.archive.nodes.forEach((node) => {
        createPage({
            path: node.fields.slug,
            component: archivePostTemplate,
            context: {
                slug: node.fields.slug,
            },
        })
    });

    // Define archive redirects
    const archivePages = [
        'auda-hpss', 'analysis', 'bssica', 'CBFdataset', 'ChoralSep', 'coding', 'education', 'engagement', 'events',
        'fellowships', 'm4m', 'people_past', 'phds', 'PhDStudentships', 'phdstudy', 'platform', 'processing',
        'projects_old', 'ProposedPhDTopics', 'seminars-historical', 'seminars', 'software_data', 'soundsynthesis',
        'study', 'WANCM_keynotes', 'WANCM_programme', 'WANCM', 'a-maps', 'ensembleset', 'horse2016', 'horse2017',
        'icassp18', 'ismir15-amt-tutorial', 'ismir17', 'ismir19', 'nus-amt-tutorial', 'sceneseventschallenge',
        'taslp19', 'taslp20', 'WASPAA19-HPSS'
    ]; 

    // Create redirects for archive pages
    archivePages.forEach((pageName) => {
        createRedirect({
            fromPath: `/${pageName}`,
            toPath: `/archive/${pageName}`,
            isPermanent: true,
            redirectInBrowser: true,
            statusCode: 301,
        });
    });

    // Define legacy redirects
    const legacyServer = 'http://c4dm-legacy.eecs.qmul.ac.uk'

    // Add more paths here for redirects
    // const legacyPages = ['smdmrd-test', 'rdr', 'semanticmedia', 'dmrn', 'soundscape', 'wiki', 'multitrack', 'dead', 'mirrors/omras2.org', 'preceedings', 'research/worldmusicoutliers', 'shapetones', 'datasets', '20thanniversary', 'auda-hpss', 'EnsembleSet']
    const legacyPages = ['smdmrd-test', 'rdr', 'semanticmedia', 'dmrn', 'soundscape', 'wiki', 'multitrack', 'dead', 'mirrors/omras2.org', 'preceedings', 'research/worldmusicoutliers', 'shapetones', 'datasets']

    // Create legacy redirects
    legacyPages.forEach((pageName) => {
        createRedirect({ fromPath: pageName, toPath: (legacyServer+"/"+pageName), statusCode: 200, isPermanent: true });
        // Handle wildcards
        createRedirect({ fromPath: (pageName+"/*"), toPath: (legacyServer+"/"+pageName), statusCode: 200, isPermanent: true });
        }
    );
    
    

}
