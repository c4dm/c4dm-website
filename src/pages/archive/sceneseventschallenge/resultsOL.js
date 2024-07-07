
import React from 'react';
import Layout from "../../../components/layout.js";
import "../../../style/bulmacustom.scss";

import dcase_eusipco from "./DCASE_EUSIPCO13.pdf";
import dcase from "./DCASE_WASPAA13.pdf";
import aasp from "./aasp_eventdet_OL_spec.pdf";
import CPS from "./abstracts/OL/CPS.pdf";
import DHV from "./abstracts/OL/DHV.pdf";
import GVV from "./abstracts/OL/GVV.pdf";
import NR2 from "./abstracts/OL/NR2.pdf";
import NVM from "./abstracts/OL/NVM.pdf";
import SCS from "./abstracts/OL/SCS.pdf";
import VVK from "./abstracts/OL/VVK.pdf";

const EventDetectionOfficeLiveResultsPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="Event Detection - Office Live Results" crumbs={crumbs}>
      <section className="section">
        <div className="content">
          <h1>
            <b>IEEE AASP Challenge:</b> <br />
            <em>Detection and Classification of Acoustic Scenes and Events</em>
          </h1>

          <h1>Event Detection - Office Live Results</h1>

          <p>These are the results for the running of the Event Detection - Office Live subtask. For background information about this task set please refer to the <a href={aasp}>subtask specifications</a> and the <a href="../description">subtask datasets</a>. See also the <a href={dcase}>WASPAA 2013 paper</a> summarising the D-CASE challenge results and the <a href={dcase_eusipco}>EUSIPCO 2013 paper</a> describing the baseline systems.</p>

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
            <td>CPS</td>
            <td><a href={CPS}>PDF</a></td>
            <td>Sameer Chauhan, Sharang Phadke, Christian Sherland</td>
          </tr>
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
            <td>NR2</td>
            <td><a href={NR2}>PDF</a></td>
            <td>Waldo Nogueira, Gerard Roma, Perfecto Herrera</td>
          </tr>
          <tr>
            <td>NVM</td>
            <td><a href={NVM}>PDF</a></td>
            <td>Maria E. Niessen, Tim L. M. Van Kasteren, Andreas Merentitis</td>
          </tr>
          <tr>
            <td>SCS</td>
            <td><a href={SCS}>PDF</a></td>
            <td>Jens Schröder, Benjamin Cauchi, Marc René Schädler, Niko Moritz, Kamil Adiloglu, Jörn Anemüller, Simon Doclo, Birger Kollmeier, Stefan Goetze</td>
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
                <td>CPS</td>
                <td>3.82</td>
                <td>9.15</td>
                <td>3.05</td>
                <td>2.116</td>
              </tr>
              <tr>
            <td>DHV</td>
            <td>26.0</td>
            <td>19.84</td>
            <td>45.28</td>
            <td>3.128</td>
            </tr>
            <tr>
            <td>GVV</td>
            <td>31.94</td>
            <td>61.78</td>
            <td>22.29</td>
            <td>1.084</td>
            </tr>
            <tr>
            <td>NR2</td>
            <td>34.66</td>
            <td>37.15</td>
            <td>34.96</td>
            <td>1.885</td>
            </tr>
            <tr>
            <td>NVM_1</td>
            <td>40.85</td>
            <td>59.90</td>
            <td>32.90</td>
            <td>1.115</td>
            </tr>
            <tr>
            <td>NVM_2</td>
            <td>42.76</td>
            <td>61.15</td>
            <td>34.28</td>
            <td>1.102</td>
            </tr>
            <tr>
            <td>NVM_3</td>
            <td>45.50</td>
            <td>57.23</td>
            <td>38.80</td>
            <td>1.212</td>
            </tr>
            <tr>
            <td>NVM_4</td>
            <td>42.86</td>
            <td>50.79</td>
            <td>37.79</td>
            <td>1.360</td>
            </tr>
            <tr>
            <td>SCS_1</td>
            <td>53.02</td>
            <td>59.89</td>
            <td>48.28</td>
            <td>1.167</td>
            </tr>
            <tr>
            <td>SCS_2</td>
            <td>61.52</td>
            <td>66.18</td>
            <td>57.83</td>
            <td>1.016</td>
            </tr>
            <tr>
            <td>VVK</td>
            <td>43.42</td>
            <td>68.14</td>
            <td>32.60</td>
            <td>1.001</td>
            </tr>
            <tr>
            <td>Baseline</td>
            <td>10.72</td>
            <td>12.13</td>
            <td>10.56</td>
            <td>2.590</td>
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
                <td>CPS</td>
                <td>2.23</td>
                <td>3.21</td>
                <td>1.86</td>
                <td>1.65</td>
                <td>2.44</td>
                <td>1.34</td>
                <td>2.285</td>
                <td>2.301</td>
              </tr>
              <tr>
                <td>DHV</td>
                <td>26.67</td>
                <td>22.75</td>
                <td>33.46</td>
                <td>22.43</td>
                <td>19.08</td>
                <td>28.22</td>
                <td>2.519</td>
                <td>2.676</td>
                </tr>
                <tr>
                <td>GVV</td>
                <td>15.52</td>
                <td>61.82</td>
                <td>22.22</td>
                <td>13.46</td>
                <td>21.85</td>
                <td>12.89</td>
                <td>1.779</td>
                <td>1.831</td>
                </tr>
                <tr>
                <td>NR2</td>
                <td>19.21</td>
                <td>14.85</td>
                <td>27.66</td>
                <td>15.26</td>
                <td>11.79</td>
                <td>22.03</td>
                <td>3.076</td>
                <td>3.244</td>
                </tr>
                <tr>
                <td>NVM_1</td>
                <td>32.57</td>
                <td>33.91</td>
                <td>32.19</td>
                <td>24.95</td>
                <td>26.14</td>
                <td>24.50</td>
                <td>1.864</td>
                <td>2.095</td>
                </tr>
                <tr>
                <td>NVM_2</td>
                <td>34.16</td>
                <td>34.93</td>
                <td>34.17</td>
                <td>26.28</td>
                <td>27.11</td>
                <td>26.05</td>
                <td>1.852</td>
                <td>2.095</td>
                </tr>
                <tr>
                <td>NVM_3</td>
                <td>34.51</td>
                <td>36.13</td>
                <td>33.80</td>
                <td>27.01</td>
                <td>28.42</td>
                <td>26.31</td>
                <td>1.827</td>
                <td>2.052</td>
                </tr>
                <tr>
                <td>NVM_4</td>
                <td>30.47</td>
                <td>31.83</td>
                <td>30.07</td>
                <td>24.68</td>
                <td>25.95</td>
                <td>24.18</td>
                <td>1.906</td>
                <td>2.083</td>
                </tr>
                <tr>
                <td>SCS_1</td>
                <td>39.47</td>
                <td>41.72</td>
                <td>37.76</td>
                <td>36.74</td>
                <td>38.86</td>
                <td>35.12</td>
                <td>1.669</td>
                <td>1.749</td>
                </tr>
                <tr>
                <td>SCS_2</td>
                <td>45.17</td>
                <td>45.49</td>
                <td>45.38</td>
                <td>41.06</td>
                <td>41.43</td>
                <td>41.18</td>
                <td>1.601</td>
                <td>1.727</td>
                </tr>
                <tr>
                <td>VVK</td>
                <td>30.77</td>
                <td>31.31</td>
                <td>32.53</td>
                <td>25.40</td>
                <td>25.83</td>
                <td>26.86</td>
                <td>2.054</td>
                <td>2.224</td>
                </tr>
                <tr>
                <td>Baseline</td>
                <td>7.38</td>
                <td>4.82</td>
                <td>18.18</td>
                <td>1.58</td>
                <td>1.02</td>
                <td>4.17</td>
                <td>5.900</td>
                <td>6.318</td>
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
                <td>CPS</td>
                <td>0.65</td>
                <td>0.41</td>
                <td>2.16</td>
                <td>0.49</td>
                <td>0.32</td>
                <td>1.55</td>
                <td>1.872</td>
                <td>1.891</td>
              </tr>
              <tr>
                <td>DHV</td>
                <td>30.72</td>
                <td>30.99</td>
                <td>35.85</td>
                <td>25.29</td>
                <td>25.49</td>
                <td>29.58</td>
                <td>2.182</td>
                <td>2.370</td>
                </tr>
                <tr>
                <td>GVV</td>
                <td>13.21</td>
                <td>14.23</td>
                <td>13.80</td>
                <td>12.03</td>
                <td>13.24</td>
                <td>12.13</td>
                <td>1.556</td>
                <td>1.606</td>
                </tr>
                <tr>
                <td>NR2</td>
                <td>21.54</td>
                <td>20.86</td>
                <td>28.46</td>
                <td>17.64</td>
                <td>16.65</td>
                <td>23.34</td>
                <td>2.857</td>
                <td>3.010</td>
                </tr>
                <tr>
                <td>NVM_1</td>
                <td>29.37</td>
                <td>28.88</td>
                <td>34.23</td>
                <td>21.80</td>
                <td>21.26</td>
                <td>25.56</td>
                <td>1.639</td>
                <td>1.899</td>
                </tr>
                <tr>
                <td>NVM_2</td>
                <td>33.05</td>
                <td>33.07</td>
                <td>37.33</td>
                <td>24.88</td>
                <td>24.74</td>
                <td>28.14</td>
                <td>1.602</td>
                <td>1.877</td>
                </tr>
                <tr>
                <td>NVM_3</td>
                <td>33.52</td>
                <td>35.10</td>
                <td>36.61</td>
                <td>24.65</td>
                <td>25.29</td>
                <td>27.57</td>
                <td>1.575</td>
                <td>1.846</td>
                </tr>
                <tr>
                <td>NVM_4</td>
                <td>28.17</td>
                <td>30.16</td>
                <td>30.79</td>
                <td>21.62</td>
                <td>23.07</td>
                <td>24.15</td>
                <td>1.650</td>
                <td>1.849</td>
                </tr>
                <tr>
                <td>SCS_1</td>
                <td>36.33</td>
                <td>40.63</td>
                <td>39.56</td>
                <td>34.20</td>
                <td>38.80</td>
                <td>36.31</td>
                <td>1.579</td>
                <td>1.677</td>
                </tr>
                <tr>
                <td>SCS_2</td>
                <td>41.51</td>
                <td>43.44</td>
                <td>46.42</td>
                <td>38.32</td>
                <td>40.57</td>
                <td>41.94</td>
                <td>1.511</td>
                <td>1.646</td>
                </tr>
                <tr>
                <td>VVK</td>
                <td>24.55</td>
                <td>22.26</td>
                <td>33.00</td>
                <td>20.36</td>
                <td>18.76</td>
                <td>26.76</td>
                <td>1.762</td>
                <td>1.949</td>
                </tr>
                <tr>
                <td>Baseline</td>
                <td>9.00</td>
                <td>7.31</td>
                <td>21.65</td>
                <td>1.86</td>
                <td>1.36</td>
                <td>4.91</td>
                <td>5.960</td>
                <td>6.462</td>
                </tr>
            </tbody>
          </table>

          <br />
          <p><a href="../../sceneseventschallenge">Back to main challenge page</a></p>
        </div>
      </section>
    </Layout>
  );
}

export default EventDetectionOfficeLiveResultsPage;
export const Head = () => <title>Event Detection - Office Live Results | IEEE AASP Challenge</title>