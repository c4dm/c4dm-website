import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

// Import image
import horseLogo from './horse2017/horse2017_small.png';

// Import PDF files
import introSlides from './horse2017/HORSE2017_Introduction.pdf';
import stowellSlides from './horse2017/HORSE2017_Stowell.pdf';

const HORSE2017Page = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="HORSE2017 - On 'Horses' in Applied Machine Learning" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="HORSE2017" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <a href={horseLogo}><img src={horseLogo} alt="HORSE2017 Logo" style={{margin: "0px", float: "none", maxWidth: "600px"}} /></a>
          <br />
          <br />

          <h1>HORSE2017</h1>
          <h2>On "Horses" in Applied Machine Learning</h2>
          <p>Research workshop, QMUL, London<br />Wednesday 20 September 2017, 9h00-17h
          <br />Location: Arts One Lecture Theatre, QMUL, London E1 4NS
          </p>

          <h3>What are "horses"?</h3>
          <p>"As an intentional nod to Clever Hans, a 'horse' is just a system that is not actually addressing the problem it appears to be solving." (B. L. Sturm, "<a href="http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6847693">A simple method to determine if a music information retrieval system is a 'horse'</a>," IEEE Trans. Multimedia 16(6):1636–1644, 2014. <a href="https://signalprocessingsociety.org/publications-resources/ieee-transactions-multimedia/multimedia-prize-paper-award">Winner of the 2017 IEEE Transactions on Multimedia Prize Paper Award</a>)</p>

          <h3>About HORSE2017</h3>
          <p>HORSE 2017 is a one-day workshop exploring issues surrounding "horses" in applied machine learning. <a href="http://c4dm.eecs.qmul.ac.uk/horse2016/">Last year's edition</a> was a great success, and we aim to top it this year.</p>

          <p>The keynote of HORSE 2017 will be delivered by:
          <a href="http://www.imperial.ac.uk/people/d.j.hand">Prof David J. Hand</a></p>

          <p>Free for speakers, and a minimal amount (£5) for others.</p>
          <p>The day includes lunch and coffee.</p>
          <p><s>10 free tickets are available for students: <a href="mailto:b.sturm@qmul.ac.uk">email</a> to nominate yourself for a free ticket.</s></p>

          <h3>Schedule</h3>
          <table className="tg">
            <thead>
              <tr>
                <th className="tg-yw4l">Time</th>
                <th className="tg-yw4l">Speaker</th>
                <th className="tg-yw4l">Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tg-yw4l">9h00</td>
                <td className="tg-yw4l" colSpan="2">Coffee<br /></td>
              </tr>
              <tr>
                <td className="tg-yw4l">9h45</td>
                <td className="tg-yw4l" colSpan="2">Welcome (<a href={introSlides}>slides</a>)</td>
              </tr>
              <tr>
                <td className="tg-yw4l">10h00</td>
                <td className="tg-yw4l"><a href="http://www.mcld.co.uk/">Dan Stowell</a><br /></td>
                <td className="tg-yw4l">Reducing confounding factors in automatic acoustic recognition of individual birds<br /> (<a href="https://youtu.be/ivWeuuRsoYg">video</a>,<a href={stowellSlides}>slides</a>)</td>
              </tr>
              {/* Add more rows for each speaker */}
            </tbody>
          </table>

          <h3>Funding</h3>
          <p>This event is funded with support from the AHRC project <a href="http://gtr.rcuk.ac.uk/projects?ref=AH/N504531/1">DaCaRyH</a> (AH/N504531/1), RAEng Research Fellowship RF/128, EPSRC Research Fellowship EP/L020505/1, and is co-organised with the QMUL 
          <a href="http://machine-listening.eecs.qmul.ac.uk/">Machine Listening Lab</a>.</p>

          <hr />

          <h3>Call for contributions</h3>
          <p>Have you uncovered a "horse" in your domain?</p>

          <p>We invite presentations exploring issues surrounding "horses" in applied machine learning. One of the most famous "horses" is the "tank detector" of early neural networks research (<a href="https://neil.fraser.name/writing/tank">https://neil.fraser.name/writing/tank</a>): after great puzzlement over its success, the system was found to just be detecting sky conditions, which happened to be confounded with the ground truth. Humans can be "horses" as well, e.g., magicians and psychics. In contrast, machine learning does not deceive on purpose, but only makes do with what little information it is fed about a problem domain. The onus is thus on a researcher to demonstrate the sanity of the resulting model; but too often it seems evaluation of applied machine learning ends with a report of the number of correct answers produced by a system, and not with uncovering how a system is producing right or wrong answers in the first place.</p>

          <p>We are looking for contributions to the day in the form of 20-minute talk/discussions about all things "horse". We seek presentations from both academia and industry. Some of the deeper questions we hope to explore during the day are:</p>

          <ul>
            <li>How can one know what their machine learnings have learned?</li>
            <li>How does one know if and when the internal model of a system are "sane", or "sane enough"?</li>
            <li>Is a "general" model a "sane" model?</li>
            <li>When is a "horse" just overfitting? When is it not?</li>
            <li>When is it important to avoid "horses"? When is it not important?</li>
            <li>How can one detect a "horse" before sending it out into the real world?</li>
            <li>How can one make machine learning robust to "horses"?</li>
            <li>Are "horses" more harmful to academia or to industry?</li>
            <li>Is the pressure to publish fundamentally at odds with detecting "horses"?</li>
          </ul>

          <p>Please submit your proposals (one page max, or two pages if you have nice figures) by July 15, 2017 to <a href="mailto:b.sturm@qmul.ac.uk">b.sturm@qmul.ac.uk</a>. Notification will be made July 25, 2017. Registration will then be opened soon after.</p>
        </div>
      </section>
    </Layout>
  );
}

export default HORSE2017Page;
export const Head = () => <title>HORSE2017 - On "Horses" in Applied Machine Learning</title>