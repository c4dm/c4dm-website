import React from 'react';
import Layout from "../../components/layout.js";
import "../../style/bulmacustom.scss";

// Import images
import spsLogo from './sceneseventschallenge/SPS_logo_transparent.gif';
import dcasePoster from './sceneseventschallenge/dcaseposter.pdf';

const AASPChallengePage = ({ pageContext }) => {
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

          <h1>Results</h1>

          <p>The outcomes of the DCASE challenge are now fully described in the following open-access journal article:</p>

          <ul>
            <li>
              D. Stowell, D. Giannoulis, E. Benetos, M. Lagrange and M. D. Plumbley, <a href="http://dx.doi.org/10.1109/TMM.2015.2428998">Detection and Classification of Audio Scenes and Events</a>. IEEE Transactions on Multimedia 17(10), 1733-1746, 2015.
            </li>
          </ul>

          <p>Results pages:<br />
            <b><a href={dcasePoster}>D-CASE Overall Results Poster (PDF)</a></b> <br />
            <b><a href="./resultsSC">Scene Classification Results</a></b> <br />

            <b><a href="./resultsOL">Event Detection (Office Live) Results</a></b> <br />

            <b><a href="./resultsOS">Event Detection (Office Synthetic) Results</a></b>
          </p>

          <h1>Data and code</h1>

          <p><a href="./description">Publicly available challenge datasets</a></p>

          <p><a href="https://code.soundsoftware.ac.uk/projects/dcase2013submissions">Source code for some of the submitted systems</a></p>

          <p>Source code for the baseline systems: <a href="https://code.soundsoftware.ac.uk/projects/smacpy">scene recognition</a>; <a href="https://code.soundsoftware.ac.uk/projects/d-case-event">event detection</a></p>

          <h1>Introduction</h1>

          <p>We invite researchers in signal processing, machine learning and other fields to participate in our challenge, which consists of a set of related tasks on
          automatic detection and classification of <em>acoustic scenes</em> and <em>acoustic events</em>.</p>

          <p>The tasks fall into the field of <em>computational auditory scene analysis (CASA)</em>. Humans are able to follow specific sound sources in a complex audio environment with ease and the development of systems that try to mimic this behaviour is an open problem, especially in the case of overlapping sound events. </p>

            <p>The deadline for confirming participation to the challenge is <b>31st March 2013</b> (please send an email to <a href="mailto:aasp-challenge-owner@eecs.qmul.ac.uk">aasp-challenge-owner@eecs.qmul.ac.uk</a> with participant names/affiliations). The deadline for code submission is <b>14th April 2013</b>. </p>

            <p>Results will be presented at a special session in <a href="http://www.waspaa.com/" target="_blank" rel="noopener noreferrer">WASPAA 2013</a>; participants are invited to present a poster at a special session. Also, authors of novel work are encouraged to submit their work as a regular paper at WASPAA 2013.</p>

            <p>In order to participate in the discussion phase and to receive news about the challenge, please subscribe to the <b><a href="http://www.eecs.qmul.ac.uk/mailman/listinfo/aasp-challenge" target="_blank" rel="noopener noreferrer">aasp-challenge mailing list</a></b>.</p>

            <h1>Submission Instructions</h1>

            <h2>Basic Steps</h2>
            <ul>
                <li> Be sure to read the <b><a href="http://c4dm.eecs.qmul.ac.uk/sceneseventschallenge/EECSRR-13-01.pdf" target="_blank" rel="noopener noreferrer">technical report</a></b> explaining the challenge motivation, datasets, and metrics</li>
                <li> Be sure to read the specifications for the tasks you will be participating (links below)</li>
                <li> Develop your system(s) using the <b><a href="description.html" target="_blank" rel="noopener noreferrer">publicly available challenge datasets</a></b>. You can use the <a href="https://code.soundsoftware.ac.uk/projects/aasp-d-case-metrics" target="_blank" rel="noopener noreferrer">metrics functions</a> to test your system's performance.</li>
                <li> Write an extended abstract outlining what your submission is trying to accomplish (links below)</li>
                <li> Verify that your code works using the <b><a href="http://c4dm.eecs.qmul.ac.uk/rdr/handle/123456789/32" target="_blank" rel="noopener noreferrer">AASP Challenge Linux System Image</a></b> (for non-Matlab submissions)</li>
                <li> Confirm your participation to the challenge via <a href="mailto:aasp-challenge-owner@eecs.qmul.ac.uk">email</a> by <b>31st March</b></li>
                <li> Submit your code and extended abstract using either <a href="mailto:aasp-challenge-owner@eecs.qmul.ac.uk">email</a> or via a download link by <b>14th April</b></li>
                <li> Present a poster at the challenge poster session at <a href="http://www.waspaa.com/" target="_blank" rel="noopener noreferrer">WASPAA 2013</a></li>
            </ul>

            <h2>Task Specifications</h2>

            <a href="aasp_scenerec_spec.pdf" target="_blank" rel="noopener noreferrer">Scene Classification Specifications (pdf)</a> <br/>

            <a href="aasp_eventdet_OL_spec.pdf" target="_blank" rel="noopener noreferrer">Event Detection (Office Live) Specifications (pdf)</a> <br/>

            <a href="aasp_eventdet_OS_spec.pdf" target="_blank" rel="noopener noreferrer">Event Detection (Office Synthetic) Specifications (pdf)</a>

            <h2>Extended Abstract Details</h2>

            <p>The extended abstracts provide the outside world with a general understanding of what each submission is trying to accomplish. The extended abstracts need NOT be cutting edge/never-before-published materials. Participants are encouraged to submit novel work as a regular paper at the <a href="http://www.waspaa.com/" target="_blank" rel="noopener noreferrer">WASPAA 2013</a> conference.</p>

            <p>The extended abstracts can be revised by the authors after the results have been announced. We will post the final versions of the extended abstracts in the challenge website. The challenge abstracts:
                <ul>
                <li> Should be 2-3 pages long</li>
                <li> Must conform to the guidelines in the following templates: <a href="AASP_challenge_LaTeX_template.zip" target="_blank" rel="noopener noreferrer">LaTeX template</a> {' '} <a href="AASP_challenge_Word_template.zip" target="_blank" rel="noopener noreferrer">Word template</a></li>
                <li> Must be submitted in PDF format.</li>
                <li> Can include references to other publications about your work (if existing)</li>
                </ul>
            </p>


          <h1>Organisers</h1>

          <p>This challenge is organised by the <a href="../">Centre for Digital Music</a> and by <a href="http://anasynth.ircam.fr/">IRCAM</a>,
          under the auspices of the <a href="http://www.signalprocessingsociety.org/technical-committees/list/audio-tc/">Audio and Acoustic Signal Processing (AASP) technical committee</a> of the IEEE Signal Processing Society. Click <b><a href="http://c4dm.eecs.qmul.ac.uk/sceneseventschallenge/AASP_CASA.pdf">here</a></b> for the original challenge proposal document.</p>

          <p>The organisers,<br />
            <a href="http://www.eecs.qmul.ac.uk/~dimitrios/">Dimitrios Giannoulis</a> (QMUL), <a href="http://www.soi.city.ac.uk/~sbbj660/">Emmanouil Benetos</a> (City University London/QMUL), <a href="http://c4dm.eecs.qmul.ac.uk/people/dans.htm">Dan Stowell</a> (QMUL), Mathias Rossignol (IRCAM), <a href="http://anasynth.ircam.fr/home/people/mathieulagrange">Mathieu Lagrange</a> (IRCAM) and
            <a href="http://www.eecs.qmul.ac.uk/~markp/">Mark D. Plumbley</a> (QMUL)
          </p>

          <p><a href="http://www.signalprocessingsociety.org/technical-committees/list/audio-tc/aasp-challenges/">More on AASP challenges</a></p>
          
          <p>
            <a href="http://www.signalprocessingsociety.org">
              <img align="right" width="347" height="80" src={spsLogo} alt="SPS_logo" />
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default AASPChallengePage;
export const Head = () => <title>IEEE AASP Challenge: Detection and Classification of Acoustic Scenes and Events</title>