---
description : 'Design and development of a radiator'
author : nishkal
category: 'mechanical'
tags : ['guide']
cover : '~@buildAssets/pictures/radiator-4.jpg'
pageClass: small-heading-page
---

# Radiator design

<Header />

[[toc]]

## DESIGN GOALS:
1. Reliability of the cooling system.
2. Experimental analysis and manufacturing of radiator.
## DESIGN VARIABLES:
1. RPM Range of the vehicle on the track.
2. Cooling system plumbing.
3. Coolant flow rates.
4. Dimensions and design of Radiator.
## DESIGN STRATEGY:
* To perform heat dissipation tests on current radiator using flow
and temperature sensors.
* Accordingly design a radiator core of suitable dimensions.

## FORMULA USED:
• ĖRW = (QW ρW CW ΔTW) / 60
Where:
* ĖRW = heat transport rate, kW
* QW = coolant flow rate, L/min
* ρW = coolant density = 1.0 kg/L 
* CW = specific heat of coolant, kJ/kg. °C
* ΔTW = temperature drop b/w inlet and outlet of radiator, °C 

## DESIGN CONSIDERATIONS:
* Literature has placed the value of heat to be rejected by the
cooling system to be between 18-23% depending on the load on
the engine.
* If total heat to be rejected by the cooling system is 20% of the
heat supplied by the fuel, a radiator of heat dissipation of 20.6
hp is required.
* Factor of safety for the cooling system was set at 2, considering
the percentage error in readings and financial constraints.
Calculations for CFM of fan:

Heat to be dissipated = 17.6 hp.

Ambient air temp = 36 deg C.

Final Air temp = 72-76 deg C

Delta T = 40 deg C = 104 deg F

Cp air and Air density are constants

cp=1.0kJ/kgK=0.241BTU/lb°F, ρ=0.08018lb/ft3

𝑄 = 𝑚×𝑐𝑝×∆𝑇

𝑚 = 𝑄 / 𝑐𝑝×∆T

![](~@buildAssets/pictures/radiator-1.jpg =450x)

The selected fan has 550 CFM @ 80W power consumption which
meets our requirements and has a high factor of safety.

## VALIDATION
The validation for this year’s cooling system was carried keeping in
mind two objectives. These were:
1. To check whether the part we had designed was able to
outperform the stock KTM radiators.
2. To check whether the system is able to dissipate heat as dictated
by theory.

## Experiment
__Aim:__ To check whether the custom made radiator was able to
outperform the stock KTM radiators and whether it provides
substantial heat dissipation.

__Experimental setup:__ Radiators were connected to the engine with a
flow meter at the engine outlet readings from which were recorded
using Arduino programs and a digital thermometer at the radiator
outlet.

__Procedure:__ With the engine running at a constant rpm, the flow meter
and thermometer readings were recorded along with the engine
outlet temperature using the water temperature sensor. The test was
carried out for both the radiator setups. 

__Calculations:__ Multiple sources give the heat-carrying capacity of the
coolant to be:

![](~@buildAssets/pictures/radiator-2.jpg =450x)

__Observations:__ TODO!

## Conclusion: 
The custom radiator is able to provide a higher heat
transport rate and is able to meet the general engine heat dissipation
requirements as well.

## Characteristics of custom radiator:

![](~@buildAssets/pictures/radiator-3.jpg =450x)

![](~@buildAssets/pictures/radiator-4.jpg =450x)
