import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader.js";
import "../../style/bulmacustom.scss";

import slidesFile from './nus-amt-tutorial/NUS_AMT_tutorial.pdf';

// Import audio files
import mozartPiano from './nus-amt-tutorial/MAPS_MUS-mz_331_3_ENSTDkCl.mp3';
import schumannKinderszenen from './nus-amt-tutorial/MAPS_MUS-scn15_7_SptkBGAm.mp3';
import mozartTrio from './nus-amt-tutorial/TRIOS-mozart-mix.mp3';
import nineInchNails from './nus-amt-tutorial/nine_inch_nails-good_soldier.mp3';

const NUSTutorialPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="NUS Tutorial - Automatic Music Transcription" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="NUS Tutorial - Automatic Music Transcription" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <p><br />Tutorial at the <a href="https://www.comp.nus.edu.sg/about/depts/cs/" target="_blank" rel="noopener noreferrer">Department of Computer Science, National University of Singapore</a><br /><a href="http://www.eecs.qmul.ac.uk/~emmanouilb/" target="_blank" rel="noopener noreferrer">Emmanouil Benetos</a>, Queen Mary University of London<br />19 January 2019, Singapore
          </p>

          <p>&nbsp;</p>

          <h2><strong>Tutorial Material</strong></h2>

          <p><b><a href={slidesFile} target="_blank" rel="noopener noreferrer">Slides (PDF)</a></b><br />
          <br /><b>Demo recordings</b>
          <ul style={{lineHeight: "1.0"}}>
            <li><a href={mozartPiano}>W.A. Mozart, Piano Sonata K.331, part 3 (MAPS database)</a></li>
            <li><a href={schumannKinderszenen}>R. Schumann, Kinderszenen, op. 15, no. 7 - Träumerei (MAPS database)</a></li>
            <li><a href={mozartTrio}>W.A. Mozart, Trio in E-flat major K.498, part 1 (TRIOS database)</a></li>
            <li><a href={nineInchNails}>Nine Inch Nails - The Good Soldier (QUASI database)</a></li>
          </ul>
          <br /><b><a href="https://www.sonicvisualiser.org/">Sonic Visualiser</a></b>
          <br /><br /><b><a href="https://code.soundsoftware.ac.uk/projects/silvet">Silvet Vamp Plugin</a></b>
          </p>

          <p><strong><br /></strong></p>
        </div>
      </section>
    </Layout>
  );
}

export default NUSTutorialPage;
export const Head = () => <title>NUS Tutorial - Automatic Music Transcription</title>