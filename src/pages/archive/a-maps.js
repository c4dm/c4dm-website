import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

const AMAPSPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="A-MAPS: Augmented MAPS Dataset with Rhythm and Key Annotations" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="A-MAPS Dataset" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <h1>A-MAPS: Augmented MAPS Dataset with Rhythm and Key Annotations</h1>

          <h2>
            Adrien Ycart and Emmanouil Benetos - <i>ISMIR 2018 Late Breaking Demo</i>
          </h2>

          <h3>Presentation</h3>

          <p>
            The MAPS dataset is the most used benchmark dataset for automatic music transcription (AMT).
            We propose here an updated version of the ground truth MIDI files, containing, on top of the original pitch, onset and offsets, beat, time signature, key signature annotations, <a href="#contents">and more</a>.
          </p>

          <p>
            If you use these annotations in a published research project, please cite:<br />
            Adrien Ycart and Emmanouil Benetos.
            "A-MAPS: Augmented MAPS Dataset with Rhythm and Key Annotations". In
            <i>19th International Society for Music Information Retrieval Conference Late Breaking and Demo Papers, </i>
            September 2018, Paris, France.
          </p>

          <p>
            The related publication is available <a href="http://www.eecs.qmul.ac.uk/~ay304/pdfs/ismir18-lbd.pdf">here</a>.
          </p>

          <h3>Download</h3>

          <p>
            The A-MAPS dataset can be downloaded <a href="https://zenodo.org/record/2590657">here</a>.
          </p>

          <h4><b>Version 1.2 (2019-03-11)</b></h4>

          <ul>
            <li>Add 3 missing MAPS files to the dataset: MAPS_MUS-chpn-e01_ENSTDkCl.mid, MAPS_MUS-chpn-e01_SptkBGAm.mid, MAPS_MUS-chpn-e01_StbgTGd2.mid. <span style={{color: "red"}}>WARNING: They correspond to the same piece as MAPS_MUS-chpn_op10_e01_AkPnCGdD.mid</span></li>
            <li>Tempo curve slightly edited to avoid unnatural tempo changes: see <a href="#tempo">here</a> for details</li>
          </ul>

          <h4><b>Version 1.1 (2018-09-19)</b></h4>

          <ul>
            <li><span style={{color: "red"}}>BUG FIXED:</span> In some files, the time signature, key signature and text annotations used to be incorrectly shifted by one quarter note. This is now fixed.</li>
            <li>Sustain pedal activations are now the same as in the MAPS dataset, they are all in the "Piano left" track.</li>
          </ul>

          <h3 id="contents">Contents</h3>

          <p>
            The A-MAPS dataset contains all the annotations that were present in the original
            MIDI files used to create the MAPS dataset.
            The original MIDI files were taken from <a href="http://piano-midi.de">piano-midi.de</a> (PM).
            The PM MIDI files were created to be as close to the score as possible:
            all the elements that appear on the score and can be written in MIDI files were reported,
            and all these elements were retrieved in the A-MAPS MIDI files.
            In particular, they contain:
          </p>

          <ul>
            <li>Tempo curve</li>
            <li>Time signature</li>
            <li>Durations of notes in fraction of a quarter note (some of them are approximate)</li>
            <li>Key signature (always written as the major relative)</li>
            <li>Sustain pedal activation: it can be found as MIDI Control Change #64</li>
            <li>Separate left and right hand staff: the left and right hand staff are two separate tracks.
            There might be more than two tracks, for instance when several voices were written on a single staff in the original score.</li>
            <li>Text annotations from the score (tempo indications, coda...): these were converted to "lyrics" messages so they can be parsed by most MIDI manipulation libraries (in particular, <a href="http://craffel.github.io/pretty-midi/">pretty_midi</a>)</li>
          </ul>
        <p>
            Yet, they do not include all the information needed for staff-notation music transcription,
            mostly due to limitations of the MIDI format. In particular, they do not include:
            <ul>
            <li>Pitch spelling: C# is the same as D♭</li>
            <li>Rhythm spelling: a quarter note tied to an eighth note is the same as a dotted quarter note</li>
            <li>Ornaments: trills are written as a succession of notes, not as a separate symbol</li>
            <li>Dynamics information: only the velocity of individual notes is available</li>
            <li>Short key modulations: only changes in key signature are written</li>
            </ul>
        </p>

        <h3>Lost Data</h3>

        <p>
            Some data was lost throughout the process.
            <ul>
            <li>One file was duplicated, we removed the duplicate: MAPS_MUS-chpn-p11-format0_AkPnCGdD.mid / MAPS_MUS-chpn-p11_AkPnCGdD.mid</li>
            <li>One piece actually contained two pieces, we kept only the first one (cut after 36.5 seconds): MAPS_MUS-scn15_5_SptkBGCl.mid</li>
            <li>For one piece, the alignment failed at some point. We only kept the first part where the alignment succeeded (cut after 209.75 seconds). This corresponds to 4 files:
                <ul>
                <li>MAPS_MUS-liz_et6_StbgTGd2.mid</li>
                <li>MAPS_MUS-liz_et6_ENSTDkCl.mid</li>
                <li>MAPS_MUS-liz_et6_AkPnCGdD.mid</li>
                <li>MAPS_MUS-liz_et6_AkPnBsdf.mid</li>
                </ul>
            </li>
            </ul>
            Overall, we lost around 8 minutes of data. This represents 0.7% of the original MAPS dataset.
        </p>

        <h3>Accuracy of the Annotations</h3>

        <h4>Comparison with MAPS</h4>

        <p>The A-MAPS dataset was made so that the pitches, onsets and offsets in seconds, and velocities of the notes
            are the same as in the MAPS dataset.
            They can be used interchangeably with the MAPS ground-truth MIDI files.
            The onsets and offsets of notes are all within 5ms of the original MAPS onsets and offsets.</p>
        <h4>Note values</h4>

        <p>
        In the MIDI protocol, the durations of notes are expressed in ticks.
        In the present dataset, 1 tick corresponds to a 480<sup>th</sup> of a quarter-note
        (not a 480<sup>th</sup> of a beat: if the meter is ternary, a beat corresponds to a dotted quarter-note, <i>i.e.</i> 720 ticks).
        Then, a tempo is set to specify the duration of a tick (in our case, the tempo varies throughout the pieces).
        </p>

        <p>
            In the original PM files, the durations of the notes in ticks corresponded exactly
            to the note values from the score (except for ornaments).
            However, because some onsets and offsets had to be adjusted to match exactly the MAPS durations,
            some note values in the A-MAPS MIDI files are not exact.
        </p>

        <p>
            To know how much of the notes have been shifted, we compare the onsets of notes in the original PM files and A-MAPS files.
            We match the notes of the two files with <a href="#thanks">this symbolic alignment algorithm</a>.
            For each pair of notes,
            we compute the deviation between their onsets in MIDI ticks.
            Then, for each file, we compute the mean and maximum deviations.
            The per-file mean and maximum deviations are reported in <a href="/ycart/data/delta_mean_max.csv">this file</a>.
            It has to be noted that the large maximum values recorded are most likely due to notes that were modified in later versions of the PM MIDI files, compared to the ones used in the MAPS files.
        </p>

        <h4>Staffs</h4>

        <p>
            The notes in the A-MAPS dataset were kept in the same staff (the same MIDI track) as they were
            in the PM files.
            When a note in present in the MAPS file but not in the PM file,
            we added it to the right hand staff if its pitch was above 60 (C4), to the left hand staff otherwise.
            This concerns around 2.7% of the notes.
        </p>

        <h4 id="tempo">Tempo curve</h4>

        <p>
            The tempo curve is computed based on the correspondence table, obtained from matchings between PM and MAPS notes, see Section 3 of the <a href="http://www.eecs.qmul.ac.uk/~ay304/pdfs/ismir18-lbd.pdf">article</a> for details.
            Following the notation of the article, the tempo value might be unnaturally high in the case where t2-t1 &lt;&lt; q2-q1 (this happens often when ornaments are written differently in PM and MAPS).
            From Version 1.2 onwards, we slightly edit the correspondence table to remove such cases and obtain a smoother tempo curve.
        </p>

        <p>
            We use the following criterion:
            <ul>
            <li>If the tempo between t1 and t2 is higher than 1.5 times what it was just before t1 and just after t2, or if it is lower than 0.66 times what it was just before t1 and just after t2, we consider the tempo deviation to be unnatural.</li>
            <li>We erase the tempo deviation by deleting one of the pairs (t1,q1) or (t2,q2). If one of q1 or q2 is not aligned to a metrical grid with a 96th note step, it is considered as an ornament and deleted.</li>
            </ul>
        </p>

        <p>
            In case both notes are aligned to the metrical grid, they are both kept, which means that there might still be some unnatural tempo jumps in the tempo curve.
            We decided to keep them; users can smooth them out if needed using a similar procedure as explained above.
        </p>

        <h4>Other annotations</h4>

        <p>
            All the other annotations were kept as they were in the original PM files.
            They were input manually by the creator of the PM database.
            They might contain mistakes, but they weren't checked in any way during the creation
            of the A-MAPS MIDI files.
        </p>

        <h3 id="thanks">Thanks</h3>

        <p>
            The A-MAPS dataset was created with the help of the symbolic alignment algorithm described in:<br />
            E. Nakamura, K. Yoshii, and H. Katayose. "Performance error detection and post-processing for fast and accurate symbolic music alignment". In <i>18th International Society for Music Information Retrieval Conference (ISMIR)</i>, 2017.<br />
            It also used the note matching method from the <a href="http://craffel.github.io/mir_eval/">mir_eval</a> Python library.
        </p>

        </div>
      </section>
    </Layout>
  );
}

export default AMAPSPage;
export const Head = () => <title>A-MAPS: Augmented MAPS Dataset with Rhythm and Key Annotations</title>