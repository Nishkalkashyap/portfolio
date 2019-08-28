<template>
<div class="hero-top-component">
    <SvgAnimation style="position:absolute;bottom:0px;width:100%;" />
    <div class="hero landing-page-background">
        <div style="z-index:2;">
            <h1 class="heading">Hi, I'm Nishkal kashyap</h1>
            <div class="rotator-container">
                <h2 class="pre-text">And I am</h2>
                <h2 class="rotator" style="animation-delay:0s">a blogger</h2>
                <h2 class="rotator" style="animation-delay:1.8s">a mechanical engineer</h2>
                <h2 class="rotator" style="animation-delay:3.6s">a full-stack developer</h2>
                <h2 class="rotator" style="animation-delay:5.4s">doing multi-desciplinary engineering</h2>
                <h2 class="rotator" style="animation-delay:7.2s">all round smarty pants</h2>
                <h2 class="rotator" style="animation-delay:9s">building things</h2>
            </div>
            <!-- <div class="text-content">
          <p>
            I'm a Mechanical Engineer developing new technologies, building things, blogging, promoting sustainability, and heralding entrepreneurship.
            I am particularly fascinated with multi-desciplinary engineering.
            To this end, I have undertaken a plethora of projects spanning a wide variety of disciplines including combustion powertrain engineering, mechanics, electronics, web development and software engineering.
            Furthermore, I have also been a part of several inter-disciplinary student teams at university, particularly the Formula Student initiative at Delhi Technological University.
            I believe that creative engineering is indistinguishable from fine artwork.
          </p>
        </div>-->
            <div class="icons">
                <SocialIcons />
            </div>
            <div class="learn-more">
                <span>More about Nishkal</span>
            </div>
        </div>
    </div>
    <SWUpdatePopup :updateEvent="swUpdateEvent" />
</div>
</template>

<script>
import SvgAnimation from "./../SvgAnimation";
import floaters from "./floaters";
import SWUpdatePopup from "@default-theme/SWUpdatePopup.vue";
export default {
    components: {
        SvgAnimation,
        floaters,
        SWUpdatePopup
    },
    data() {
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
.hero {
    color: #ffffff;
    text-align: center;
    position: relative;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    min-height: 100vh !important;

    h1,
    p,
    h2 {
        color: inherit;
        border-bottom: none;
    }

    h1.heading {
        margin-top: -50px;
    }

    //   .text-content {
    //     margin-top: 6em;
    //     margin-left: 20px;
    //     margin-right: 20px;
    //     margin-bottom: 100px;
    //     max-width: 800px;
    //     display: none;
    //   }
}

.learn-more {
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0px 0.175em 0.5em rgba(2, 8, 20, 0.1),
        0px 0.085em 0.175em rgba(2, 8, 20, 0.08);

    padding: 10px 40px;
    margin-top: 10px;

    // background: var(--background);
    font-family: var(--heading-font-family);
    text-shadow: none;
    background: linear-gradient(225deg, #9ae6b4, #48bb78);
}

.hero::before {
    content: "";
    width: 100%;
    height: 100%;
    background: url("/images/dots-small.svg");
    position: absolute;
    left: 0px;
    z-index: 0;
}

.rotator-container {
    position: relative;
    text-align: center;
    width: 100%;
    height: 30px;
    margin-top: 60px;
    margin-bottom: 120px;
}

.pre-text {
    text-align: center;
    margin: 0px;
    padding-top: 0px;
    margin-bottom: -25px;

    font-size: 1.4em !important;
}

.rotator {
    padding-top: 0px;
    animation: abcd 10.8s linear infinite 0s;
    position: absolute;
    opacity: 0;
    text-align: center;
    font-feature-settings: "kern";
    text-rendering: optimizeLegibility;
    display: inline-block;

    width: 100%;
    margin: 0px 0px;
    height: 40px;

    font-size: 2em !important;
}

@keyframes abcd {
    0% {
        opacity: 0;
        transform: translate3d(-50%, 25%, 0px);
        visibility: visible;
    }

    0.9% {
        opacity: 1;
        transform: translate3d(-50%, 75%, 0px);
    }

    // 100/(number of animating elements)
    16.6% {
        opacity: 1;
        transform: translate3d(-50%, 75%, 0px);
        visibility: visible;
    }

    17.6% {
        opacity: 0;
        transform: translate3d(-50%, 135%, 0px);
        visibility: hidden;
    }

    100% {
        opacity: 0;
        visibility: visible;
    }
}

@keyframes glow {
    from {
        text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
            0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }

    to {
        text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
            0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
}
</style>
