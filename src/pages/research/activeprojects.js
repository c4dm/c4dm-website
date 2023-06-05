// import React from "react";
// import { graphql, Link, useStaticQuery } from "gatsby";
// import Layout from "../../components/layout";
// import ProjectCard from "../../components/projectCard";


// const Project = () => {
//     const data = useStaticQuery(graphql`
//       {
//         active: allMarkdownRemark(
//           filter: { fields: { category: { eq: "projects" } }, frontmatter: { status: { eq: "active" } } }
//           sort: { frontmatter: { date: DESC } }
//         ) {
//           nodes {
//             frontmatter {
//               image {
//                 childImageSharp {
//                   gatsbyImageData(layout: CONSTRAINED)
//                 }
//               }
//               title
//               author
//               date
//               grant
//               amount
//             }
//             id
//           }
//         }

        
//       }
//     `);

   

//     return (
     
//         <Layout name="Project">
//             <section className="section">


//               <div class="dropdown" >
//                 <button class="dropbtn has-dropdown" onclick="this.classList.toggle('is-active');">Dropdown</button>
//                 <div class="dropdown-content">
//                   <a href="#">Link 1</a>
//                   <a href="#">Link 2</a>
//                   <a href="#">Link 3</a>
//                 </div>
//               </div>

//               <h1>ACTIVE PROJECTS</h1>
//               <div class="card is-horizontal rows">
//                     {data.active.nodes.map((projectentry) => (
//                         <div class="card-image row is-three-fifths pt-3" key={projectentry.id}> 
//                             <ProjectCard
//                                 title={projectentry.frontmatter.title}
//                                 author={projectentry.frontmatter.author}
//                                 date={projectentry.frontmatter.date}
//                                 grant= {projectentry.frontmatter.grant}
//                                 amount={projectentry.frontmatter.amount}
//                                 image={projectentry.frontmatter.image.childImageSharp.gatsbyImageData}
//                             />
//                         </div>
//                     ))}
//                 </div>
                
//             </section>
//         </Layout>
//     );
// }

// export default Project;