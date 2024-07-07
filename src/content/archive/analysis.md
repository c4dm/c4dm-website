---
    title: "Music / Audio Analysis"
---

# Music / Audio Analysis

## Event-based segmentation of music

This work is concerned with algorithms that compute sets of features from the frame-byframe analysis of the signal, and then detect abrupt changes in the trajectory of those features. Our research in this area has been primarily concerned with the detection of note onsets. Proposed methods include improvements to spectral difference approaches; methods based on the predictability of the phase information of the signal; and of features in the complex-domain; We have complemented our extensive work in the area with a comparative study of the different approaches to onset detection.

J.P Bello, C. Duxbury, M. Davies, and M. Sandler, "On the use of phase and energy for musical onset detection in the complex domain.," IEEE Signal Processing Letters, 2004, Accepted for publication.

J.P Bello, L. Daudet, S. Abdallah, C. Duxbury, M. Davies, and M. Sandler, "A tutorial on onset detection in music signals," Submitted for publication, 2004.

## Semantic segmentation of music

Our work in this area constructs and labels contiguous regions, such as instrumental sections, chorus, verse, or abstract "textures" with common statistical properties. Over short audio frames, pitchindependent spectral envelopes are estimated using MFCCs. An unsupervised HMM classifies the frames producing a labeled state sequence known as the "texture score". As a semantic tool, this score reveals much of the structure of a piece and has been applied to the problem of music information retrieval.

J.J Acoutourier and M. Sandler, "Segmentation of musical signals using hidden markov models," in Proc. of the 110th AES Convention, May 12-15, Amsterdam, 2001.

J.J Acoutourier and M. Sandler, "Using long-term structure to retrieve music: representation and matching," in Proc. of ISMIR 2001, Indiana, USA, 2001.

## Automatic music transcription

This research, within the context of the OMRAS project, is concerned with the problem of automatically decomposing musical signals into a scorelike representation. Apart from methods dealing with the analysis of monophonic signals, a number of methods were proposed for the analysis of simple polyphonic music including: blackboard systems combined with fuzzy logic or harmonic combs in the frequency domain; and a time-domain linear additive model using a self-generated dictionary of piano waveforms. A novel music information retrieval approach was proposed that compared harmonic contours created from our transcription systems and from a large database of polyphonic scores.

G. Monti and M. Sandler, "Pitch-locking monophonic music analysis," in Proc. of the AES 112th Convention, Munich, Germany, May 2002.

G. Monti and M. Sandler, "Automatic polyphonic piano note extraction using fuzzy logic in a blackboard system," in Proc. of DAFx-02, Hamburg, Germany, 2002.

J.P Bello, Towards the automated analysis of simple polyphonic music: A knowledge-based approach, Ph.D. thesis, University of London, 2003.

J. Pickens, J.P. Bello, T. Crawford, M. Dovey, G. Monti, M. Sandler, and D. Byrd, "Polyphonic score retrieval using polyphonic audio queries: A harmonic modelling approach," The Journal of New Music Research, vol. 32, no. 2, June 2003.

## Computational modeling of auditory perception using adaptive statistical models

The specification of these models draws on concepts from information theory, particularly the principle of redundancy reduction, whereby an analytic system must learn to detect structure in its input in order to be able to recode it in a non-redundant way. Techniques based on these ideas include independent component analysis (ICA) and its generalisations to noisy and/or non-negative data, which we have applied to audio and music signals. The latter application forms the basis of a proposed system for automatic polyphonic music transcription. It has also resulted in a novel approach to event detection based on assessing the "surprisingness" of a signal using an ICA-based model of expectation, after which the characteristic shapes of events are learned and detected by a HMM.

S. Abdallah and M. Plumbley, "An independent component analysis approach to automatic music transcription," in Proc. of the 114th Convention of Audio Engineering Society, Amsterdam, March 2003.

S. Abdallah and M. Plumbley, "Probability as metadata: Event detection in music using ICA as a conditional density model," in 4th Intl. Symp. on Independent Component Analysis and Signal Separation (ICA2003), Nara, Japan, 2003.

S. Abdallah and M. Plumbley, "Unsupervised onset detection: a probabilistic approach using ICA and a hidden Markov classifier," in Cambridge Music Processing Colloquium, Cambridge, UK, 2003.

## High-level semantic analysis of music

Under the framework of the EU-funded SIMAC project, we are currently investigating on the extraction of higher-level semantic descriptors from music signals including harmonic analysis of signals using chroma representations and frequency warping; rhythmic analysis based on the construct of probabilistic models for temporal expectation of rhythmic events; instrument identification based on probabilistic models; and the extraction of melodic contours from complex mixtures.