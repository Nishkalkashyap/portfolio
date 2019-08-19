<template>
<div class="home4-component">
    <heroTop />

    <Timeline>
        <heroSection side="left" heading='Quark - A framework to build cross-platform desktop applications' upper="Been building Quark since ..." lower="We provide you with all the tools and a canvas to help you make your art." learnMoreLink="/guide/intro.html">
            <video muted autoplay loop name="media" poster="~@buildAssets/media/system-monitor.png" crossorigin="anonymous" class="image-transition" slot="image">
                <source src="~@buildAssets/media/system-monitor.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
        </heroSection>

        <heroSection side="right" heading="IDE and Runtime" upper="On the left you see the Quark IDE, on the right is an application built on the Quark IDE." lower="<strong>Quark development environment</strong> is designed from ground up, for rapid prototyping and development of projects. This means that projects built with Quark are quick to setup, build and share." learnMoreLink="/guide/quark-ide.html">
            <video muted autoplay loop name="media" poster="~@buildAssets/media/hello-world-intro.png" crossorigin="anonymous" class="image-transition" slot="image">
                <source src="~@buildAssets/media/hello-world-intro.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
        </heroSection>

        <heroSection side="left" heading="Quark App store" upper="Built on top of the electron framework. Behind the scenes, Quark uses electron's renderer process as the runtime for your sketches." lower="This means, that you have access to all of the Node.js and Electron's renderer process API's in your sketch.">
            <video muted autoplay loop name="media" poster="~@buildAssets/media/hello-world-intro.png" crossorigin="anonymous" class="image-transition" slot="image">
                <source src="~@buildAssets/media/hello-world-intro.mp4" type="video/mp4" />Your browser does not support the video tag.
            </video>
        </heroSection>
    </Timeline>

    <!-- <div class="landing-page-background">
      <floaters side="left" />
      <heroFeatures />
    </div> -->
</div>
</template>

<script>
import companyLogos from "./landing-components/companyLogos";
import heroSection from "./landing-components/hero-section";
import heroTop from "./landing-components/hero-top-new";
import floaters from "./landing-components/floaters";
import heroFeatures from "./landing-components/hero-features";
export default {
    components: {
        companyLogos,
        heroSection,
        heroTop,
        floaters,
        heroFeatures
    },
    data: () => {
        return {
            swUpdateEvent: null
        };
    },
    mounted() {
        this.$on("sw-updated", this.onSWUpdated);
    },
    methods: {
        onSWUpdated(e) {
            console.log(`Service Worker Updated`);
            this.swUpdateEvent = e;
        }
    }
};
</script>

<style lang="scss" scoped>
.full-height {
    height: 100vh;
    width: 100%;
    max-width: 100%;
}

.flex-center {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0px 50px;
    box-sizing: border-box;
}

.first-container-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
}

.first-container {
    overflow: hidden;

    div.image-container {
        width: 100%;
        display: flex;
        align-items: center;
    }

    div.image-container:hover {
        filter: brightness(1) contrast(1) sepia(0) hue-rotate(0deg) saturate(1);
    }
}

.downloads-container {
    position: relative;

    h1 {
        padding: 15px 35px;
        border-radius: 4px;
        text-align: center;
        top: 70px;
        position: relative;
        margin-bottom: 80px !important;
        box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
    }

    @media only screen and (max-width: 600px) {
        h1 {
            font-size: 36px !important;
        }
    }

    svg {
        transform: rotate(180deg);
        bottom: 0vh;
        position: absolute;
        // fill: #6574cd99;
        // stroke: #6574cd99;
        z-index: -2;
    }

    h3 {
        border-radius: 2px;
        margin-top: 60px;
        margin-bottom: 50px;
        padding: 10px 20px;
    }
}
</style>
