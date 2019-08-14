---
description : 'Quark is a cross-platform, integrated development environment for rapidly building - functional , prototypal projects, written in HTML, CSS and JavaScript with native desktop app like capabilities.'
author : nishkal
tags : ['guide']
---

# Introduction

[[toc]]

## What is Quark ?
Quark is a __general purpose software__ tool specifically designed to help you create projects written in HTML, CSS and JavaScript with native desktop app like capabilities.

## How does it work? 🤯
Simply Said: Quark comes with an __integrated development environment(IDE)__ and a __JavaScript runtime__. You write your code in the IDE and press a button to build your project. That's all! 

The IDE automatically takes care of building your project and emits a single output file which you can "double-click" on to open and run your project. We call these output files, __"sketches"__.

__For detailed explaination__, read our [announcement post on Medium.com](https://medium.com/hackernoon/announcing-quark-a-software-sketchbook-for-your-projects-2f53553415b)


## Quark Sketches 🎨
Quark is built on top of the [Electron framework](https://electronjs.org). Your sketches provide you with all the capabilities of __full fledged electron apps__. The difference here is that they just weigh a __few kilobytes__ instead of __hundreds of megabytes.__

We achieve this functionality by using a __shared JavaScript runtime__ for all your sketches. This runtime, in most cases, accounts for almost 99% of the weight of an electron app. This leaves us with the actual application logic, which usually only weighs a few kilobytes.

The only caveat here is that because of this shared runtime, your sketches have a direct dependency on the Quark software itself to provide for the runtime. Hence we call these projects built with Quark __"sketches" and not applications.__

What this means for you is that you can potentially have hundreds of sketches on your machine providing the functionality as that of full fledged electron apps, while consuming the resources equivalent to only one app!

#### Web Technologies
Sketches are built using web technologies like HTML, CSS and Javascript. If you can build a website, you already know how to build a sketch.

#### Power of Electron 💪
Behind the scenes, we use [electron's renderer process](https://electronjs.org/docs/tutorial/application-architecture) as the runtime for your sketches. This means, that you have access to all of the Node.js and Electron's renderer process API's in your sketch.

#### Cross Platform
Another advantage of using web technologies is that your sketches are Compatible with Mac, Windows, and Linux and run on all three platforms. __Write once, run everywhere!__

#### Unopinionated
Anything you like, any way you like, in any style. We have out-of-the-box support for modern JavaScript, React.js, Vue.js and Typescript. Take your pick!

#### Powerful build system
Thanks to the powerful Quark IDE which makes transpiling, bundling and running a project as easy as pressing a button.