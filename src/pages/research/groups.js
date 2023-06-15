import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../../components/layout";
import BlogCard from "../../components/blogCard";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import ParallelogramHeader from "../../components/parallelogramHeader";

const Research = ({pageContext}) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
    return (
        <Layout name="Research" crumbs={crumbs}>
            <section className="section">
            <div className="lowerPadding">
            <div className="column is-one-third">
                <ParallelogramHeader text="Research Groups" backgroundColor="primary" textColor="white"/>
            </div>
            </div>
                <div className="columns is-multiline">
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="https://c4dm.eecs.qmul.ac.uk/audioengineering.html">
                                <div className="card-image">
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups1.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5">Audio Engineering </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>
                      

                       
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="http://instrumentslab.org/">
                                <div className="card-image">
                                   
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups2.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5">Augmented Instruments </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="https://c4dm.eecs.qmul.ac.uk/communicationacoustics.html">
                                <div className="card-image">
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups3.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5">Communication Acoustics</p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                                <Link to="http://music-cognition.eecs.qmul.ac.uk/">
                                <div className="card-image">
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups4.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5">Music Cognition </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                            <Link to="https://c4dm.eecs.qmul.ac.uk/musicinformatics.html">
                                <div className="card-image">
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups5.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5"> Music Informatics </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>

                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                            <Link to="http://machine-listening.eecs.qmul.ac.uk/">
                                <div className="card-image">
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups6.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5"> Machine Listening </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>

                         <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                            <Link to="http://isam.eecs.qmul.ac.uk/">
                                <div className="card-image">
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups7.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5"> Sonic Interaction Design </p>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                </Link>
                            </div>
                        </div>              
                        <div className="column is-one-quarter-desktop is-one-third-tablet is-full-mobile is-flex">
                            <div className="card is-flex is-flex-direction-column is-flex-grow-1">
                            <Link to="https://c4dm.eecs.qmul.ac.uk/soundsynthesis.html">
                                <div className="card-image">
                                    <figure className="image is-256x256">
                                        
                                        <StaticImage
                                            alt="default event picture as no event picture was specified"
                                            src="../../images/groups8.png"
                                        />
                                    </figure>
                                </div>

                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-content">
                                            <p className="title is-5"> Sound Synthesis </p>
                                            
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