import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

import slidesFile from './ismir15-amt-tutorial/AMT_tutorial_ISMIR_2015.pdf';

// Import audio files
import mozartPiano from './ismir15-amt-tutorial/MAPS_MUS-mz_331_3_ENSTDkCl.mp3';
import schumannKinderszenen from './ismir15-amt-tutorial/MAPS_MUS-scn15_7_SptkBGAm.mp3';
import mozartTrio from './ismir15-amt-tutorial/TRIOS-mozart-mix.mp3';
import nineInchNails from './ismir15-amt-tutorial/nine_inch_nails-good_soldier.mp3';

const ISMIRTutorialPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="ISMIR 2015 Tutorial - Automatic Music Transcription" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="ISMIR 2015 Tutorial - Automatic Music Transcription" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <p><br />Tutorial at the <a href="http://ismir2015.uma.es" target="_blank" rel="noopener noreferrer">16th International Society for Music Information Retrieval Conference (ISMIR 2015)</a><br />Monday 26 October 2015, Malaga, Spain<br /><br /><a href="http://www.ece.rochester.edu/~zduan/" target="_blank" rel="noopener noreferrer">Zhiyao Duan</a> (Rochester University)<br /><a href="http://www.eecs.qmul.ac.uk/~emmanouilb/" target="_blank" rel="noopener noreferrer">Emmanouil Benetos</a> (Queen Mary University of London)<br /><br /> <b><a href="http://ismir2015.uma.es/tutorialschedule.html#tutorial6" target="_blank" rel="noopener noreferrer">Tutorial abstract (ISMIR 2015 website)</a></b>
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
          <br /><br />
          </p>

          <p><strong><br /></strong></p>
        </div>
      </section>
    </Layout>
  );
}

export default ISMIRTutorialPage;
export const Head = () => <title>ISMIR 2015 Tutorial - Automatic Music Transcription</title>