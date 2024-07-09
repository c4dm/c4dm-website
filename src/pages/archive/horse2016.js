import React from 'react';
import Layout from "../../components/layout.js";
import ParallelogramHeader from "../../components/parallelogramHeader";
import "../../style/bulmacustom.scss";

// Import image
import horseLogo from './horse2016/horse2016_small.jpg';

// Import PDF files
import sturmSlidesPdf from './horse2016/HORSE2016_Sturm.pdf';

const HORSE2016Page = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  return (
    <Layout name="HORSE2016 - On 'Horses' and 'Potemkin Villages' in Applied Machine Learning" crumbs={crumbs}>
      <section className="section">
        <div className="column is-one-third">
          <ParallelogramHeader text="HORSE2016" backgroundColor="primary" textColor="white"/>
        </div>
        <div className="lowerPadding"></div>
        
        <div className="content">
          <a href={horseLogo}><img src={horseLogo} alt="HORSE2016 Logo" style={{margin: "0px", float: "none", maxWidth: "600px"}} /></a>
          <br />
          <br />

          <h1>HORSE2016</h1>
          <h2>On "Horses" and "Potemkin Villages" in Applied Machine Learning</h2>
          <p>Research workshop, QMUL, London<br />Monday 19 September 2016<br />Location: Arts Lecture Theatre (Arts 1, School of English and Drama, QMUL) <a href="https://www.google.co.uk/maps/place/School+of+English+and+Drama,+QMUL/@51.5240561,-0.0391431,18.26z/data=!4m5!3m4!1s0x48761d2fa1878e27:0xe67445c219a370a0!8m2!3d51.5240887!4d-0.0377986">map</a></p>
          <p><a href="https://www.youtube.com/channel/UCKazfHUF5QmT55EKT5Wem1Q">HORSE2016 YouTube Channel</a></p>

          <h3>What are "horses" and "Potemkin Villages"?</h3>
          <ul>
            <li>"As an intentional nod to Clever Hans, a 'horse' is just a system that is not actually addressing the problem it appears to be solving." (B. L. Sturm, "<a href="http://ieeexplore.ieee.org/xpl/articleDetails.jsp?tp=&arnumber=6847693">A simple method to determine if a music information retrieval system is a 'horse'</a>," IEEE Trans. Multimedia 16(6):1636–1644, 2014.)</li>
            <li>"[Our] results suggest that classifiers based on modern machine learning techniques ... are not learning the true underlying concepts that determine the correct output label. Instead, these algorithms have built a Potemkin village." (I. J. Goodfellow, J. Shlens, and C. Szegedy, "<a href="http://arxiv.org/abs/1412.6572">Explaining and harnessing adversarial examples</a>," in Proc. ICLR, 2015.)</li>
          </ul>

          <h3>About HORSE2016</h3>
          <p>HORSE2016 is a free one-day workshop (with free coffee & nibbles and a free lunch) that will explore issues surrounding "horses" and "Potemkin villages" in applied machine learning. One of the most famous "horses" is the "tank detector" of early neural networks research (<a href="https://neil.fraser.name/writing/tank">https://neil.fraser.name/writing/tank</a>): after great puzzlement over its success, the system was found to just be detecting sky conditions, which happened to be confounded with the ground truth. Humans can be "horses" as well, e.g., magicians and psychics. In contrast, machine learning does not deceive on purpose, but only makes do with what little information it is fed about a problem domain. The onus is thus on a researcher to demonstrate the sanity of the resulting model; but too often it seems evaluation of applied machine learning ends with a report of the number of correct answers produced by a system, and not with uncovering how a system is producing right or wrong answers in the first place.</p>

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
                <td className="tg-yw4l">9h30</td>
                <td className="tg-yw4l" colSpan="2">Coffee and nibbles<br /></td>
              </tr>
              <tr>
<td className="tg-yw4l">10h00</td>
<td className="tg-yw4l"><a href="http://www.eecs.qmul.ac.uk/~sturm/">Bob L. Sturm</a><br /></td>
<td className="tg-yw4l">Horse taxonomy and taxidermy <br /><a href="https://www.youtube.com/watch?v=qwnMjJpfhdY">video</a>, <a href={sturmSlidesPdf}>slides (pdf)</a></td>
              </tr>
              <tr>
                <td class="tg-yw4l">10h30</td>
                <td class="tg-yw4l"><a href="https://loughranroisin.wordpress.com/">Roisin Loughran</a><br /></td>
                <td class="tg-yw4l">When The Means Justifies the End: Why We Must Evaluate on More than Mere Output <br /><a href="https://www.youtube.com/watch?v=KNq8w6SfD0E">video</a>, <a href="HORSE2016_Loughran.pdf">slides</a></td>
            </tr>
            <tr>
                <td class="tg-yw4l">11h00</td>
                <td class="tg-yw4l"><a href="http://www.irccyn.ec-nantes.fr/~lagrange/">Mathieu Lagrange</a><br /></td>
                <td class="tg-yw4l">Computational experiments in Science: Horse wrangling in the digital age <br /><a href="https://www.youtube.com/watch?v=RUwXgMzhF_I">video</a>, <a href="HORSE2016_Lagrange.pdf">slides</a></td>
            </tr>
            <tr>
                <td class="tg-yw4l">11h30</td>
                <td class="tg-yw4l"><a href="http://www.eecs.qmul.ac.uk/~tmh/">Tim Hospedales</a><br /></td>
                <td class="tg-yw4l">Gated Neural Networks for Option Pricing: Enforcing Sanity in a Black Box Model <br /><a href="https://www.youtube.com/watch?v=pO3u2WngqZk">video</a>, <a href="HORSE2016_Hospedales.pdf">slides</a></td>
            </tr>
            <tr>
                <td class="tg-yw4l">12h00</td>
                <td class="tg-yw4l"><a href="http://www.eecs.qmul.ac.uk/people/view/4932">Geraint Wiggins</a><br /></td>
                <td class="tg-yw4l">Keynote: Trying to be accurate; or On the prevention of horses <br /><a href="https://www.youtube.com/watch?v=SYS4JTujD6g">video</a></td>
            </tr>
            <tr>
                <td class="tg-yw4l">13h00</td>
                <td class="tg-yw4l" colspan="2">Lunch</td>
            </tr>
            <tr>
                <td class="tg-yw4l">14h00</td>
                <td class="tg-yw4l"><a href="http://www.audioanalytic.com/portfolio/sacha-krstulovic/">Sacha Krstulovic</a></td>
                <td class="tg-yw4l">Avoiding deadly horses in Automatic Environmental Sound Recognition</td>
            </tr>
            <tr>
                <td class="tg-yw4l">14h30</td>
                <td class="tg-yw4l"><a href="http://qmul.academia.edu/FranciscoRodr%C3%ADguezAlgarra">Francisco Rodríguez-Algarra</a></td>
                <td class="tg-yw4l">You don't hear a thing... but my Horse knows it's Rock! <br /><a href="https://www.youtube.com/watch?v=K3OV0QWOVQQ">video</a>, <a href="HORSE2016_Rodriguez.pdf">slides</a></td>
            </tr>
            <tr>
                <td class="tg-yw4l">15h00</td>
                <td class="tg-yw4l"><a href="http://jeffclune.com/">Jeff Clune</a> (via skype)</td>
                <td class="tg-yw4l">How much do deep neural networks understand about the images they recognize? <br /><a href="https://www.youtube.com/watch?v=_QmSlzvVDbs">video</a>, <a href="HORSE2016_Clune.pdf">slides</a></td>
            </tr>
            <tr>
                <td class="tg-yw4l">15h30</td>
                <td class="tg-yw4l"><a href="http://www.homepages.ucl.ac.uk/~ucgtrbd/">Ricardo Silva</a></td>
                <td class="tg-yw4l">The role of causal inference in machine learning <br /><a href="https://www.youtube.com/watch?v=_AyR_Etihio">video</a>, <a href="HORSE2016_Silva.pdf">slides</a></td>
            </tr>
            <tr>
                <td class="tg-yw4l">16h00</td>
                <td class="tg-yw4l"><a href="http://research.google.com/pubs/IanGoodfellow.html">Ian Goodfellow</a> (via skype)<br /></td>
                <td class="tg-yw4l">Adversarial Examples and Adversarial Training <br /><a href="https://www.youtube.com/watch?v=f95EhYFmsj0">video</a>, <a href="HORSE2016_Goodfellow.pdf">slides</a></td>
            </tr>
            </tbody>
          </table>
            <h3>Funding</h3>
            <p>This event is funded with support from the EPSRC through the <a href="http://gow.epsrc.ac.uk/NGBOViewGrant.aspx?GrantRef=EP/K009559/1">Platform Grant on Digital Music</a> (EP/K009559/1), support from the AHRC through <a href="http://gtr.rcuk.ac.uk/projects?ref=AH/N504531/1">AH/N504531/1</a>, and is co-organised with the QMUL <a href="http://machinelearning.eecs.qmul.ac.uk">Applied Machine Learning Lab</a> and <a href="http://machine-listening.eecs.qmul.ac.uk/">Machine Listening Lab</a>.</p>

            <hr />

            <p><strong>CALL FOR CONTRIBUTIONS</strong></p>

            <i>Have you uncovered a “horse” in your domain?* Or perhaps discovered a “Potemkin village”?†</i><br /><br />

            <p>We invite presentations for this free one-day workshop (with free coffee & nibbles and a free lunch), which will explore issues surrounding “horses” and “Potemkin villages” in applied machine learning. One of the most famous “horses” is the “tank detector” of early neural networks research (<a href="https://neil.fraser.name/writing/tank">https://neil.fraser.name/writing/tank</a>): after great puzzlement over its success, the system was found to just be detecting sky conditions, which happened to be confounded with the ground truth. Humans can be “horses” as well, e.g., magicians and psychics. In contrast, machine learning does not deceive on purpose, but only makes do with what little information it is fed about a problem domain. The onus is thus on a researcher to demonstrate the sanity of the resulting model; but too often it seems evaluation of applied machine learning ends with a report of the number of correct answers produced by a system, and not with uncovering how a system is producing right or wrong answers in the first place.<br /><br />
            The day will feature a keynote lecture — and free coffee & nibbles and a free lunch — but we are looking for contributions to the day in the form of 20-minute talk/discussions about all things “horse” and "Potemkin village." We seek presentations from both academia and industry. Some of the deeper questions we hope to explore during the day are:<br /><br />
            - How can one know what their machine learnings have learned?<br />
            - How does one know if and when the internal model of a system are “sane”, or “sane enough”?<br />
            - Is a “general" model a “sane" model?<br />
            - When is a “horse" just overfitting? When is it not?<br />
            - When is it important to avoid “horses”? When is it not important?<br />
            - How can one detect a “horse” before sending it out into the real world?<br />
            - How can one make machine learning robust to “horses”?<br />
            - Are “horses” more harmful to academia or to industry?<br />
            - Is the pressure to publish fundamentally at odds with detecting “horses”?<br /><br />

            Please submit your proposals (one page max, or two pages if you have nice figures) by <b>July 1, 2016</b> to <a href="mailto:b.sturm@qmul.ac.uk?subject=On ‘horses', in memoriam Alan Young (1919-2016)">b.sturm@qmul.ac.uk</a>, subject line: “On ‘horses', in memoriam Alan Young (1919-2016)”.</p>

        </div>
      </section>
    </Layout>
  );
}

export default HORSE2016Page;
export const Head = () => <title>HORSE2016 - On "Horses" and "Potemkin Villages" in Applied Machine Learning</title>