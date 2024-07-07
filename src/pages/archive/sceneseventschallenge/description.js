import React from 'react';
import Layout from "../../../components/layout.js";
import "../../../style/bulmacustom.scss";

const ChallengeDescriptionPage = ({ pageContext }) => {
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
          <h1>Challenge Description</h1>

          <p><b>NEW</b>: We have uploaded all of the data sets to the Internet Archive, INCLUDING the previously-unreleased private testing data. Available: <b><a href="https://archive.org/search.php?query=dcase&sort=titleSorter&and[]=firstTitle:I">DCASE Challenge Datasets</a></b></p>

          <p>For more detailed information on the challenges, please refer to the <b><a href="http://c4dm.eecs.qmul.ac.uk/sceneseventschallenge/AASP_CASA.pdf">proposal document</a></b>.<br /><br /></p>

          <p>Below you will find all tasks of the challenge with a short description, their specifications and some sample files. Please, bear in mind that as the tasks are currently in development the samples only serve to provide a first impression of how the tasks will sound like and they might not necessarily be similar to the final ones.</p>

          <h2>Scene Classification</h2>

          <p>The <em>scene classification</em> (SC) challenge will address the problem of identifying and classifying acoustic scenes and soundscapes.</p> 

          <p>The dataset for the scene classification task will consist of 30sec recordings of various acoustic scenes. The dataset will consist of 2 parts each made up of 6 audio recordings for each scene (class). The one will be sent out to the participants as a development set and the second will be kept secret and used for the train/test scene classification task. The list of scenes is: busy street, quiet street, Park, open-air market, bus, subway-train, restaurant, shop/supermarket, office, subway station.</p>

          <p>The recording device used for the task is a set of Soundman binaural microphones specifically made so that they imitate a pair of in-ear headphones that the user can wear. The proposed specifications for the recordings are: PCM, 44100 Hz, 16 bit (CD quality).</p>

          <p><a href="http://c4dm.eecs.qmul.ac.uk/rdr/handle/123456789/29">Public Dataset</a></p>
          <p><a href="https://archive.org/details/dcase2013_scene_classification_testset">Private Dataset</a></p>

          <br />
          <h2>Event Detection</h2>

          <p>The <em>event detection</em> challenge will address the problem of identifying individual sound events that are prominent in an acoustic scene. Two distinct experiments will take, one for simple acoustic scenes without overlapping sounds and the other using complex scenes in a polyphonic scenario. Three datasets will be used for the task.</p>

          <h3><b>Subtask 1 - OL</b></h3>

          <p>The first dataset for event detection will consist of 3 subsets (for development, training, and testing). The training set will contain instantiations of individual events for every class. The development and testing datasets, denoted as office live (OL), will consist of 1 min recordings of every-day audio events in a number of office environments . The audio events for these recordings will be annotated and they will include: door knock, door slam, speech, laughter, keyboard clicks, objects hitting table, keys clinging, phone ringing, turning page, cough, printer, short alert-beeping, clearing throat, mouse click, drawer, and switches.</p>

          <p><a href="http://c4dm.eecs.qmul.ac.uk/rdr/handle/123456789/28">Training dataset</a> (isolated events)</p>
          <p><a href="http://c4dm.eecs.qmul.ac.uk/rdr/handle/123456789/30">Development dataset</a> (event sequences)</p>
          <p><a href="https://archive.org/details/dcase2013_event_detection_testset_OL">Test dataset</a> (event sequences)</p>

          <h3><b>Subtask 2 - OS</b></h3>

          <p>The second dataset will contain artificially sequenced sounds provided by the Analysis-Synthesis team of IRCAM, termed Office Synthetic (OS). The training set will be identical to the one for the first dataset. The development and testing sets will consist of artificial scenes built by sequencing recordings of individual events (different recordings from the ones used for the training dataset) and background recordings provided by C4DM.</p>

          <p><a href="http://c4dm.eecs.qmul.ac.uk/rdr/handle/123456789/28">Training dataset</a> (isolated events)</p>
          <p><a href="https://archive.org/details/dcase2013_event_detection_development_OS">Development dataset</a> (event sequences)</p>
          <p><a href="https://archive.org/details/dcase2013_event_detection_testset_OS">Test dataset</a> (event sequences)</p>

          <br />
          <p><a href="../../sceneseventschallenge/">Back to main challenge page</a></p>
        </div>
      </section>
    </Layout>
  );
}

export default ChallengeDescriptionPage;
export const Head = () => <title>Challenge Description | IEEE AASP Challenge</title>