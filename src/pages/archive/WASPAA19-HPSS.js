import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

// Import audio files
import estHarm42 from './WASPAA19-HPSS/audiofiles/estHarm42.wav';
import estHarm45 from './WASPAA19-HPSS/audiofiles/estHarm45.wav';
import estHarm47 from './WASPAA19-HPSS/audiofiles/estHarm47.wav';
import estHarm49 from './WASPAA19-HPSS/audiofiles/estHarm49.wav';
import estPerc42 from './WASPAA19-HPSS/audiofiles/estPerc42.wav';
import estPerc45 from './WASPAA19-HPSS/audiofiles/estPerc45.wav';
import estPerc47 from './WASPAA19-HPSS/audiofiles/estPerc47.wav';
import estPerc49 from './WASPAA19-HPSS/audiofiles/estPerc49.wav';
import mix42 from './WASPAA19-HPSS/audiofiles/mix42.wav';
import mix45 from './WASPAA19-HPSS/audiofiles/mix45.wav';
import mix47 from './WASPAA19-HPSS/audiofiles/mix47.wav';
import mix49 from './WASPAA19-HPSS/audiofiles/mix49.wav';

// Import image
import evalDrumsImage from './WASPAA19-HPSS/images/eval_drums.png';

const AudioPlayer = ({ src, title }) => (
  <div>
    <br /><b>{title}</b><br />
    <audio controls>
      <source src={src} type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

const WASPAA19HPSSPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="WASPAA 2019-HPSS" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="WASPAA 2019-HPSS" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <h2>Investigating Kernel Shapes and Skip Connections for Deep Learning-Based Harmonic-Percussive Separation</h2>

          <p><br />In this page you can have access to material related to the <a href="https://arxiv.org/abs/1905.01899">"Investigating Kernel Shapes and Skip Connections for Deep Learning-Based Harmonic-Percussive Separation"</a>,
            which is now under review for <a href="https://www.waspaa.com/">WASPAA 2019</a> conference.
          </p>

          <p>&nbsp;</p>

          <h2><strong>Audio Samples</strong></h2>

          <AudioPlayer title="Triviul feat. The Fiend - Widow" src={mix47} />
          <AudioPlayer title="Estimated Percussive" src={estPerc47} />
          <AudioPlayer title="Estimated Harmonic" src={estHarm47} />

          <AudioPlayer title="The Long Wait - Dark Horses" src={mix42} />
          <AudioPlayer title="Estimated Percussive" src={estPerc42} />
          <AudioPlayer title="Estimated Harmonic" src={estHarm42} />

          <AudioPlayer title="Zeno - Signs" src={mix49} />
          <AudioPlayer title="Estimated Percussive" src={estPerc49} />
          <AudioPlayer title="Estimated Harmonic" src={estHarm49} />

          <AudioPlayer title="Timboz - Pony" src={mix45} />
          <AudioPlayer title="Estimated Percussive" src={estPerc45} />
          <AudioPlayer title="Estimated Harmonic" src={estHarm45} />

          <h2><strong>Evaluation Images</strong></h2>
          <ul style={{lineHeight: "1.0"}}>
            <li>Comparison of percussive separation with results published in SiSEC 2018<br />
              <img src={evalDrumsImage} width="825" height="470" alt="Evaluation of drums" />
            </li>
          </ul>

          <p><strong><br /></strong></p>
        </div>
      </section>
    </Layout>
  );
}

export default WASPAA19HPSSPage;
export const Head = () => <title>WASPAA19-HPSS</title>