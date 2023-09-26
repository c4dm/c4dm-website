import React, { useState, useCallback } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Layout from "../../components/layout";
import TableCard from "../../components/tableCard";
import kebabCase from "lodash/kebabCase";
import ParallelogramHeader from "../../components/parallelogramHeader";
import TagSelector from "../../components/tagSelector";
import "../../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";

// Return structured content for table card


const Theses = ({ pageContext }) => {

  const data = useStaticQuery(graphql`
    query {
      
      about: markdownRemark(
        fields: { category: { eq: "about" } }
        fileAbsolutePath: { regex: "/theses.md/" }
      ) {
      html
      }
    
    }
  `);

  
  return (
    <Layout name="Theses" >
      <section className="section">
        <ParallelogramHeader
          text="PhD Theses"
          backgroundColor="primary"
          textColor="white"
          className="mb-6"
        />

        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: data.about.html }}
        ></div>
        
        <div className="lowerPadding"></div>



      </section>
    </Layout>
  );
};

export default Theses;
