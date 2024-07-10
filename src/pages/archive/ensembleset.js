import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

// Import audio files
import bbcsoExample from './ensembleset/BBCSO example.wav';
import singer1Ref from './ensembleset/SINGER1_REF.mp3';
import singer1Sep from './ensembleset/SINGER1_SEP.mp3';
import singer2Ref from './ensembleset/SINGER2_REF.mp3';
import singer2Sep from './ensembleset/SINGER2_SEP.mp3';
import singersMix from './ensembleset/SINGERS_MIX.mp3';
import violin1Ref from './ensembleset/VIOLIN1_REF.mp3';
import violin1Sep from './ensembleset/VIOLIN1_SEP.mp3';
import violin2Ref from './ensembleset/VIOLIN2_REF.mp3';
import violin2Sep from './ensembleset/VIOLIN2_SEP.mp3';
import violinsMix from './ensembleset/VIOLINS_MIX.mp3';

const AudioPlayer = ({ src, className, title }) => (
    <div className="audioBlock" style={{width: '100%'}}>
      <div className="titleBlock">{title}</div> {/* Separate div for title */}
      <div className="audioBlock"> {/* Separate div for audio player */}
        <audio className={className} controls>
          <source src={src} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );

const EnsembleSetPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="Music Ensemble Separation" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="Music Ensemble Separation" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <h2>Leveraging Synthetic Data for Improving Chamber Ensemble Separation</h2>

          <p>In this work, we tackle the challenging problem of separating monophonic instrument mixtures found in chamber music from monaural recordings. We present a pre-training strategy and data augmentation pipeline using the multi-mic renders from our synthetic chamber ensemble dataset <a href="https://zenodo.org/record/7327175">EnsembleSet</a> and evaluate its impact using real-world chamber ensemble recordings from the <a href="https://labsites.rochester.edu/air/projects/URMP.html">URMP Dataset</a>.</p>

            <p>Our data augmentation pipeline, using synthetic data, has resulted in up to a remarkable +5.14 dB cross-dataset performance improvement for time-domain separation models when tested on real data. Our fine-tuning strategy in conjunction with our data augmentation pipeline results in up to +10.62 dB performance improvement w.r.t. our baseline for chamber ensemble separation.</p>

            <p>We also show that pre-training our model with string, wind, and brass ensembles helps with separation of vocal harmony mixtures from Bach Chorales and Barbershop Quartet datasets with an average of +17.92 dB SI-SDR improvement for 2 source vocal harmony mixtures. In this page you can have access to the audio examples from all experiments presented in the below papers:</p>

            <ul>
            <li><a href="https://ismir2022program.ismir.net/poster_277.html">EnsembleSet: a new high quality synthesised dataset for chamber ensemble separation</a> by S. Sarkar, E. Benetos, and M. Sandler</li>
            <li><a href="https://qmro.qmul.ac.uk/xmlui/handle/123456789/89844">Leveraging synthetic data for improving chamber ensemble separation</a> by S. Sarkar, L. Thorpe, E. Benetos, and M. Sandler</li>
            </ul>

            <p><i>If you are having issues to play an audio sample, just wait little bit. All audio files have to be loaded before the browser allows you to play any of them. So, it can take a while sometimes.</i></p>

            <h3><strong>EnsembleSet Example</strong></h3>
            <p>This is an example of a complete ensemble render from our synthesised dataset <a href="https://zenodo.org/record/7327175">EnsembleSet</a>. This track is rendered using source MIDI data from the <a href="https://staff.aist.go.jp/m.goto/RWC-MDB/">RWC Music Database</a>, which was automatically post processed to add additional dynamics and playing style information using <a href="https://www.steinberg.net/dorico/">Dorico</a> and rendered using <a href="https://www.spitfireaudio.com/bbc-symphony-orchestra-professional">Spitfire Audio BBCSO plugin</a>.</p>


          <h3><strong>EnsembleSet Example</strong></h3>
          <p>This is an example of a complete ensemble render from our synthesised dataset <a href="https://zenodo.org/record/7327175">EnsembleSet</a>. This track is rendered using source MIDI data from the <a href="https://staff.aist.go.jp/m.goto/RWC-MDB/">RWC Music Database</a>, which was automatically post processed to add additional dynamics and playing style information using <a href="https://www.steinberg.net/dorico/">Dorico</a> and rendered using <a href="https://www.spitfireaudio.com/bbc-symphony-orchestra-professional">Spitfire Audio BBCSO plugin</a>.</p>
          
          <AudioPlayer src={bbcsoExample} className="audioRef" title="Mixture" />

          <h3><strong>Separation Examples</strong></h3>
          <p>Below you can find audio samples for the separated 2 source mixtures of chamber ensembles and their respective reference audio tracks. The estimates are calculated using Dual-path Transformer Network (DPTNet) that is pre-trained on <a href="https://zenodo.org/record/7327175">EnsembleSet</a> and then finetuned on the respective target datasets.</p>

          <h4>Monotimbral Separation</h4>
          <p>This is a separation example of a violin duet mixture from the URMP Dataset where both sources are of the same instrument. The model used was pretrained on EnsembleSet and finetuned using a single 3 min 45 sec track from URMP dataset (different from the test example). SI-SDR improvement: +18 dB</p>

          <AudioPlayer src={violinsMix} className="audioRef" title="Mixture" />

          <div className="methodRow">
            <AudioPlayer src={violin1Ref} className="audioOut" title="Violin 1 - Reference" />
            <AudioPlayer src={violin2Ref} className="audioOut" title="Violin 2 - Reference" />
          </div>

          <div className="methodRow">
            <AudioPlayer src={violin1Sep} className="audioOut" title="Violin 1 - DPTNet" />
            <AudioPlayer src={violin2Sep} className="audioOut" title="Violin 2 - DPTNet" />
          </div>

          <h4>Choral Separation</h4>

          <p>This is a separation example of a choral duet mixture from the Barbershop Quartet dataset where 2 of the 4 singers in the quartet are mixed. The model used was pretrained on EnsembleSet and finetuned using 9 min 34 sec of data from the Barbershop Quartet dataset (not including the test example). SI-SDR improvement: +24 dB</p>

          <AudioPlayer src={singersMix} className="audioRef" title="Mixture" />

          <div className="methodRow">
            <AudioPlayer src={singer1Ref} className="audioOut" title="Singer 1 - Reference" />
            <AudioPlayer src={singer2Ref} className="audioOut" title="Singer 2 - Reference" />
          </div>

          <div className="methodRow">
            <AudioPlayer src={singer1Sep} className="audioOut" title="Singer 1 - DPTNet" />
            <AudioPlayer src={singer2Sep} className="audioOut" title="Singer 2 - DPTNet" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default EnsembleSetPage;
export const Head = () => <title>Music Ensemble Separation</title>