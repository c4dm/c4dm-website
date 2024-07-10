---
    title: AUDA-HPSS
---

## Adversarial Unsupervised Domain Adaptation for Harmonic-Percussive Source Separation

In this page you can have access to extra information related to the paper

C. Lordelo, E. Benetos, S. Dixon, S. Ahlbäck and P. Ohlsson, _"Adversarial Unsupervised Domain Adaptation for Harmonic-Percussive Source Separation"_ in IEEE Signal Processing Letters, vol. 28, pp. 81-85, 2021.

*   Manuscript can be downloaded [here](https://arxiv.org/pdf/2101.00701.pdf)
*   Original publication (with supplementary document) [here](https://ieeexplore.ieee.org/document/9298783)

### **Datasets**

In our experiments we used two datasets:

*   [MUSDB18 Dataset](https://zenodo.org/record/1117372#.X4QiVNAzaUk) as domain **𝒜**;
*   [Tap & Fiddle Dataset](http://doi.org/10.5281/zenodo.4308731) as domain **ℬ**.

### **Evaluation Images**

Detailed evaluation metrics can be seen in the images below.

*   Boxplot of metrics over the "MUSDB18 Dataset" (ordered by percussive SDR)
    
    ![](images/EvalMusdb_final.png)
    
*   Boxplot of metrics over the "Tap & Fiddle Dataset" (ordered by percussive SDR)
    
    ![](images/EvalFoot_final.png)
    

### **Audio Samples**

Below you can find audio samples for the estimated harmonic and percussive audio tracks of each tested method. The name of the methods follows the name presented in the paper.  

However, apart from the methods in the paper we included two extra methods for the separation here. The Median filtering HPSS \[1\] and HPSS by low/high-pass filtering, where the percussive source is estimated by using a Butterworth low-pass filter of order 8 and cutoff frequency of 200 Hz and the harmonic source is the output of the mixture signal filtered by a Butterworth high-pass filter of order 8 and cutoff frequency 250 Hz  

_\- If you are having issues to play an audio sample, just wait little bit. All audio files have to be loaded before the browser allows you to play any of them. So, it can take a while sometimes._

\[1\] "Harmonic/Percussive Separation Using Median Filtering" by Fitzgerald, D. in _International Conference on Digital Audio Effects (DAFx)_ Sep (2010)

### Example 1 - Domain **𝒜**:

### Mixture
<audio controls>
    <source src="auda-hpss/musdb/example1_mix.wav" type="audio/wav">
</audio>

### Percussive - Ref
<audio controls>
    <source src="auda-hpss/musdb/example1_perc.wav" type="audio/wav">
</audio>

### Harmonic - Ref
<audio controls>
    <source src="auda-hpss/musdb/example1_harm.wav" type="audio/wav">
</audio>

### HPSS_MUSDB
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/hpss_musdb/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/hpss_musdb/example1_harm.wav" type="audio/wav">
                        </audio>

### HPSS_T&F
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/hpss_tf/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/hpss_tf/example1_harm.wav" type="audio/wav">
                        </audio>

### SDA_joint
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/sda_joint/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/sda_joint/example1_harm.wav" type="audio/wav">
                        </audio>

### SDA_tuned
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/sda_tuned/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/sda_tuned/example1_harm.wav" type="audio/wav">
                        </audio>

### UDA_small
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/uda_small/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/uda_small/example1_harm.wav" type="audio/wav">
                        </audio>

### UDA_large
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/uda_large/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/uda_large/example1_harm.wav" type="audio/wav">
                        </audio>

### OpenUnmix
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/open_unmix/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/open_unmix/example1_harm.wav" type="audio/wav">
                        </audio>

### IRM
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/irm/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/irm/example1_harm.wav" type="audio/wav">
                        </audio>

### Median Filtering
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/median_filter/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/median_filter/example1_harm.wav" type="audio/wav">
                        </audio>

### Low/High Filtering
- Percussive: <audio controls>
                                <source src="auda-hpss/musdb/low_high_filter/example1_perc.wav" type="audio/wav">
                            </audio>
- Harmonic: <audio controls>
                            <source src="auda-hpss/musdb/low_high_filter/example1_harm.wav" type="audio/wav">
                        </audio>

### Example 2 - Domain **𝒜**:

### Mixture
<audio controls>
    <source src="auda-hpss/musdb/example2_mix.wav" type="audio/wav">
</audio>

### Percussive - Ref
<audio controls>
    <source src="auda-hpss/musdb/example2_perc.wav" type="audio/wav">
</audio>

### Harmonic - Ref
<audio controls>
    <source src="auda-hpss/musdb/example2_harm.wav" type="audio/wav">
</audio>

### HPSS_MUSDB
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_musdb/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_musdb/example2_harm.wav" type="audio/wav">
    </audio>

### HPSS_T&F
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_tf/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_tf/example2_harm.wav" type="audio/wav">
    </audio>

### SDA_joint
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_joint/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_joint/example2_harm.wav" type="audio/wav">
    </audio>

### SDA_tuned
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_tuned/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_tuned/example2_harm.wav" type="audio/wav">
    </audio>

### UDA_small
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_small/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_small/example2_harm.wav" type="audio/wav">
    </audio>

### UDA_large
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_large/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_large/example2_harm.wav" type="audio/wav">
    </audio>

### OpenUnmix
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/open_unmix/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/open_unmix/example2_harm.wav" type="audio/wav">
    </audio>

### IRM
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/irm/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/irm/example2_harm.wav" type="audio/wav">
    </audio>

### Median Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/median_filter/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/median_filter/example2_harm.wav" type="audio/wav">
    </audio>

### Low/High Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/low_high_filter/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/low_high_filter/example2_harm.wav" type="audio/wav">
    </audio>

### Example 3 - Domain **𝒜**:

### Mixture
<audio controls>
    <source src="auda-hpss/musdb/example3_mix.wav" type="audio/wav">
</audio>

### Percussive - Ref
<audio controls>
    <source src="auda-hpss/musdb/example3_perc.wav" type="audio/wav">
</audio>

### Harmonic - Ref
<audio controls>
    <source src="auda-hpss/musdb/example3_harm.wav" type="audio/wav">
</audio>

### HPSS_MUSDB
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_musdb/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_musdb/example3_harm.wav" type="audio/wav">
    </audio>

### HPSS_T&F
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_tf/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/hpss_tf/example3_harm.wav" type="audio/wav">
    </audio>

### SDA_joint
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_joint/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_joint/example3_harm.wav" type="audio/wav">
    </audio>

### SDA_tuned
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_tuned/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/sda_tuned/example3_harm.wav" type="audio/wav">
    </audio>

### UDA_small
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_small/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_small/example3_harm.wav" type="audio/wav">
    </audio>

### UDA_large
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_large/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/uda_large/example3_harm.wav" type="audio/wav">
    </audio>

### OpenUnmix
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/open_unmix/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/open_unmix/example3_harm.wav" type="audio/wav">
    </audio>

### IRM
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/irm/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/irm/example3_harm.wav" type="audio/wav">
    </audio>

### Median Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/median_filter/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/median_filter/example3_harm.wav" type="audio/wav">
    </audio>

### Low/High Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/musdb/low_high_filter/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/musdb/low_high_filter/example3_harm.wav" type="audio/wav">
    </audio>

### Example 1 - Domain **ℬ**:

### Mixture
<audio controls>
    <source src="auda-hpss/tf/example1_mix.wav" type="audio/wav">
</audio>

### Percussive - Ref
<audio controls>
    <source src="auda-hpss/tf/example1_perc.wav" type="audio/wav">
</audio>

### Harmonic - Ref
<audio controls>
    <source src="auda-hpss/tf/example1_harm.wav" type="audio/wav">
</audio>

### HPSS_MUSDB
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_musdb/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_musdb/example1_harm.wav" type="audio/wav">
    </audio>

### HPSS_T&F
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_tf/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_tf/example1_harm.wav" type="audio/wav">
    </audio>

### SDA_joint
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/sda_joint/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/sda_joint/example1_harm.wav" type="audio/wav">
    </audio>

### SDA_tuned
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/sda_tuned/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/sda_tuned/example1_harm.wav" type="audio/wav">
    </audio>

### UDA_small
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/uda_small/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/uda_small/example1_harm.wav" type="audio/wav">
    </audio>

### UDA_large
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/uda_large/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/uda_large/example1_harm.wav" type="audio/wav">
    </audio>

### OpenUnmix
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/open_unmix/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/open_unmix/example1_harm.wav" type="audio/wav">
    </audio>

### IRM
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/irm/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/irm/example1_harm.wav" type="audio/wav">
    </audio>

### Median Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/median_filter/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/median_filter/example1_harm.wav" type="audio/wav">
    </audio>

### Low/High Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/low_high_filter/example1_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/low_high_filter/example1_harm.wav" type="audio/wav">
    </audio>

### Example 2 - Domain **ℬ**:

### Mixture
<audio controls>
    <source src="auda-hpss/tf/example2_mix.wav" type="audio/wav">
</audio>

### Percussive - Ref
<audio controls>
    <source src="auda-hpss/tf/example2_perc.wav" type="audio/wav">
</audio>

### Harmonic - Ref
<audio controls>
    <source src="auda-hpss/tf/example2_harm.wav" type="audio/wav">
</audio>

### HPSS_MUSDB
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_musdb/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_musdb/example2_harm.wav" type="audio/wav">
    </audio>

### HPSS_T&F
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_tf/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_tf/example2_harm.wav" type="audio/wav">
    </audio>

### SDA_joint
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/sda_joint/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/sda_joint/example2_harm.wav" type="audio/wav">
    </audio>

### SDA_tuned
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/sda_tuned/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/sda_tuned/example2_harm.wav" type="audio/wav">
    </audio>

### UDA_small
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/uda_small/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/uda_small/example2_harm.wav" type="audio/wav">
    </audio>

### UDA_large
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/uda_large/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/uda_large/example2_harm.wav" type="audio/wav">
    </audio>

### OpenUnmix
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/open_unmix/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/open_unmix/example2_harm.wav" type="audio/wav">
    </audio>

### IRM
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/irm/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/irm/example2_harm.wav" type="audio/wav">
    </audio>

### Median Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/median_filter/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/median_filter/example2_harm.wav" type="audio/wav">
    </audio>

### Low/High Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/low_high_filter/example2_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/low_high_filter/example2_harm.wav" type="audio/wav">
    </audio>

### Example 3 - Domain **ℬ**:


### Mixture
<audio controls>
    <source src="auda-hpss/tf/example3_mix.wav" type="audio/wav">
</audio>

### Percussive - Ref
<audio controls>
    <source src="auda-hpss/tf/example3_perc.wav" type="audio/wav">
</audio>

### Harmonic - Ref
<audio controls>
    <source src="auda-hpss/tf/example3_harm.wav" type="audio/wav">
</audio>

### HPSS_MUSDB
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_musdb/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_musdb/example3_harm.wav" type="audio/wav">
    </audio>

### HPSS_T&F
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_tf/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/hpss_tf/example3_harm.wav" type="audio/wav">
    </audio>

### SDA_joint
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/sda_joint/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/sda_joint/example3_harm.wav" type="audio/wav">
    </audio>

### SDA_tuned
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/sda_tuned/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/sda_tuned/example3_harm.wav" type="audio/wav">
    </audio>

### UDA_small
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/uda_small/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/uda_small/example3_harm.wav" type="audio/wav">
    </audio>

### UDA_large
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/uda_large/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/uda_large/example3_harm.wav" type="audio/wav">
    </audio>

### OpenUnmix
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/open_unmix/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/open_unmix/example3_harm.wav" type="audio/wav">
    </audio>

### IRM
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/irm/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/irm/example3_harm.wav" type="audio/wav">
    </audio>

### Median Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/median_filter/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/median_filter/example3_harm.wav" type="audio/wav">
    </audio>

### Low/High Filtering
- Percussive: 
    <audio controls>
        <source src="auda-hpss/tf/low_high_filter/example3_perc.wav" type="audio/wav">
    </audio>
- Harmonic: 
    <audio controls>
        <source src="auda-hpss/tf/low_high_filter/example3_harm.wav" type="audio/wav">
    </audio>