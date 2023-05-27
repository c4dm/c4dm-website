import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import BlogCard from "../../components/blogCard";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const Groups = () => {
    return (
        <Layout name="Groups">
            <section className="section">
            <h4>Research</h4>
                <div className="columns is-multiline">
                   
                        
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../content/research/images/projects.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">Research Groups </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                              
                            </div>
                        </div>

                       
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../content/research/images/projects.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">Projects </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                              
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../content/research/images/projects.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">Publications </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                              
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../content/research/images/projects.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">Datasets & Code </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                              
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../content/research/images/projects.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">Patents </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                              
                            </div>
                        </div>
               
           
                </div>
                </section>
        </Layout>
    );
}

export default Groups;