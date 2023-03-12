import * as React from "react"
import "../style/bulmacustom.scss"
import "@fortawesome/fontawesome-free/css/all.min.css";
import Layout from "../components/layout.js"


const IndexPage = () => {
  return (
    <Layout>
      <section className="section">
        <div className="container has-text-centered">
          <h1 className="title">Some welcoming widescreen content here!</h1>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage

export const Head = () => <title>Home Page</title>
