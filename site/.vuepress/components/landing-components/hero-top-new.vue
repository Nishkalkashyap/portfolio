<template>
<div class="hero-top-component">
    <SvgAnimation style="position:absolute;bottom:0px;width:100%;" />
    <!-- <floaters side="right" /> -->
    <div class="hero landing-page-background">
        <div style="z-index:2;">
            <h1> Hi, I'm Nishkal kashyap </h1>
            <!-- <h1> Nishkal kashyap is building things! </h1> -->
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
</style>
