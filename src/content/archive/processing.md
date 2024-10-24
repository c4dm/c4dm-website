---
    title: "Digital audio processing"
---

## TSS separation and applications

<!-- ![Image of audio processing researchers at work](images/LR_web_res/wide_IMG_3972_0250.jpg) -->

Our research in this area focuses on separating transient information from the timevarying steady state components of musical audio (TSS separation). It is based on phase-vocoder theory for signal segmentation, but with improvements related to the use of multiresolution analysis and adaptive thresholding. The idea was applied to audio processing techniques to enhance or decrease the strength of note attack information and to enhanced time-scaling implementations, where only steady state regions are stretched.

C. Duxbury, M. Davies, and M. Sandler, "Extraction of transient content in musical audio using multiresolution analysis techniques," in Proc. Digital Audio Effects Conference (DAFX,’01), 2001.

C. Duxbury, M. Davies, and M. Sandler, "Improved timescaling of musical audio using phase locking at transients," in Proc. AES 112th Convention, 2002.

## Audio source separation

The problem of separating sound objects recorded in a real room was examined using Independent Component Analysis (ICA). Real room recordings were modeled as convolutive mixtures of the auditory objects. A novel Fast Frequency Domain ICA framework was introduced, using two possible implementations. In addition we presented a robust Likelihood Ratio Jump solution to the permutation problem of ordering sources along the frequency axis. We also studied the ideas of exploiting the extra geometrical information, such as the microphone spacing, in order to perform permutation alignment using beam-forming; and of intelligent source separation of a desired source. Previous work on instrument recognition is combined with source separation, as an attempt to emulate human brain’s selectivity of sources. The problem of more sources than sensors was also addressed, using a 2-state Gaussian Mixture model for the case of instantaneous audio mixtures.

N. Mitianoudis and M. Davies, "Audio source separation of convolutive mixtures," Trans. Audio and Speech Processing, vol. 11, no. 5, pp. 489 –497, 2003.

N. Mitianoudis and M. Davies, "Using beamforming in the audio source separatation problem," in 7th ISSPA, Paris, France, 2003.

N. Mitianoudis and M. Davies, "Audio source separation: Problems and solutions," to appear in Int. Journal of Adaptive Control and Signal Processing, 2003.

## Wavelet signal processing

Our research has demonstrated two different ways to perform linear processing of 1-D signals in the wavelet domain. One method proceeds from a shift-invariant wavelet representation that is sparser than the undecimated wavelet transform. We called this first method the Wavelet Table Transform (WTT) filtering, and for realtime FIR filtering and delay on long signals, we devised a variant that overcomes block-end artefacts, and is called the Lapped Wavelet Table Transform (LWTT). The second method looks afresh at the problem and derives a matrix algebra solution. Surround sound: the overall impact of multichannel audio on audiences still remains unknown at the design stage, while objective assessment of the imaging imparted by holographic sound systems assume listening conditions that can be met exclusively in household installations, where the audience is usually located in a very restricted area and the acoustical properties of the room can be generally neglected. Our research focus on some of the challenges involved in predicting the spatial reproduction performance of surround sound systems serving large and acoustically live listening areas and highlights the shortcomings of current objective assessment methods.

D. Darlington, L. Daudet, and M. Sandler, "Linear signal processing in the wavelet domain," 2002.

C. Landone and M. Sandler, "Issues in performance prediction of surround systems in sound reinforcement applications," 1999.

C. Landone and M. Sandler, "Surround sound impact over large areas," 2003.

## Sigma delta modulation

This is a popular analogue to digital and digital to analogue converter that has seen widespread application, especially in audio. In collaboration with Philips Research Labs, we have devised improved schemes for compression of the output bitstream of a sigma delta modulator, and research continues into the dynamics of sigma delta modulators and related electronic devices. Further advancements have been achieved on the understanding of the effect of dither, and on the benefits of chaotic modulation. This work has contributed major theoretical advances in the field, and lead to superior designs for sigma delta modulators in commercial applications.

J. D. Reiss, D. Reefman, E. Janssen, and M. B. Sandler, "Improved compression of dsd for super audio cd," 2002.

J. D. Reiss and M. B. Sandler, "Dither and noise modulation in sigma delta modulators," 2003.

J. Reiss and M. B. Sandler, "The benefits of multibit chaotic sigma delta modulation," CHAOS, vol. 11, pp. 377–383, 2001.