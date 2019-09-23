<template>
<div class="resume-container">
    <section class="top-heading-container">
        <div class="left">
            <h1>Nishkal Kashyap</h1>
            <p>Mechanical Engineer and full-stack developer. Creator of JavaScript platform
                <!-- Quark -->
                <!-- .Read more about me on my website <a>https://nishkal.in</a> -->
                <a>QuarkJS.io</a>
            </p>
            <p>
                Perusing multi-disciplinary engineering and entrepreneurship.
                Visit my portfolio website at: <a href="">nishkal.in</a>
            </p>
        </div>
        <div class="right">
            <div class="meta-item" style="--text-color:var(--accent-color);">
                <p>
                    <a class="social-icon" :title="email.title" v-html="email.svg" :href="email.link" target="_blank"></a>
                    hello@nishkal.in
                </p>
            </div>
            <div class="meta-item" style="--text-color:var(--accent-color);">
                <p>
                    <a class="social-icon" :title="website.title" v-html="website.svg" :href="website.link" target="_blank"></a>
                    nishkal.in
                </p>
            </div>
            <div class="meta-item" style="--text-color:var(--accent-color);">
                <p>
                    <a class="social-icon" :title="github.title" v-html="github.svg" :href="github.link" target="_blank"></a>
                    github.com/nishkalkashyap
                </p>
            </div>
            <div class="meta-item" style="--text-color:var(--accent-color);">
                <p>
                    <a class="social-icon" :title="linkedin.title" v-html="linkedin.svg" :href="linkedin.link" target="_blank"></a>
                    linkedin.com/in/nishkalkashyap
                </p>
            </div>
        </div>
    </section>
    <!-- <section class="summary-container">
        <Divider title="Summary" />
        <div>
            <p>
                I'm a Mechanical Engineer and a self taught fullstack developer, building things, developing new technologies,
                blogging, and heralding entrepreneurship.
            </p>
        </div>
    </section> -->
    <section class="experience-container flex-box">
        <Divider title="Experience" />
        <ResumeItem title="Quark" timeline="July 2018 - Present" content="
        My first entrepreneurial undertaking <a href=''>QuarkJS.io</a>, a full fledged application development and distribution platform for Windows, Mac and Linux based operating systems. 
        Released in August 2019, the project website has been viewed over 125,000 times and the Quark software itself has been downloaded by over 10,000 developers around the world.
        This project is also a beneficiary of the Google Cloud Startup Program!
        " grow="true" />
        <ResumeItem title="Team Defianz Racing" timeline="February 2015 - July 2018" content="
        Participated in 4 Formula Student events held in India and the United Kingdom across 4 years. 
        Led a team of 25 student engineers to its best positions till date at both FS Bharat <i>(2nd overall)</i> and FS United Kingdom. 
        Previously worked as the head of the Powertrain and Electronics department.
        " />
        <ResumeItem title="Universal Industries" timeline="Dec 2015" content="
        Worked as an intern with the design department of Universal Industries, which is a renowned
        manufacturer of a wide range of mechanical power transmission products.
        Developed CAD models for pulleys and sprockets on SolidWorks.
        Studied the Quality Control processes implemented by the company.
        " />
    </section>
    <section class="education-container flex-box">
        <Divider title="Education" />
        <ResumeItem title="Delhi Technological University" timeline="Aug 2014 - Jun 2018" content="
           B. Tech, Mechanical Engineering • 70.4%
        " />
        <!-- All India Senior School Certificate Exam • 94.6% -->
        <ResumeItem title="Shivalik Public School" timeline="Mar 2012 - May 2014" content="
        CBSE • 94.6%
        " />
    </section>
    <section class="projects-container flex-box">
        <Divider title="Projects" />
        <ResumeItem title="Quark development environment" timeline="2018 - Present" flare="
        Tech Stack: Electron.js,Angular 7, Node.js, Webpack" content="
        Developed a cross-platform, integrated development environment powered by the same code editor as of <strong>Microsoft's Visual Studio Code (VSCode)</strong>.
        The IDE boasts of features like integrated terminal, inbuilt package manager and more that 150 different configuration settings.
        Visit <a href=''>quarkjs.io</a>
        " />
        <ResumeItem title="Quark app store" timeline="July 2019 - Present" flare="
        Tech Stack: React.js, Firebase, Firestore Database, Cloud Functions" content="
            Currently under active development, the appstore is a full-fledged application distribution platform for Quark apps.
            It supports novel features like release versioning, application auto updates, register user ratings e.t.c
            Visit <a href=''>dash.quarkjs.io</a>
        " />
        <!-- Created a finance management app for the team.
            The app was built using Ionic 3, Angular 4 at the frontend and Firebase Firestore at the backend
            and was used in production from Aug 2017-July 2018 -->
        <ResumeItem title="Finance Management App" timeline="August 2017" flare="
        Tech Stack: Firebase Firestore, Ionic 3, Angular 4" content="
        Developed a finance management app using Ionic 3, Angular 4 at the frontend and Firebase Firestore at the backend.
        The app was used by a team of 25 student engineers from Aug 2017 - Jul 2018
        ,to manage internal finances of the team.
        " />
        <ResumeItem title="Data acquisition system" timeline="March 2017" flare="
        Tech Stack: Arduino, Processing" content="
            Implemented a data acquisition system using Arduino, supporting more than 20 different sensor inputs.
            The data is sent in real time via a radio transmitter mounted on the car and received on the client side via a receiver connected to a laptop.
        " />
        <ResumeItem title="Electronic steering wheel" timeline="February 2017" flare="
        Arduino, Nextion HMI display, Carbon fiber, Pneumatics" content="
            Developed a carbon fiber reinforced, touch screen enabled electronic steering wheel.
            Built with Arduino and Nextion HMI display, the steering wheel served as the central command center for a formula student vehicle.
        " />
        <ResumeItem title="Variable geometry intake manifold" timeline="Aug 2016 - May 2018" flare="
        Solidworks, Research Paper, Thesis" content="
            Developed a variable geometry intake manifold.
            This system massively improved the overall performance of an IC engine, mainly throttle response at the bottom end of the RPM range.
        " />
        <!-- <ResumeItem title="Dynamometer" timeline="Oct 2017 - Jan 2018" flare="
        Solidworks, Engineering Design, Optimization" content="
            The aim of this project was to acquire, analyse and apply the output characteristics of the engine in further optimizations and calculations like engine performance, intake-exhaust simulations, fuel consumption calculations, etc
        " inline="true" /> -->
        <ResumeItem title="Design and manufacturing of various powertrain subsystems" timeline="Mar 2015 - Jan 2016" flare="
        Solidworks, Engineering Design, 3D Printing" content="
            Conceived, designed and fabricated various sub-systems of a formula student vehicle, including an 
            air-intake manifold, exhaust manifold, oil sump and radiator for a 4-cylinder IC Engine.
        " grow="true" />
    </section>
    <section class="competitions-container flex-box">
        <Divider title="Competitions and Achievements" />
        <ResumeItem title="Formula Student Bharat" timeline="Jan 2018, Team Defianz Racing" flare="
        Competition, India, Coimbatore, Kari Motor Speedway" content="
        <strong>Led a team of 25 student engineers</strong> to an overall <strong>second position</strong> in the Formula Student Bharat competition.
            Responsible for systems integration and team management.
        " />
        <ResumeItem title="Formula Student UK" timeline="July 2017, Team Defianz Racing" flare="
        Competition, United Kingdom, Silverstone Formula 1 Circuit" content="
            Participated in the Formula Student UK competition held at the Silverstone Formula 1 track.
            Responsible for the development of the combustion powertrain and electronics of the vehicle.
        " />
        <ResumeItem title="Formula Student UK" timeline="July 2016, Team Defianz Racing" flare="
        Competition, United Kingdom, Silverstone Formula 1 Circuit" content="
           Participated in the Formula Student UK competition held at the Silverstone Formula 1 track as a powertrain engineer.
        " />
        <ResumeItem title="Formula Student India" timeline="Jan 2016, Team Defianz Racing" flare="
        Competition, India, Buddha International Circuit" content="
           Participated in the Formula Student India competition held at the Buddha International Circuit as a junior powertrain engineer.
        " />
    </section>
    <section class="skills-container">
        <Divider title="Skills" />
        <div class="table">
            <table>
                <tr>
                    <td>Programming Languages</td>
                    <td>JavaScript, TypeScript</td>
                </tr>
                <tr>
                    <td>Frontend technologies</td>
                    <td>Electron.js, Angular 2+, Vue.js, React.js, Babel, Webpack, SCSS/CSS, HTML</td>
                </tr>
                <tr>
                    <td>Backend technologies</td>
                    <td>Node.js, Express.js, Cloud Functions, App Engine, heroku</td>
                </tr>
                <tr>
                    <td>Databases</td>
                    <td>Firebase Database, Firebase Firestore</td>
                </tr>
                <tr>
                    <td>DevOps</td>
                    <td>Travis CI and Appveyor CI</td>
                </tr>
                <tr>
                    <td>Electronics & MCU's</td>
                    <td>Arduino based boards, Node MCU, ESP, Nextion HMI display, OBD-2 (ELM-327)</td>
                </tr>
                <tr>
                    <td>Core Engineering</td>
                    <td>Solidworks, IC Engines, Automobile electronics</td>
                </tr>
            </table>
        </div>
    </section>
    <section class="resume-footer-container">
        <p align="center" style="font-size:var(--content-font-size);color:var(--accent-color)">
            Learn more about me on my website 
            <a style="color:var(--secondary-color)" href="https://nishkal.in" target="_blank">nishkal.in</a>
        </p>
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
            },
            github: {
                svg: require("!!svg-inline-loader!@buildAssets/signature/github.svg"),
                link: "https://github.com/nishkalkashyap",
                title: 'GitHub'
            },
            linkedin: {
                svg: require("!!svg-inline-loader!@buildAssets/signature/linkedin.svg"),
                link: "https://linkedin.com/in/nishkalkashyap",
                title: 'LinkedIn'
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.flex-box {
    display: flex;
    flex-wrap: wrap;
}

section.top-heading-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    .left {
        h1 {
            margin-top: 0px;
            margin-bottom: 5px !important;
            font-size: 50px !important;
        }

        p {
            margin: 0px;
            font-size: var(--content-font-size);
            word-break: keep-all;
        }
    }

    .right {
        $lineHeight: 14px;
        min-width: 160px;

        border-left: solid 1px var(--divider-color);
        padding-left: 10px;

        .meta-item {
            line-height: $lineHeight;
        }

        p {
            margin: 0px;
            display: inline-block;
            font-size: 11px;
        }

        a.social-icon {
            max-width: 15px;
            min-width: 15px;
            display: inline-block;
            position: relative;
            top: 3px;
            line-height: $lineHeight;
        }
    }
}

section.summary-container {
    h3 {
        margin-top: 0px;
        margin-bottom: 0px !important;
    }

    p {
        margin: 0px var(--content-margin);
        font-size: var(--content-font-size);
    }
}

section.skills-container {
    table {
        display: table;
        margin: 0px var(--content-margin);
        width: calc(100% - var(--content-margin));

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
