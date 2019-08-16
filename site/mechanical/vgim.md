---
description : 'Design and development of a variable geometry intake manifold'
author : nishkal
tags : ['guide']
pageClass: small-heading-page
---

# Variable geometry intake manifold

<Header />

[[toc]]

## Introduction
An intake manifold is simply a mechanical component attached to the engines cylinder head that allows the air/fuel mixture to enter the combustion chamber of the engine. The intake manifold consists of following parts:

![](/pictures/vgim-1.jpg)

#### What is Variable geometry intake manifold?
Short answer, to achieve greater Volumetric efficiency. As a consequence of greater volumetric efficiency, we can achieve greater torque, power and thermal efficiency from the same size of the engine at the same RPM.

#### What is Volumetric efficiency?
Volumetric efficiency in an internal combustion engine, is defined as the ratio of the mass density of the air-fuel mixture drawn into the cylinder at atmospheric pressure (during the intake stroke) to the mass density of the same volume of air in the intake manifold. 

#### DIY-Variable geometry intake manifold: 
The design consists of the following components, arranged in the direction downstream to the air flow:

1. __Design__: The design consists of the following components, arranged in the direction downstream to the air flow:

   1. __Throttle Body__: Contains the throttle position sensor and connects the butterfly valve to the throttle actuation cable.
   2. __Venturi (Or air restrictor in case of FSAE)__: The smallest path in the intake manifold.
   3. __Actuation Cable__: connects the Movable Ram to the servo.
   4. __Upper Plenum Cap__: makes the upper part of the plenum and contains the mounts for actuation     cable and pressure sensor. It connects to the plenum drum via screw threads. 
   5. __Plenum Drum__: Connects the upper and lower plenum. 
   6. __Movable Ram__: Moves inside the plenum drum to control the plenum volume and runner length.
   7. __Lower Plenum Cap__:makes the lower part of the plenum and contains the mounts for actuation     cable and pressure sensor. It connects to the plenum drum via screw threads. 
   8. __Pressure Sensor__: Is used to measure pressure at different parts of the intake.
   9. __Fuel Delivery system__: Made up of fuel injector and fuel delivery lines from the fuel tank.

    <p style="text-align:center">
        <img src="/pictures/vgim-2.jpg"/>
        <img src="/pictures/vgim-3.jpg"/>
    </p>

## Specifications

* __Throttle body size__: 28mm
* __Venturi Diameter__: 20mm (FSAE rule restricted)
* __Plenum Volume__: Variable(1200cc to 2800cc)
* __Runner Length__: Variable(230mm to 330mm)
* __Runner Diameter__: 40mm

## Working overview

![](/pictures/vgim-4.jpg)

Unfortunately, I lost all the videos and images of the setup in a corrupt memory card. All that is left is an amateur video of the setup below:

<iframe width="100%" height="350" src="https://www.youtube.com/embed/yb_dkx9M_fU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Mechanism
Below images describe the movement of the movable Ram and the corresponding change in the geometry of the manifold

1. As the Ram moves towards the upper plenum cap, the plenum volume is decreased and the runner length is increased. Both of these changes enhance the bottom-end(Low RPM) performance of the engine.

<img src="/pictures/vgim-5.jpg"/>

2. As the Ram moves towards the lower plenum cap, the plenum volume is increased and the runner length is decreased. Both of these changes enhance the top-end(High RPM) performance of the engine.

<img src="/pictures/vgim-6.jpg"/>

## Manufacturing
* The manifold was manufactured primarily on a CNC Lathe machine and a CNC Vertical milling machine.
* The material selected was aluminium due to light weight, corrosion resistance and good weldability.
* Below is a picture of the machined components.

<img src="/pictures/vgim-7.png"/>

#### Why not 3D printing?
Some may argue in favor of 3D printing the manifold instead of CNC machining. And to some extent their argument may be valid and legit. But the reason that I chose the latter is because of my previous experiences with 3D printed intake manifolds. The problem with 3D printed manifolds, is that the designs are too rigid. By that I mean, that making changes to an already manufactured manifold is kinda impossible. For example, if you later want to add an extra pressure sensor or temperature sensor to the manifold, you'll need to make some sort of mount on the 3D printed part. And to make a mount, you'll need to machine it, which is very limited on most 3D printed materials. 

On the other hand, using aluminium allows for much more flexibility in the design. That is, on later stages if you want to make some addition to the design, aluminium allows for several machining processes, like welding, threading, knurling etc. which are in-existent in 3D printing.

## Assembly
The final assembled manifold looks like this:-

<img src="/pictures/vgim-8.jpg"/>

## Validation
* Using the [data acquisition system](https://projectmechatronics.blogspot.in/2017/09/data-acquisition-system.html) that we made earlier, pressure values were recorded in the intake manifold at different throttle percentages.
* This data was then plotted on [MATLAB](https://www.mathworks.com/products/matlab.html) and analysed. An example of sample data and result is shown below:

<img src="/pictures/vgim-9.png"/>

* Percent Increase in volumetric efficiency at constructive interference point:

<img src="/pictures/vgim-10.jpg"/>

Where,

Pc= Instantaneous pressure at that point

Pm= Mean pressure of that cycle

<img src="/pictures/vgim-11.jpg"/>

* Similarly, Percent Decrease in volumetric efficiency at destructive interference point:
<img src="/pictures/vgim-12.jpg"/>

* To put that in prospective, an engine with a fixed intake manifold, producing a mean of 40Nm of torque at say 8500RPM, can produce 45Nm simply by swapping a fixed intake manifold with a variable one.

!!! note Note
However, it is noteworthy to mention that the change in volumetric efficiency is very much inflated in our case. This is due to the air intake restrictor in the Formula student cars, that make even stronger pressure waves, specially at higher engine speeds. For road cars, the results will not be this inflated, as they have no intentional air restriction in their manifold. But still, a significant change of about 6-8% may be observed on road cars. Moreover, the above calculations, to its core, are not 100% accurate. For more accurate results, an integral of pressure wave function is to be considered over one suction cycle instead of mean values. This may further reduce the inflated value and will yield more accurate result.
!!!

## Result
The result of such careful design of the intake manifold led to the making of a very competitive FSAE car.

![](/pictures/dr17-6.jpg)
![](/pictures/dr17-8.jpg)
![](/pictures/dr17-9.jpg)



