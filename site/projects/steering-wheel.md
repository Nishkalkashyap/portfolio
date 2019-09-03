---
description : 'Design and development of an electronic steering wheel for a Formula student car'
author : nishkal
category: 'electronics'
tags : ['guide']
cover : '~@buildAssets/pictures/steering-wheel-1.jpg'
video: '~@buildAssets/pictures/electronic-steering-wheel.mp4'
pageClass: small-heading-page
---

# Electronic steering wheel

<Header />

## Introduction
Other than the obvious, the function of this electronic steering wheel is to control several sub-systems of the car, that includes a radiator fan, the drag reduction system and variable geometry intake manifold. To get a brief idea, first watch the video below and then continue.

<video muted autoplay loop style="max-width:100%; height:auto" name="media" poster="~@buildAssets/pictures/steering-wheel-1.jpg" crossOrigin="anonymous">
  <source src="~@buildAssets/pictures/electronic-steering-wheel.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video> 

## The Setup
The setup can be divided into 4 levels of hierarchy. Consider the diagram below:

![](~@buildAssets/pictures/steering-wheel-0.png)

1. __Arduino__: The role of arduino in my setup is to receive input from the touch screen and gear shift buttons and accordingly deliver an output signal to control all the relays and servo.

2. __Steering wheel and actuators__:
   1. Quick release electrical coupling: As far as the production of the steering wheel is concerned, this was undoubtedly the most difficult part of the entire setup. The male side of a round electrical connector was inserted in the splined shaft of the steering wheel with all the wiring going through the shaft and exiting near the rack. The female side of the electrical connector was positioned inside the quick release coupling of the steering wheel. A total of 8 wires are carried by the connector. Check the images below to get a better idea of the connections.

    <p style="text-align:center">
        <img src="~@buildAssets/pictures/steering-wheel-2.jpg"/>
        <img src="~@buildAssets/pictures/steering-wheel-3.jpg"/>
    </p>

   2. __Pneumatic gear shifter relay__: The relay is controlled by the arduino which receives the signal from gear shift buttons on the steering wheel. When the button is pressed, the relay is activated by the arduino and the pneumatic system moves accordingly to change the gear.
   3. __DRS Servo__: The servo for the DRS(Drag reduction system) is also controlled by the arduino. According to the event selected by the user in the "Event Selection" menu on LCD, the servo moves and the position of the rear wing of the car is changed.
   4. __VLIM Servo__: VLIM stands for variable length intake manifold.Just like the DRS servo, the VLIM servo is controlled by the arduino according to the settings in the event selection menu.
   5. __Radiator fan relay__: The radiator fan is a critical part of the engine's cooling system. Don't turn the radiator fan on and the engine overheats. Keep the radiator fan always on and you drain your battery within 15 minutes. Hence, there are many settings that the user can select depending upon the ambient air temperature and running conditions.

3. __Steering wheel electrical circuit__: As the name suggests, it is the electrical circuit of the steering wheel. A total of 8 wires from the electrical circuit go to the quick release electrical coupling.    

    <p style="text-align:center">
        <img src="~@buildAssets/pictures/steering-wheel-4.png"/>
        <img src="~@buildAssets/pictures/steering-wheel-5.png"/>
    </p>

4. __Steering wheel auxiliaries__
   1. __Shift Lights__: These are the LED lights mounted on the top of the steering wheel. They are used to inform the driver to shift the gear at optimum RPM in order to extract maximum performance from the powertrain. In my setup, we used Neopixel WS2812B RGB LED's for the reasons of simplicity. The entire strip is operated by only 3 wire. One power(+5v), second ground and the third is the signal wire.
   2. __Touch Screen__: As discussed above, the touch screen is operated by the driver to control various settings of the car. The touch screen device that we used is a Nextion device. The device offers an easy way to interface with the arduino and beautiful GUI's can be made with ease without much programming skills. To explain the coding and design of the touch screen would need a tutorial of it's own. Let me know in the comments section below if you want me to make a tutorial for the same.
   3. __Shift Buttons__: Here again, when the buttons(either of two) are pressed by the driver, the respective digital read pins of the arduino are set to high. According to the button pressed, arduino activates the appropriate pneumatic gear shifter relay and the gear is changed.

## Production
Apart from the quick release electrical connector assembly which i've already discussed above , the main components of production are the base frame and the cover boxes. The base frame of steering, as visible in the images, was made using carbon fibre. Three layers of carbon fibre on either side of a foam core were bagged using resin infusion technique. After drying all the epoxy, the part was sent for wire cut where the slots for thumb and the external profile were cut on the base frame. As for the cover boxes, 2mm PVC sheets were used, which were then again sent for wire cut to get  the desired profile. After the machining, both the base frame and the cover boxes were assembled using nuts, bolts and a lot of epoxy. :P 

Below is another video made during the time of manufacturing. Making car sounds is always fun.:)

<iframe width="100%" height="350" src="https://www.youtube.com/embed/uTClqEjpTrg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>