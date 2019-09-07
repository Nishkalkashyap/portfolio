<template>
<div class="resume-container">
    <section class="top-heading-container">
        <div class="left">
            <h1>Nishkal Kashyap</h1>
            <p>Mechanical Engineer and self-taught developer</p>
        </div>
        <div class="right">
            <div class="meta-item">
                <p>Chandigarh</p>
            </div>
            <div class="meta-item" style="--text-color:var(--accent-color);">
                <a class="social-icon" :title="website.title" v-html="website.svg" :href="website.link" target="_blank"></a>
                <p>https://nishkal.in</p>
            </div>
            <div class="meta-item" style="--text-color:var(--accent-color);">
                <a class="social-icon" :title="email.title" v-html="email.svg" :href="email.link" target="_blank"></a>
                <p>hello@nishkal.in</p>
            </div>
        </div>
    </section>
    <section class="summary-container">
        <Divider title="Summary" />
        <div>
            <p style="margin: 0px var(--content-margin);font-size: var(--content-font-size)">
                I'm a Mechanical Engineer and a self taught fullstack developer, building things, developing new technologies,
                blogging, promoting sustainability, and heralding entrepreneurship.
            </p>
        </div>
    </section>
    <section class="experience-container">
        <Divider title="Experience" />
        <ResumeItem title="Quark" timeline="July 2018 - Present" content="
        Created Quark software.
        " />
        <ResumeItem title="Team Defianz Racing" timeline="February 2015 - July 2018" content="
        Currently working on parametric shape optimization using evolution based genetic
        algorithms for single and multi-objective algorithms. Parallel programming and Artificial Neural Network implementation to reduce
        computational time.
        " />
        <ResumeItem title="Universal Industries" timeline="Dec 2015" content="
        Worked with the Design department of Universal Industries, which is a renowned
        manufacturer of a wide range of mechanical power transmission products.
        " />
    </section>
    <section class="projects-container">
        <Divider title="Projects" />
        <ResumeItem title="Electronic Steering Wheel" timeline="Dec 2015" flare="
        Tech Stack: Electron.js,Angular 7,Node.js,Webpack" content="
            Worked with the Design department of Universal Industries, which is a renowned
            manufacturer of a wide range of mechanical power transmission products. Developed CAD
            models for pulleys and sprockets on SolidWorks. Studied the Quality Control processes
            implemented by the company.
        " />
    </section>
    <section class="competitions-container">
        <Divider title="Competitions and Achievements" />
        <ResumeItem title="Formula Student India, 2018" timeline="Dec 2015" flare="
        Location: Curry motorway" content="
            Worked with the Design department of Universal Industries, which is a renowned
            manufacturer of a wide range of mechanical power transmission products.
        " />
        <ResumeItem title="Formula Student India, 2018" timeline="Dec 2015" flare="
        Location: Curry motorway" content="
            Worked with the Design department of Universal Industries, which is a renowned
            manufacturer of a wide range of mechanical power transmission products.
        " />
        <ResumeItem title="Formula Student India, 2018" timeline="Dec 2015" flare="
        Location: Curry motorway" content="
            Worked with the Design department of Universal Industries, which is a renowned
            manufacturer of a wide range of mechanical power transmission products.
        " />
        <ResumeItem title="Formula Student India, 2018" timeline="Dec 2015" flare="
        Location: Curry motorway" content="
            Worked with the Design department of Universal Industries, which is a renowned
            manufacturer of a wide range of mechanical power transmission products.
        " />
    </section>
    <section class="skills-container">
        <Divider title="Skills" />
        <div class="table">
            <table>
                <tr>
                    <td>Programming Languages</td>
                    <td>HTML, CSS, JavaScript</td>
                </tr>
                <tr>
                    <td>CLoud Technologies</td>
                    <td>Big Query, Google App Engine</td>
                </tr>
                <tr>
                    <td>CLoud Technologies</td>
                    <td>Big Query, Google App Engine</td>
                </tr>
                <tr>
                    <td>CLoud Technologies</td>
                    <td>Big Query, Google App Engine</td>
                </tr>
            </table>
        </div>
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
    },
    data() {
        return {
            website: {
                svg: require("!!svg-inline-loader!@buildAssets/signature/website.svg"),
                link: "https://nishkal.in",
                title: 'Website'
            },
            email: {
                svg: require("!!svg-inline-loader!@buildAssets/signature/mail.svg"),
                link: "mailto:hello@nishkal.in?subject=Hey%20Nishkal,",
                title: 'Email'
            }
        }
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
        p {
            margin-top: 0px;
        }
    }

    .right {

        .meta-item {
            border-left: solid 1px var(--divider-color);
            padding-left: 10px;
        }

        p {
            margin: 0px;
            display: inline-block;
        }

        a.social-icon {
            max-width: 15px;
            min-width: 15px;
            display: inline-block;
            position: relative;
            top: 3px;
        }
    }
}

section.summary-container {
    h3 {
        margin-top: 0px;
        margin-bottom: 0px !important;
    }
}

section.skills-container {
    table {
        display: table;
        margin: 0px var(--content-margin);
        width: calc(100% - 2*var(--content-margin));

        td {
            color: var(--text-color);
            padding: 2px;
            font-family: var(--font-family);
            font-size: var(--content-font-size);
            line-height: var(--content-font-size);
        }
    }
}
</style>
