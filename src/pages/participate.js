import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout"
import ContactForm from "../components/contactForm";



const Participate = () => {
    const data = useStaticQuery(graphql`
    {
        markdownRemark(fields: {category: {eq: "participate"}}) {
            id
            html
            frontmatter {
            title
            image {
                childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
                }
            }
            }
        }
    }`) 
                          
    return (
        <Layout name="Participate">
            <section className="section">
                <div className="columns">
                    <div className="column is-one-third">
                        <GatsbyImage 
                            alt="Image about participating in the project"
                            image={data.markdownRemark.frontmatter.image.childImageSharp.gatsbyImageData}
                        />
                    </div>
                    <div className="column is-two-thirds">
                        <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
                        <div className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
                    </div>
                </div>
            </section>
            <hr/>
            <section className="section">
                <ContactForm/>
            </section>
        </Layout>
    )
}

export default Participate