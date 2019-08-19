<template>
<div class="hero-top-component">
    <div class="hero landing-page-background">
        <h1> Hi, I'm Nishkal kashyap </h1>
        <!-- <h1> Nishkal kashyap is building things! </h1> -->
        <h2>
            I'm creating noice web experiences for the next generation of consumer-facing companies
        </h2>
    </div>
    <SvgAnimation style="position:absolute;bottom:0px;width:100%;" />
</div>
</template>

<script>
import SvgAnimation from "./../SvgAnimation";
export default {
    components: {
        SvgAnimation
    }
};
</script>

<style lang="scss" scoped>
.hero {
    color: #ffffff;

    h1,
    h2 {
        color: inherit;
    }
}
</style>
