---
    title: "Coding/Compressiong"
    image: "patchbay_IMG_3989_0267.jpg"
---

## Object-based coding of audio

We developed an approach for audio coding using higher-level "sound objects", consisting of individual notes or chords played by particular instruments. While these models can be complex and time-consuming to calculate, we developed new efficient methods to learn these models faster than existing approaches. While full object-based coding of complex polyphonic audio scenes (such as a symphony orchestra) is still a long way off, this project is a first step towards this important long-term goal.

E. Vincent and M. D. Plumbley. Low bitrate object coding of musical audio using Bayesian harmonic models. IEEE Transactions on Audio, Speech and Language Processing, 15(4), 1273-1282, 2007.

*   [Further Information](objectcoding/index.html) including [Sound Examples](objectcoding/index.html#soundexamples)

## Hybrid coding for high quality audio

This project, funded by an EU Marie Curie fellowship, is primarily concerned with investigating compression techniques for high quality audio signals (i.e. CD-quality or better). Our approach decomposes the signal according to its different components: tonal part, transients and residual (stochastic part); and encode them separately. The model is additive, i.e. these components are present simultaneously at any time. Our decomposition criteria assumes the transients and tonal parts to have a compact representation in given orthogonal basis: the MDCT for the tonal part and the dyadic wavelets for the transients.

L. Daudet and M. Sandler, "MDCT analysis of sinusoids: exact results and applications to coding artifacts reduction," IEEE Trans. on Speech and Audio Processing, 12, 302-312, May 2004.

L. Daudet, "Transients modeling by pruned wavelet trees," in Proc. International Computer Music Conference (ICMC’01), Havana, 2001.

*   [Further information](http://www.elec.qmul.ac.uk/research/projects/marie_curie_audio_coding.html)

## Unsupervised learning of shift-invariant features in audio

This research aims to develop time-frequency representations able to extract basis functions from an audio signal which are independent from their original time position. Furthermore it attempts to find a sparse decomposition of audio mixtures into those basis functions. Possible applications include, audio coding, music onset detection, music transcription, source separation, audio restoration and noise reduction.

T. Blumensath and M. Davies, "Unsupervised learning of sparse and shift-invariant decompositions of polyphonic music.," in IEEE ICASSP’2004, Montreal, May 2004.

## High quality voice over packet networks

This research is concerned with the transmission of speech across packet switched networks (PSNs). It compresses the speech signal by using linear predictive coding. The crux of this method is an analysis filter which approximates the envelope of the current speech frame. This "short term prediction" filter is characterised by a set of prediction coefficients. The research undertaken aims at methods of compressing these coefficients and compensating for them in the event of the inevitable loss inherent to "best effort" approaches such as PSNs.

D. Black and M. Sandler, "Estimation of short term prediction parameters under lossy conditions," in Proc. of the IEEE ISSPIT, December 2003.

## Fast sparse coding for audio

Our research concentrates on the development of fast solutions for constructing overcomplete sparse sub-band decompositions. This is a generalisation of the perturbed basis pursuit problem, specifically applied to an overcomplete sub-band representation. Our formulations are generalisations of the iterative re-weighted least squares algorithm and can be given a probabilistic interpretation. To our knowledge this is the first set of algorithms that can achieve such sparsity for large data sizes (e.g. for whole pieces of music). We are exploring the benefits of such a representation for efficient coding of audio as well as looking at its potential for other signal processing problems such as source separation.

M. Davies and L. Daudet, "Sparsifying subband decompositions," in Proc. of the IEEE WASPAA03, 2003.

## Scalable audio coding

Our research in this area resulted in the development of a fine-grain scalable audio codec based on the MDCT and Embedded Zero Trees. The unique feature of this codec is that, after encoding, each coded audio frame can be tailored to any size, with an accuracy of one bit. This is because its internal representation is like a chain of bits, where the bits are in order of significance to the decoder. Thus the tail of the chain may be discarded, leaving a still-decodable head. This was subsequently commercialised by insonify integrating the codec into a complete scalable streaming solution, including server and clients.

B. Leslie and M.B. Sandler, "Joint source and channel coding for internet audio transmission," in Proc. of the AES 106th Convention, Munich, Germany, May 1999, Preprint No. 4932.

B. Leslie and M.B. Sandler, "Packet loss resilient, scalable audio compression and streaming for IP networks," in Proc. of the 2nd International Conference on 3G Mobile Communication Technologies, March 2001, pp. 119–123.