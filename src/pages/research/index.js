import React from "react";
import {Link} from "gatsby";
import Layout from "../../components/layout";
import {StaticImage} from "gatsby-plugin-image";
import ParallelogramHeader from "../../components/parallelogramHeader";

// THIS IS A HOT MESS!!!! THE CARDS SHOULD BE ABSTRACTED AS COMPONENTS AND IMAGES SHOULD BE IMPORTED THROUGH GRAPHQL AND NOT STATICALLY [Sebastian]

// TODO: I think we should change this to dynamically create the links from gatsby nodes [ANH]
const Research = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    return (
        <Layout name="Research" crumbs={crumbs}>
            <section className="section ">
            
            <ParallelogramHeader text="Research" backgroundColor="primary" textColor="white"/>

<div className="lowerPadding"> </div>
           
            <div className="columns is-flex">
                        <div className="column is-one-third">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./labs">
                                <div className="card-image is-256x256">
                                    <figure className="image ">
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups.png"
                                        />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-4">Research Labs </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>
                      

                       
                        <div className="column is-one-third is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./projects">
                                <div className="card-image is-256x256">
                                   
                                    <figure className="image ">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/projects.png"
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

                        <div className="column is-one-third is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./publications">
                                <div className="card-image is-256x256">
                                    <figure className="image ">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/publications.png"
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
                </div>
                        <div className="columns is-flex">

                        <div className="column is-one-third is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="./datasets">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/code.png"
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

                        <div className="column is-one-third is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                            <Link to="./patents">
                                <div className="card-image">
                                    <figure className="image">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/patents.png"                                        />
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