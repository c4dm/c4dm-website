/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `C4DM website`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: "./src/content",
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true, // useAutoGen: required 'true' to use autogen
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-remark-embed-video",
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 400, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
        loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
        urlOverrides: [
          {
            id: "youtube",
            embedURL: (videoId) =>
              `https://www.youtube-nocookie.com/embed/${videoId}`,
          },
        ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
        iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
      },
    },
    "gatsby-remark-responsive-iframe", //Optional: Must be loaded after gatsby-remark-embed-video
    "gatsby-plugin-twitter",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `documents`,
        path: `${__dirname}/src/content/publications`,
      },
    },
    "gatsby-transformer-bibtex",
    "gatsby-plugin-client-side-redirect" // keep it in last in list
  ],
};
