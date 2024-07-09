import React from 'react';
import Layout from "../../../components/layout.js";
import "../../../style/bulmacustom.scss";

import aaspCASA from "./AASP_CASA.pdf";
import aaspEventdetOL from "./aasp_eventdet_OL_spec.pdf";
import aaspScenerec from "./aasp_scenerec_spec.pdf";

const SubmissionInstructionsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="IEEE AASP Challenge: Detection and Classification of Acoustic Scenes and Events" crumbs={crumbs}>
      <section className="section">
        <div className="content">
          <h1>
            <b>IEEE AASP Challenge:</b> <br />
            <em>Detection and Classification of Acoustic Scenes and Events</em>
          </h1>

          <br /> 
          <h1>Submission Instructions</h1>

          <h2>Basic Steps</h2>
          <ul>
            <li>Be sure to read the <b><a href={aaspCASA}>challenge proposal document</a></b></li>
            <li>Be sure to read the specifications for the tasks you will be participating (links below)</li>
            <li>Develop your system(s) using the <b><a href="../description">publicly available challenge datasets</a></b></li>
            <li>Write an extended abstract outlining what your submission is trying to accomplish (links below)</li>
            <li>Verify that your code works using the <b><a href="http://c4dm.eecs.qmul.ac.uk/rdr/handle/123456789/32">AASP Challenge Linux System Image</a></b> (for non-Matlab submissions)</li>
            <li>Submit your code and extended abstract using either <a href="mailto:aasp-challenge-owner@eecs.qmul.ac.uk">email</a> or via a download link by <b>31st March</b></li>
            <li>Present a poster at the challenge poster session at <a href="http://www.waspaa.com/">WASPAA 2013</a></li>
          </ul>

          <h2>Task Specifications</h2>

          <p><a href={aaspScenerec}>Scene Classification Specifications (pdf)</a></p>
          <p><a href={aaspEventdetOL}>Event Detection (Office Live) Specifications (pdf)</a></p>

          <h2>Extended Abstract Details</h2>

          <p>The extended abstracts provide the outside world with a general understanding of what each submission is trying to accomplish. The extended abstracts need NOT be cutting edge/never-before-published materials. Participants are encouraged to submit novel work as a regular paper at the <a href="http://www.waspaa.com/">WASPAA 2013</a> conference.</p>

          <p>The extended abstracts can be revised by the authors after the results have been announced. We will post the final versions of the extended abstracts in the challenge website. The challenge abstracts:</p>
          <ul>
            <li>Should be 2-3 pages long</li>
            <li>Must conform to the guidelines in the following templates: <a href="./AASP_challenge_LaTeX_template.zip">LaTeX template</a> &nbsp; <a href="./AASP_challenge_Word_template.zip">Word template</a></li>
            <li>Must be submitted in PDF format.</li>
            <li>Can include references to other publications about your work (if existing)</li>
          </ul>

          <br />
          <p><a href="../../sceneseventschallenge/">Back to main challenge page</a></p>
        </div>
      </section>
    </Layout>
  );
}

export default SubmissionInstructionsPage;
export const Head = () => <title>Submission Instructions | IEEE AASP Challenge</title>