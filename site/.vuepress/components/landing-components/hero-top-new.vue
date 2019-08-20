<template>
<div class="hero-top-component">
    <SvgAnimation style="position:absolute;bottom:0px;width:100%;" />
    <div class="hero landing-page-background">
        <div style="z-index:2;">
            <h1> Hi, I'm Nishkal kashyap </h1>
            <div class="rotator-container">
                <h2 class="rotator" style="animation-delay:0s">Engineering</h2>
                <h2 class="rotator" style="animation-delay:1.8s">Software</h2>
                <h2 class="rotator" style="animation-delay:3.6s">Mechanical</h2>
                <h2 class="rotator" style="animation-delay:5.4s">Electronics</h2>
                <h2 class="rotator" style="animation-delay:7.2s">Building things</h2>
            </div>
            <h2>
                I'm creating noice web experiences for the next generation of consumer-facing companies
            </h2>
        </div>
    </div>
</div>
</template>

<script>
import SvgAnimation from "./../SvgAnimation";
import floaters from "./floaters";
export default {
    components: {
        SvgAnimation,
        floaters
    }
};
</script>

<style lang="scss" scoped>
.hero {
    color: var(--background);
    text-align: center;
    position: relative;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    height: 100vh !important;

    h1,
    h2 {
        color: inherit;
        border-bottom: none;
    }
}

.hero::before {
    content: '';
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
}

h2.rotator {
    padding-top: 0px;
    animation: abcd 9s linear infinite 0s;
    position: absolute;
    opacity: 0;
    text-align: center;
    font-feature-settings: 'kern';
    text-rendering: optimizeLegibility;
    display: inline;
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
    20% {
        opacity: 1;
        transform: translate3d(-50%, 75%, 0px);
        visibility: visible;
    }

    21% {
        opacity: 0;
        transform: translate3d(-50%, 135%, 0px);
        visibility: hidden;
    }

    100% {
        opacity: 0;
        visibility: visible;
    }
}
</style>
