import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

// Import images
import badComparisonImage from './ycart/ismir19/bad_comparison.png';
import goodComparisonImage from './ycart/ismir19/good_comparison.png';

const ISMIR2019Page = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="Blending Acoustic and Language Model Predictions for Automatic Music Transcription" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="ISMIR 2019 Paper" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <h1>Blending Acoustic and Language Model Predictions for Automatic Music Transcription</h1>

          <h2>
            Adrien Ycart, Andrew McLeod, Emmanouil Benetos and Kazuyoshi Yoshii - <i>ISMIR 2019</i>
          </h2>

          <h3>Presentation</h3>

          <p>
            On this page can be found the supplementary material for:<br />
            Adrien Ycart, Andrew McLeod, Emmanouil Benetos and Kazuyoshi Yoshii.
            "Blending Acoustic and Language Model Predictions for Automatic Music Transcription"
            <i>20th International Society for Music Information Retrieval Conference (ISMIR), </i>
            November 2019, Delft, Netherlands.
          </p>

          <h3>Code</h3>

          <p>
            The code to reproduce the experiments presented in the paper can be found at this address:
            <a href="https://github.com/adrienycart/MLM_decoding"> https://github.com/adrienycart/MLM_decoding </a>
          </p>

          <p>
            The splits we used to train the acoustic model and language model are available here:
            <ul>
              <li><a href="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/split_MAPS.zip"> Acoustic model split </a></li>
              <li><a href="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/split_PM.zip"> Language model split </a></li>
            </ul>
          </p>

          <h3>Examples of results</h3>

          <p>
            Here, we propose selected examples to illustrate our model's performance: one where our model is successful, one where it fails.
            In both cases, we display a figure comparing:
            <ul>
              <li>The ground truth</li>
              <li>The transcription obtained by thresholding the posteriogram at 0.5</li>
              <li>The transcription obtained with HMM smoothing</li>
              <li>The transcription obtained with our system in PM+S configuration</li>
              <li>The posteriogram</li>
              <li>The predictions made by the language model</li>
            </ul>
          </p>

          <p>
            All comparisons are shown using a 16th-note timestep, hence the varying number of frames in both examples. The images can be displayed full size by using right-clicking the image and selecting "Open image in new tab".
          </p>

          <p>
            We also propose the ground truth, thresholded posteriogram, HMM-smoothed posteriogram and PM+S transcriptions converted to MIDI format (<a href="./ycart/ismir19/ismir19_examples_MIDI.zip"> download all MIDI files here</a>).
          </p>

          <h4>Successful example</h4>

          <img src={goodComparisonImage} alt="Good Comparison" width="2000" className="center" />
          <p>
            Here, our model manages to successfully detect the short notes around frame 250, while the other two baseline models do not.
            This is mostly due to our language model: the MLM predictions show that it is able to recognise that pattern of short, repeated notes.
          </p>

          <table>
            <tbody>
              <tr>
                <td>Ground truth:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/good_example_ground_truth.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
              <tr>
                <td>Baseline Kelz:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/good_example_baseline_quant.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
              <tr>
                <td>HMM:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/good_example_hmm_quant.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
              <tr>
                <td>PM+S:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/good_example_PM+S_quant.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
            </tbody>
          </table>

          <h4>Unsuccessful example</h4>

          <img src={badComparisonImage} alt="Bad Comparison" width="2000" className="center" />
          <p>
            Here, our model does not improve much compared to the other two baseline models.
            If anything, it over-fragments notes, (e.g. around frame 80), and even adds some false positives (e.g. around frame 160).
            We can see that the MLM predictions are very blurry, failing to predict any note with confidence.
          </p>

          <table>
            <tbody>
              <tr>
                <td>Ground truth:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/bad_example_ground_truth.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
              <tr>
                <td>Baseline Kelz:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/bad_example_baseline_quant.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
              <tr>
                <td>HMM:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/bad_example_hmm_quant.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
              <tr>
                <td>PM+S:</td>
                <td>
                  <audio controls>
                    <source src="http://c4dm.eecs.qmul.ac.uk/datasets/ycart/ismir19/bad_example_PM+S_quant.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}

export default ISMIR2019Page;
export const Head = () => <title>Blending Acoustic and Language Model Predictions for Automatic Music Transcription</title>