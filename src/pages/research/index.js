import React from "react";
import {Link} from "gatsby";
import Layout from "../../components/layout";
import {StaticImage} from "gatsby-plugin-image";


// TODO: I think we should change this to dynamically create the links from gatsby nodes [ANH]
const Research = () => {
    return (
        <Layout name="Research">
            <section className="section">
            <h1>Research</h1>
                <div className="columns is-multiline">
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./groups">
                                <div className="card-image">
                                    <figure className="image">
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../content/research/images/projects.png"
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
                                </Link>
                            </div>
                        </div>
                      

                       
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./projects">
                                <div className="card-image">
                                   
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../content/research/images/projects.png"
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
                                </Link>
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./publications">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../content/research/images/projects.png"
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
                                </Link>
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./datasets">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../content/research/images/projects.png"
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
                                </Link>
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                            <Link to="./patents">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../content/research/images/projects.png"
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
                                </Link>
                            </div>
                        </div>
               
           
                </div>
                </section>
        </Layout>
    );
}

export default Research;