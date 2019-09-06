<template>
<div class="resume-container">
    <section class="top-heading-container">
        <div class="left">
            <h1>Nishkal Kashyap</h1>
            <p>Mechanical Engineer and self-taught developer</p>
        </div>
        <div class="right">
            <p>Chandigarh</p>
            <p>https://nishkal.in</p>
            <p>hello@nishkal.in</p>
        </div>
    </section>
    <section class="summary-container">
        <Divider title="Summary" />
        <div>
            <p>
                I'm a Mechanical Engineer and a self taught fullstack developer, building things, developing new technologies,
                blogging, promoting sustainability, and heralding entrepreneurship.

                I am particularly fascinated with multi-disciplinary engineering.
                To this end, I have undertaken a plethora of projects spanning a wide variety of disciplines including combustion powertrain engineering,
                mechanics, electronics, web development and software engineering.
                Furthermore, I have also been a part of several inter-disciplinary student teams at university,
                particularly the Formula Student initiative at Delhi Technological University.
                I believe that creative engineering is indistinguishable from fine artwork.
            </p>
        </div>
    </section>
    <section class="experience-container">
        <Divider title="Experience" />
        <ResumeItem title="Team Defianz Racing" timeline="August 2017 - July 2019" content="
        Currently working on parametric shape optimisation using evolution based genetic
        algorithms for single and multi-objective algorithms. Also, working on coupling of partial
        differential solver - CFD: OpenFOAM, with optimisation heuristics and data I/O using
        Python. Parallel programming and Artificial Neural Network implementation to reduce
        computational time.
        " />
        <ResumeItem title="Universal Industries" timeline="Dec 2015" content="
        Worked with the Design department of Universal Industries, which is a renowned
        manufacturer of a wide range of mechanical power transmission products. Developed CAD
        models for pulleys and sprockets on SolidWorks. Studied the Quality Control processes
        implemented by the company.

        " />
    </section>
    <section class="experience-container">
        <Divider title="Projects" />
        <ResumeItem title="Electronic Steering Wheel" timeline="Dec 2015" 
        flare="Tech Stack: Electron.js,Angular 7,Node.js,Webpack"
        content="
            Worked with the Design department of Universal Industries, which is a renowned
            manufacturer of a wide range of mechanical power transmission products. Developed CAD
            models for pulleys and sprockets on SolidWorks. Studied the Quality Control processes
            implemented by the company.
        "/>
    </section>
</div>
</template>

<script>
import Divider from './resume-components/Divider';
import ResumeItem from './resume-components/ResumeItem';
export default {
    components: {
        Divider,
        ResumeItem
    }
};
</script>

<style lang="scss" scoped>
section.top-heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left {
        h1 {
            margin-top: 0px;
            margin-bottom: 0px !important;
        }
    }

    .right {
        p {
            padding-left: 20px;
            border-left: solid 1px var(--divider-color);
            margin: 0px;
        }
    }
}

section.summary-container {
    h3 {
        margin-top: 0px;
        margin-bottom: 0px !important;
    }
}
</style>
