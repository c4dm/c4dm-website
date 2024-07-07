import React from 'react';
import Layout from "../../../components/layout.js";
import "../../../style/bulmacustom.scss";
import eusipco from "./DCASE_EUSIPCO13.pdf";
import aasp from "./aasp_scenerec_spec.pdf";
import DHV from "./abstracts/OS/DHV.pdf";
import GVV from "./abstracts/OS/GVV.pdf";
import VVK from "./abstracts/OS/VVK.pdf";



const EventDetectionOfficeSyntheticResultsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="Event Detection - Office Synthetic Results" crumbs={crumbs}>
      <section className="section">
        <div className="content">
          <h1>
            <b>IEEE AASP Challenge:</b> <br />
            <em>Detection and Classification of Acoustic Scenes and Events</em>
          </h1>

          <h1>Event Detection - Office Synthetic Results</h1>

          <p>These are the results for the running of the Event Detection - Office Synthetic subtask. For background information about this task set please refer to the <a href={aasp}>subtask specifications</a> and the <a href="../description">subtask datasets</a>. See also the <a href="http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=7100934">IEEE TMM paper</a> summarising the D-CASE challenge results and the <a href={eusipco}>EUSIPCO 2013 paper</a> describing the baseline systems.</p>

          <h2>General Legend</h2>

          <table border="1" style={{textAlign: "left", width: "550px"}}>
            <thead>
              <tr>
                <th><strong>Code</strong></th>
                <th><strong>Abstract</strong></th>
                <th><strong>Participants</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DHV</td>
                <td><a href={DHV}>PDF</a></td>
                <td>Aleksandr Diment, Toni Heittola and Tuomas Virtanen</td>
              </tr>
              <tr>
                <td>GVV</td>
                <td><a href={GVV}>PDF</a></td>
                <td>Jort F. Gemmeke, Lode Vuegen, Bart Vanrumste, Hugo Van hamme</td>
              </tr>
              <tr>
                <td>VVK</td>
                <td><a href={VVK}>PDF</a></td>
                <td>Lode Vuegen, Bert Van Den Broeck, Peter Karsmakers, Jort F. Gemmeke, Bart Vanrumste, Hugo Van hamme</td>
              </tr>
            </tbody>
          </table>

          <h2>Frame-based Results</h2>

          <table border="1" style={{textAlign: "left"}}>
            <thead>
              <tr>
                <th></th>
                <th><strong>F (%)</strong></th>
                <th><strong>Pre (%)</strong></th>
                <th><strong>Rec (%)</strong></th>
                <th><strong>AEER</strong></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>DHV</td>
                <td>18.68</td>
                <td>13.64</td>
                <td>45.26</td>
                <td>7.980</td>
              </tr>
              <tr>
                <td>GVV</td>
                <td>21.28</td>
                <td>38.51</td>
                <td>15.23</td>
                <td>1.318</td>
              </tr>
              <tr>
                <td>VVK</td>
                <td>13.51</td>
                <td>22.55</td>
                <td>12.30</td>
                <td>1.888</td>
              </tr>
              <tr>
                <td>Baseline</td>
                <td>12.76</td>
                <td>14.39</td>
                <td>14.90</td>
                <td>2.804</td>
              </tr>
            </tbody>
          </table>

          <h2>Event-based Results</h2>

          <table border="1" style={{textAlign: "left"}}>
            <thead>
              <tr>
                <th></th>
                <th><strong>F (%)</strong></th>
                <th><strong>Pre (%)</strong></th>
                <th><strong>Rec (%)</strong></th>
                <th><strong>F_off (%)</strong></th>
                <th><strong>Pre_off (%)</strong></th>
                <th><strong>Rec_off (%)</strong></th>
                <th><strong>AEER</strong></th>
                <th><strong>AEER_off</strong></th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>DHV</td>
                <td>16.06</td>
                <td>12.37</td>
                <td>26.00</td>
                <td>11.12</td>
                <td>8.63</td>
                <td>17.71</td>
                <td>3.5157</td>
                <td>3.7643</td>
                </tr>
                <tr>
                <td>GVV</td>
                <td>17.00</td>
                <td>22.29</td>
                <td>14.22</td>
                <td>13.60</td>
                <td>18.00</td>
                <td>11.40</td>
                <td>1.681</td>
                <td>1.766</td>
                </tr>
                <tr>
                <td>VVK</td>
                <td>13.78</td>
                <td>20.93</td>
                <td>11.44</td>
                <td>9.16</td>
                <td>14.04</td>
                <td>7.61</td>
                <td>1.683</td>
                <td>1.798</td>
                </tr>
                <tr>
                <td>Baseline</td>
                <td>7.75</td>
                <td>4.92</td>
                <td>21.65</td>
                <td>0.57</td>
                <td>0.37</td>
                <td>1.36</td>
                <td>6.263</td>
                <td>6.871</td>
                </tr>
            </tbody>
          </table>

          <h2>Class-wise Event-based Results</h2>

          <table border="1" style={{textAlign: "left"}}>
            <thead>
              <tr>
                <th></th>
                <th><strong>F (%)</strong></th>
                <th><strong>Pre (%)</strong></th>
                <th><strong>Rec (%)</strong></th>
                <th><strong>F_off (%)</strong></th>
                <th><strong>Pre_off (%)</strong></th>
                <th><strong>Rec_off (%)</strong></th>
                <th><strong>AEER</strong></th>
                <th><strong>AEER_off</strong></th>
              </tr>
            </thead>
            <tbody>
            <tr>
                <td>DHV</td>
                <td>18.69</td>
                <td>17.18</td>
                <td>26.08</td>
                <td>12.18</td>
                <td>11.08</td>
                <td>17.68</td>
                <td>2.903</td>
                <td>3.155</td>
                </tr>
                <tr>
                <td>GVV</td>
                <td>14.16</td>
                <td>17.14</td>
                <td>14.26</td>
                <td>11.40</td>
                <td>13.55</td>
                <td>11.52</td>
                <td>1.216</td>
                <td>1.298</td>
                </tr>
                <tr>
                <td>VVK</td>
                <td>10.51</td>
                <td>12.31</td>
                <td>11.49</td>
                <td>7.48</td>
                <td>9.13</td>
                <td>7.69</td>
                <td>1.377</td>
                <td>1.491</td>
                </tr>
                <tr>
                <td>Baseline</td>
                <td>9.47</td>
                <td>7.09</td>
                <td>21.79</td>
                <td>0.33</td>
                <td>0.19</td>
                <td>1.34</td>
                <td>5.332</td>
                <td>5.945</td>
                </tr>
            </tbody>
          </table>

          <br />
          <p>Note: The original OS results published at the time of the challenge differ from the results published here due to a systematic fault affecting a subset of the labels in the original OS development and test datasets. This was found and fixed, and the three teams who submitted systems to the OS task were contacted and invited to revise their systems. The DHV system was re-trained on the corrected OS development data; the configurations of the other systems (GVV, VVK, and baseline) were not affected, and were left unchanged. All three systems were re-evaluated on the corrected test datasets to obtain the results here. The corrections to the data generally improved system performance, which is to be expected since they improved the correspondence between training and test.</p>

          <br />
          <p><a href="../../sceneseventschallenge">Back to main challenge page</a></p>
        </div>
      </section>
    </Layout>
  );
}

export default EventDetectionOfficeSyntheticResultsPage;
export const Head = () => <title>Event Detection - Office Synthetic Results | IEEE AASP Challenge</title>