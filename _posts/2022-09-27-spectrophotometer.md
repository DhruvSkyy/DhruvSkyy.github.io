---
layout: post
title: Spectrophotometer
category: Projects 
---

This post details how to build your own spectrophotometer! It also provides some background into how a spectrophotometer works, what it does and why it’s so useful. 
<!--more-->

I was recently in search of a chemistry project and thought it would be fun to build a spectrophotometer. This post will first give some background information, then how a spectrophotometer works and how to build it. 

## Background Information:

This section will just explain some of the basics of spectroscopy. Feel free to skip over it if you're already familiar with this. 

### Absorption spectrum 

The electrons in a compound can be excited from a lower energy state to a higher energy state. The rise in energy is discrete, from one molecular orbital to another. The distance between the orbitals differs between molecules, with the primary factor being the extent of the [conjugated system](https://chem.libretexts.org/Bookshelves/Organic_Chemistry/Map%3A_Organic_Chemistry_(Smith)/14%3A_Conjugation_Resonance_and_Dienes/14.01%3A_Conjugation) (this affects how stable the bonds are). Larger systems have a higher gap, and thus need more energy for the electron to be excited (Chapter 1, n.d.). 

**Figure 1:** Electrons being excited to higher orbitals. 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture1.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. chemguide. (2016). Electrons being excited to higher orbitals. [Image]. Retrieved 25 September 2022, from https://www.chemguide.co.uk/analysis/uvvisible/theory.html</figcaption>
</figure>

One method of exciting these electrons is to shine electromagnetic radiation onto it, of which only wavelengths which match the energy needed to raise an electron between the orbitals are absorbed as in Figure 1. Thus, if a continuous spectrum (Figure 2) is shined through a compound, an absorption spectrum is produced. It displays all the wavelengths not absorbed by the compound. An example of this is the hydrogen spectra in Figure 3. The shorter the wavelength absorbed; the more energy was used to excite the electron. 

This has many uses, the pattern of wavelengths absorbed can allow us to detect functional groups or identify a molecule. It can also be used to calculate concentration by how much the intensity of an absorbed wavelength has decreased after passing through the solution – the Beer-Lampert Law. 

**Figure 2:** Spectral Lines 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture2.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. Wikimedia Commons. (2007). Spectral lines [Image]. Retrieved 25 September 2022, from http://www.thestargarden.co.uk/Spectral-lines.html</figcaption>
</figure>

This phenomenon is also the reason why objects have many colours, for example transition metal solutions. We see the complement of the wavelengths absorbed.  

### Emission spectrum 
Simultaneously, compounds can also release energy in the form of electromagnetic radiation as the electron lowers from a higher to lower energy state.  

**Figure 3:** Emission spectra

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture3.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. chemguide. (2012). Emission spectra [Image]. Retrieved 25 September 2022, from https://www.chemguide.co.uk/atoms/properties/hspectrum.html</figcaption>
</figure>

Figure 3 shows how as electrons lower to an orbital with less energy the energy is released as a wavelength, this particular diagram shows the orbitals for a hydrogen atom. This is known as the emission spectrum and is particularly useful for things like astronomy to detect the composition of far out planets. The hot atmospheres releases wavelengths as the electron are deexcited which we can use to identify molecules with. 

It is worth noting that to see the emission spectrum of a substance it should generally be in a gaseous or liquid form. This is because solids are closer to being [black bodies](https://phys.libretexts.org/Bookshelves/University_Physics/Book%3A_University_Physics_(OpenStax)/University_Physics_III_-_Optics_and_Modern_Physics_(OpenStax)/06%3A_Photons_and_Matter_Waves/6.02%3A_Blackbody_Radiation) which have a set smooth emission spectrum (like the continuous spectrum). The most intuitive explanation I heard is that gases are more ‘optically thin’ allowing us to see its individual properties. Meanwhile blackbodies are ‘optically thick’, this leads the object to be in [equilibrium with the radiation field](https://en.wikipedia.org/wiki/Radiative_equilibrium) which is a Planck function determined by the temperature and independent of the materials involved (v, 2018). 


## Spectrophotometer Design 

A spectrophotometer is an instrument which can measure the intensity of light, a UV-visible spectrophotometer can measure the intensity of light over the ultraviolet range (185 - 400 nm) and visible range (400 - 700 nm) (Vo, 2022). There are multiple ways to design a spectrophotometer, the design used for this blogpost in in Figure 4 below, it came from this [journal](https://pubs.acs.org/doi/10.1021/acs.jchemed.0c01085). 

**Figure 4:** Spectrophotometer Design 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture4.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. Silva, W., Suarez, W., Reis, C., dos Santos, V., Carvalho, F., Reis, E., & Vicentini, F. (2021). Multifunctional Webcam Spectrophotometer for Performing Analytical Determination and Measurements of Emission, Absorption, and Fluorescence Spectra. Journal Of Chemical Education, 98(4), 1442-1447. https://doi.org/10.1021/acs.jchemed.0c01085</figcaption>
</figure>

The design works with the light source generating a continuous spectrum of light which then goes through the slit allowing only light directly parallel to the sides of the container. The light then goes through a cuvette which contains a solution of the substance whose absorption spectrum will be calculated. The solution absorbs only certain wavelengths of the light and the remaining wavelengths go through the solution continuing till it reaches a diffraction grating. The diffraction grating then disperses the light into its constituent wavelengths. The angle at which the grating is placed is explained further in the ‘building the spectrophotometer’ section. A camera parallel to the diffraction grating then captures the absorbance spectrum. The same setup can be used by removing the cuvette and light source to be able to capture emission spectra.  

Thus, we can gather absorbance and emission spectra with little material as only a diffraction grating, camera and box to house everything is needed. The simplicity of this design does however come at the cost of accuracy, as can be seen in the journal article which designed this. There are more accurate designs of spectrophotometers, however, these often require quite expensive or hard to find gratings and mirrors or tools which is why Figure 4 was chosen ("DIY Webcam", 2015). I would still recommend checking out other designs in the ‘improvements’ section in case you may have the materials. 

#### Note: Fluorescence 

Something I was particularly confused was that during absorption, the electron is excited and raises to a higher orbital. However, during emission the electron emits a wavelength as it drops from a higher orbital to a lower orbital. Thus, when the light passes through the cuvette should it not remain the same? Although some wavelengths are absorbed should they not just be reemitted again through emission. 

It turns out I was not completely wrong. Light can be emitted from electrons through two ways, incandescence where heat is used to generate light and luminescence which does not use heat (PLOEM, 1999). The phenomena I was describing is called fluorescence, a substance can absorb one colour and emit another. However, it turns out that the wavelength emitted is generally lower than the one absorbed. This can be due to the electron first descending some orbitals by releasing energy as ‘vibrational relaxation’, or in other words heat (Chapter 1, n.d.). Thus, it does not impact us when using the spectrophotometer for only the uv-vis range. 

There is a separate device which we can make to measure fluorescence called a fluorometer. It can very accurately detect the presence and number of molecules by measuring its fluorescence which makes it quite useful, for example in medical applications. 

## Building the spectrophotometer:

Materials:
The design allows building the spectrophotometer to be quite flexible, as long as you have a reasonable substitute for the materials. What I bought were:

-	A 20x14x8cm wooden tea box 
  -https://www.amazon.co.uk/gp/product/B008D23V30/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1
  -A Logitech C270 HD Webcam  
  -https://www.amazon.co.uk/gp/product/B01BGBJ8Y0/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1
  -Razor blades
  -https://www.amazon.co.uk/gp/product/B00L2ILKUI/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1
  -A 4.7GB DVD-R 
  -https://www.amazon.co.uk/gp/product/B008S2KQFG/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1


### Steps:

#### Prepare the box: 
To prepare the box we need to create a slit in the front of the box for the light to enter, we also need an exit for the camera cable. 

To create the slit, cut a small rectangle in the front of the box with razer blades, make sure that the cut-out section can still be covered by the razer blades so that no light can enter. I would recommend keeping the slit to one side of the box so that there is space for the camera. Use the razer blades to cover the slit, leaving around a 0.01mm gap between them for light to enter. The thinner the better to make sure the light is coherent but we also want enough light for the camera to capture. 

**Figure 5:** xxxxx

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture5.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Source: Authors own.</figcaption>
</figure>

Figure 5 below shows the front of my spectrophotometer. I also kept a hole near the top of the box at the back of the spectrophotometer for the camera cable to go through, you can cover it with electrical tape to make sure no light goes through. 

#### Create the diffraction grating:

To the create the diffraction grating I used a 4.7GB DVD-R. The DVD acts as a transmission grating, The light is diffracted and separated into its constituent wavelengths as shown below. 

**Figure 6:** Transmission Grating 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture6.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. University of Hong Kong. PHYS 3650 Observational Astronomy Astronomical Spectroscopy Learning Objectives [Image]. Retrieved 25 September 2022, from https://slidetodoc.com/phys-3650-observational-astronomy-astronomical-spectroscopy-learning-objectives/</figcaption>
</figure>

The diagram shows a blazed diffraction grating, the DVD has grooves instead of blazes but they work similarly. The ‘blazes’ are all of equal distance ‘d’, the shorter this distance the greater the angular separation between the wavelengths. This is important as the wider the wavelengths are separated, the higher the resolution is as the camera can more precisely detect the wavelengths. Thus, it is better to use DVD-Rs and higher memories as opposed to CD-Rs as manufactures design DVD-Rs with a lower track pitch (the distance between the blazes) to store more data. A 4.7GB DVD-R has a track pitch of 0.74 microns or 1,351 lines per mm while on a CD the track pitch is 1.6 microns or 625 lines per mm ("Spectrometer FAQ", n.d.).

To use the DVD to create a diffraction grating I followed these instructions. https://publiclab.org/notes/MrBumper/01-11-2015/preparing-a-dvd-r-to-act-as-a-diffraction-grating

Essentially, I just split the DVD to remove the top layer (with the label) with a razor blade. I then just cut out a triangle of it and then a square to use for the setup. Be careful not to touch it, I used gloves. 

#### Angle the diffraction grating:

Figure 6 was a bit of a simplification regarding how the wavelengths are diffracted. More accurately, the light is scattered into multiple orders, each increasing order decreases in intensity and has a higher chance of overlapping with each other. Thus, it is desirable to want to capture the first order. 

**Figure 7:** Orders of Diffraction 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture7.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. Zaman, R. (2020). Does the angle between adjacent maxima remain the same? [Image]. Retrieved 25 September 2022, from https://physics.stackexchange.com/questions/537008/does-the-angle-between-adjacent-maxima-remain-the-same</figcaption>
</figure>

The central white or zero order is at the normal of the plane. The first order is angled away from this (you can calculate this with the grating equation). Thus, an appropriate spectrophotometer design may be something like Figure 8 below. 

**Figure 8:** Angled Spectrophotometer Design 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture8.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. Public Lab. (2013). Grating angle: DVD+R [Image]. Retrieved 25 September 2022, from https://publiclab.org/notes/cfastie/2-12-2013/grating-angle-dvdr</figcaption>

</figure>

However, I did not have a separate stand to keep the DVD diffraction grating so I just stuck it parallel to the lens of the camera. This should not work as it means that the zero order should be going to the camera lens. However, it did work. I also found that adjusting the length between the entrance slit and camera changed the focus and the angle between the diffraction grating and camera (while they are still stuck together) also changed the focus. 

I am not sure why this works but it did, so I just ended up with the design below. It is the same design as an ACS journal, so I don’t think these problems are my own. Either way it ended up functioning, so I kept the design. 

**Figure 9:** Spectrophotometer Design 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture4.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Note. Silva, W., Suarez, W., Reis, C., dos Santos, V., Carvalho, F., Reis, E., & Vicentini, F. (2021). Multifunctional Webcam Spectrophotometer for Performing Analytical Determination and Measurements of Emission, Absorption, and Fluorescence Spectra. Journal Of Chemical Education, 98(4), 1442-1447. https://doi.org/10.1021/acs.jchemed.0c01085</figcaption>
</figure>

I would adjust the 50-degree angle and distance to the slit with trial and error till you can see the first order on the webcam. 
There are discussion threads on public lab which document how angle and grating slit affect focus, but I haven’t found an accurate explanation as of now. I think it may have something to do with the lens on the camera, incoherence of light from the slit and curvature of the DVD diffraction grating but I’m not entirely sure. I would look at the discussion to see how much you might want to adjust your spectrophotometer angle depending on the distance.  
-	Discussion 1   https://publiclab.org/notes/cfastie/2-5-2013/grating-angle
- Discussion 2   https://publiclab.org/notes/cfastie/2-12-2013/grating-angle-dvdr

**Figure 10:** Completed Spectrophotometer 

<figure>
<center>
<img src="{{ site.imageurl }}spectrophotometer/Picture9.png" style="width:70%;height:70%;"/>
</center>
<figcaption class="figcap">Source: Authors own.</figcaption>
</figure>

#### Analysing the data:

To analyse the spectrophotometer data from the webcam I used Theremino which you can find linked – here. You can also use Spectragryph as an alternative if you want to, linked – here.

You need to calibrate your spectrometer. 

Theremino
https://www.theremino.com/en/downloads

Spectragryph
https://effemm2.de/spectragryph/index.html

#### Improvements:

There are quite a few improvements I would make to the spectrophotometer. I will describe these below and have also added links to projects which have these improvements. 

The first improvement would be to keep a stand for the camera. While the camera can be glued to the box, disassembling it and keeping it on a stand may reduce how much it moves around in the box. You can also remove the filter on the webcam this way. It is also good to paint/ cover the interior in black as it absorbs any stray light instead of reflecting it. 

A sample design for this is – here. http://www.sciencemadness.org/talk/viewthread.php?tid=154260

A next step up would be to use a diffraction grating instead of a dvd. You can also lean the diffraction grating against the wall of the container and use a smaller camera so that you can adjust the angle of both such as in this – design. https://blog.durablescope.com/post/BuiltASpectrometer/

If you have access to a 3d printer you can also 3d print a spectrophotometer box into which you can add stands for the diffraction grating and camera. 
Such as in this – design. http://www.gaudi.ch/GaudiLabs/?page_id=995 

You can use the grating equation to calculate the angle at which you need to keep the camera and grating. This may be tricky however as perhaps due to the lack of coherence of light from the slit some people have found that the grating equation doesn’t always accurately predict what angle to keep the camera. It may be better to just use adjustable stands like in the first design except adding an extra stand for a diffraction rating as well as the container. 

However, if you have access to collimator lenses I find these two designs would be quite fun. 
https://physicsopenlab.org/2015/11/26/webcam-diffraction-grating-spectrometer/
https://www.instructables.com/A-Homemade-Webcam-spectrometer-for-Emission-and-Ab/

I also found two design which use PVC pipes instead of a box, I am unsure of whether they may perform better but are still worth checking out. They make use of the grating equation and are able to get a good view of the spectrum. They may also be easier to point at thinmgs (like the sun) to see its spectrum. 
https://astrophotovideo.wordpress.com/astrospectroscopy-with-a-webcam/
http://www.inpharmix.com/jps/CD_spectro.html

## Conclusion:

Making the spectrophotometer is rather easy and accessible. However, it is a useful starting point for many other projects, from analysing the spectrum of the sun to measuring rates of reaction by measuring concentration. Recently I did a project using this spectrophotometer to differentiate between Darjeeling green tea and black tea which was quiet fun. 

-	https://www.sciencedirect.com/science/article/abs/pii/S1386142512010682#f0025
  I hope you build the spectrophotometer and try out many new projects! 
  Also, if you’d like to learn more about diffraction gratings I would recommend these slides (about halfway down it gets to diffraction gratings): by the uni of hong kong 
- https://slidetodoc.com/phys-3650-observational-astronomy-astronomical-spectroscopy-learning-objectives/
  And also this short video about multiple slit interference. 
- https://www.youtube.com/watch?v=cUtOxOuXoLo

## References:

DIY Webcam Diffraction Grating Spectrometer - PhysicsOpenLab. PhysicsOpenLab. (2015). Retrieved 25 September 2022, from https://physicsopenlab.org/2015/11/26/webcam-diffraction-grating-spectrometer/.

PLOEM, J. (1999). Fluorescence Microscopy. Fluorescent And Luminescent Probes For Biological Activity, 3-13. https://doi.org/10.1016/b978-012447836-7/50003-8

Spectrometer FAQ. Public Lab. Retrieved 25 September 2022, from https://publiclab.org/wiki/spectrometer-faq.
University of Colorado Boulder. Chapter 1: UV-Visible & Fluorescence Spectroscopy [Ebook]. Retrieved 25 September 2022, from https://orgchemboulder.com/Labs/Handbook/UV-Vis.pdf.

v, a. (2018). Difference between emission spectrum and black body spectrum. Physics Stack Exchange. Retrieved 25 September 2022, from https://physics.stackexchange.com/questions/438248/difference-between-emission-spectrum-and-black-body-spectrum.

Vo, K. (2022). 2.1.5: Spectrophotometry. Chemistry LibreTexts. Retrieved 25 September 2022, from https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Kinetics/02%3A_Reaction_Rates/2.01%3A_Experimental_Determination_of_Kinetics/2.1.05%3A_Spectrophotometry.

Zaman, R. (2020). Does the angle between adjacent maxima remain the same? [Image]. Retrieved 25 September 2022, from https://physics.stackexchange.com/questions/537008/does-the-angle-between-adjacent-maxima-remain-the-same.