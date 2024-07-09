import React from 'react';
import Layout from "../../../components/layout.js";
import "../../../style/bulmacustom.scss";

// Import image
import dcaseEUSIOCO13 from './DCASE_EUSIPCO13.pdf';
import dcase from './DCASE_WASPAA13.pdf';
import aasp from './aasp_scenerec_spec.pdf';
import CHR from './abstracts/SC/CHR.pdf';
import ELF from './abstracts/SC/ELF.pdf';
import GSR from './abstracts/SC/GSR.pdf';
import KH from './abstracts/SC/KH.pdf';
import LTT from './abstracts/SC/LTT.pdf';
import NHL from './abstracts/SC/NHL.pdf';
import NR1 from './abstracts/SC/NR1.pdf';
import OE from './abstracts/SC/OE.pdf';
import PE from './abstracts/SC/PE.pdf';
import RG from './abstracts/SC/RG.pdf';
import RNH from './abstracts/SC/RNH.pdf';
import plotImage from './plot_dcase_scenerec_ci.png';

import CHR_1 from "./confusion_matrices/CHR-1.csv";
import CHR_2 from "./confusion_matrices/CHR-2.csv";
import ELFCSV from "./confusion_matrices/ELF.csv";
import GSRCSV from "./confusion_matrices/GSR.csv";
import KHCSV from "./confusion_matrices/KH.csv";
import LTT_1_old from "./confusion_matrices/LTT-1-old.csv";
import LTT_1 from "./confusion_matrices/LTT-1.csv";
import LTT_2_old from "./confusion_matrices/LTT-2-old.csv";
import LTT_2 from "./confusion_matrices/LTT-2.csv";
import LTT_3_old from "./confusion_matrices/LTT-3-old.csv";
import LTT_3 from "./confusion_matrices/LTT-3.csv";
import NHLCSV from "./confusion_matrices/NHL.csv";
import NR1_1 from "./confusion_matrices/NR1-1.csv";
import NR1_2 from "./confusion_matrices/NR1-2.csv";
import NR1_3 from "./confusion_matrices/NR1-3.csv";
import OECSV from "./confusion_matrices/OE.csv";
import PECSV from "./confusion_matrices/PE.csv";
import RGCSV from "./confusion_matrices/RG.csv";
import RNH_1 from "./confusion_matrices/RNH-1.csv";
import RNH_2 from "./confusion_matrices/RNH-2.csv";
import baseline from "./confusion_matrices/baseline.csv";

const SceneClassificationResultsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="Scene Classification Results" crumbs={crumbs}>
      <section className="section">
        <div className="content">
          <h1>
            <b>IEEE AASP Challenge:</b> <br />
            <em>Detection and Classification of Acoustic Scenes and Events</em>
          </h1>

          <h1>Scene Classification Results</h1>

          <p>These are the results for the running of the Scene Classification task. For background information about this task set please refer to the <a href={aasp}>subtask specifications</a> and the <a href="description.html">subtask datasets</a>. See also the <a href={dcase}>WASPAA 2013 paper</a> summarising the D-CASE challenge results and the <a href={dcaseEUSIOCO13}>EUSIPCO 2013 paper</a> describing the baseline systems.</p>

          <h2>General Legend</h2>

          <table border="1" style={{textAlign: "left", width: "500px"}}>
            <thead>
              <tr>
                <th><strong>Code</strong></th>
                <th><strong>Abstract</strong></th>
                <th><strong>Participants</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CHR</td>
                <td><a href={CHR}>PDF</a></td>
                <td>May Chum, Ariel Habshush, Abrar Rahman, Christopher Sang</td>
              </tr>
                <tr>
                <td>ELF</td>
                <td><a href={ELF}>PDF</a></td>
                <td>Benjamin Elizalde, Howard Lei, Gerald Friedland, Nils Peters</td>
                </tr>
                <tr>
                <td>GSR</td>
                <td><a href={GSR}>PDF</a></td>
                <td>J&#252;rgen T. Geiger, Bj&#246;rn Schuller, Gerhard Rigoll</td>
                </tr>
                <tr>
                <td>KH</td>
                <td><a href={KH}>PDF</a></td>
                <td>Johannes D. Krijnders, Gineke A. ten Holt</td>
                </tr>
                <tr>
                <td>LTT</td>
                <td><a href={LTT}>PDF</a></td>
                <td>David Li, Jason Tam, Derek Toub</td>
                </tr>
                <tr>
                <td>NHL</td>
                <td><a href={NHL}>PDF</a></td>
                <td>Juhan Nam, Ziwon Hyung, Kyogu Lee</td>
                </tr>
                <tr>
                <td>NR1</td>
                <td><a href={NR1}>PDF</a></td>
                <td>Waldo Nogueira, Gerard Roma, Perfecto Herrera</td>
                </tr>
                <tr>
                <td>OE</td>
                <td><a href={OE}>PDF</a></td>
                <td>Emanuele Olivetti</td>
                </tr>
                <tr>
                <td>PE</td>
                <td><a href={PE}>PDF</a></td>
                <td>Kailash Patil, Mounya Elhilali</td>
                </tr>
                <tr>
                <td>RG</td>
                <td><a href={RG}>PDF</a></td>
                <td>Alain Rakotomamonjy, Gilles Gasso</td>
                </tr>
                <tr>
                <td>RNH</td>
                <td><a href={RNH}>PDF</a></td>
                <td>Gerard Roma, Waldo Nogueira and Perfecto Herrera</td>
                </tr>
            </tbody>
          </table>

          <br />

          <h2>Results</h2>

            <table border="1" style={{textAlign: "left"}}>
            <thead>
                <tr>
                <th></th>
                <th><b>Accuracy (%)</b></th>
                <th><b>St.Dev.</b></th>
                <th><b>Confusion Matrix</b></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>CHR_1</td>
                <td>63.0</td>
                <td>7.3</td>
                <td><a href={CHR_1}>CSV</a></td>
                </tr>
                <tr>
                <td>CHR_2</td>
                <td>65.0</td>
                <td>6.9</td>
                <td><a href={CHR_2}>CSV</a></td>
                </tr>
                <tr>
                <td>ELF</td>
                <td>55.0</td>
                <td>3.1</td>
                <td><a href={ELFCSV}>CSV</a></td>
                </tr>
                <tr>
                <td>GSR</td>
                <td>69.0</td>
                <td>12.0</td>
                <td><a href={GSRCSV}>CSV</a></td>
                </tr>
                <tr>
                <td>KH</td>
                <td>55.0</td>
                <td>4.4</td>
                <td><a href={KHCSV}>CSV</a></td>
                </tr>
                <tr>
                <td>LTT_1</td>
                <td>72.0 (18.0)*</td>
                <td>8.4 (3.9)*</td>
                <td><a href={LTT_1}>CSV</a> (<a href={LTT_1_old}>old CSV</a>)*</td>
                </tr>
                <tr>
                <td>LTT_2</td>
                <td>70.0 (16.0)*</td>
                <td>7.9 (4.8)*</td>
                <td><a href={LTT_2}>CSV</a> (<a href={LTT_2_old}>old CSV</a>)*</td>
                </tr>
                <tr>
                <td>LTT_3</td>
                <td>67.0 (19.0)*</td>
                <td>5.7 (4.8)*</td>
                <td><a href={LTT_3}>CSV</a> (<a href={LTT_3_old}>old CSV</a>)*</td>
                </tr>
                <tr>
                <td>NHL</td>
                <td>60.0</td>
                <td>8.2</td>
                <td><a href={NHLCSV}>CSV</a></td>
                </tr>
                <tr>
                <td>NR1_1</td>
                <td>60.0</td>
                <td>10.3</td>
                <td><a href={NR1_1}>CSV</a></td>
                </tr>
                <tr>
                <td>NR1_2</td>
                <td>60.0</td>
                <td>8.7</td>
                <td><a href={NR1_2}>CSV</a></td>
                </tr>
                <tr>
                <td>NR1_3</td>
                <td>59.0</td>
                <td>12.2</td>
                <td><a href={NR1_3}>CSV</a></td>
                </tr>
                <tr>
                <td>OE</td>
                <td>17.0</td>
                <td>2.4</td>
                <td><a href={OECSV}>CSV</a></td>
                </tr>
                <tr>
                <td>PE</td>
                <td>58.0</td>
                <td>9.0</td>
                <td><a href={PECSV}>CSV</a></td>
                </tr>
                <tr>
                <td>RG</td>
                <td>69.0</td>
                <td>7.8</td>
                <td><a href={RGCSV}>CSV</a></td>
                </tr>
                <tr>
                <td>RNH_1</td>
                <td>71.0</td>
                <td>7.2</td>
                <td><a href={RNH_1}>CSV</a></td>
                </tr>
                <tr>
                <td>RNH_2</td>
                <td>76.0</td>
                <td>7.2</td>
                <td><a href={RNH_2}>CSV</a></td>
                </tr>
                <tr>
                <td>Baseline</td>
                <td>55.0</td>
                <td>10.0</td>
                <td><a href={baseline}>CSV</a></td>
                </tr>
            </tbody>
            </table>
          <p><b>*</b>: Original LTT submission achieved low accuracy due to a bug in a Matlab toolbox - original results are presented in brackets.</p>

          <br />
          <img src={plotImage} width="85%" height="85%" alt="" /><br />
          <b>Figure</b>: Classification accuracy(%) for the SC task. Plot shows mean over 5-fold cross-validation with 95% confidence intervals. Dashed lines indicate (left to right): chance performance (black); baseline system performance (light blue); mean accuracy of human listener (orange). "Majority vote" is a meta-classifier using the majority decision over all submissions. Original LTT submissions shown in light gray.

          <p>
            <br />
            <strong>Confusion matrix legend</strong> (for CSV files):

            <table border="1" style={{textAlign: "left"}}>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>bus</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>busystreet</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>office</td>
                    </tr>
                    <tr>
                    <td>4</td>
                    <td>openairmarket</td>
                    </tr>
                    <tr>
                    <td>5</td>
                    <td>park</td>
                    </tr>
                    <tr>
                    <td>6</td>
                    <td>quietstreet</td>
                    </tr>
                    <tr>
                    <td>7</td>
                    <td>restaurant</td>
                    </tr>
                    <tr>
                    <td>8</td>
                    <td>supermarket</td>
                    </tr>
                    <tr>
                    <td>9</td>
                    <td>tube</td>
                    </tr>
                    <tr>
                    <td>10</td>
                    <td>tubestation</td>
                    </tr>
              </tbody>
            </table>
          </p>

          <br />
          <p><a href="../../sceneseventschallenge">Back to main challenge page</a></p>
        </div>
      </section>
    </Layout>
  );
}

export default SceneClassificationResultsPage;
export const Head = () => <title>Scene Classification Results | IEEE AASP Challenge</title>