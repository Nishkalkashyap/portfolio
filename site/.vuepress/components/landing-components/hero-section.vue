<template>
<section class="hero-section-component landing-page-background" :class="side + '-side'">
    <div class="hero-section-wrapper" ref="containerElement" :class="{'can-show' : canShow}">
        <div class="hero-section-container">
            <div style="padding:10px 20px;display:inline-block;flex-grow:1;flex-basis:0">
                <h3>{{heading}}</h3>
                <p v-html="upper"></p>
                <p v-html="lower"></p>
                <router-link :to="(learnMoreLink || '/download/')">Learn more</router-link>
            </div>
            <div class="video-container">
                <slot name="image"></slot>
                <div class="shadow"> </div>
            </div>
        </div>
    </div>
    <floaters :side="side" />
</section>
</template>

<script>
import floaters from "./floaters";
import {
    isInViewport
} from "./util";
export default {
    props: ["side", "heading", "upper", "lower", "image", "learnMoreLink"],
    components: {
        floaters
    },
    data() {
        return {
            canShow: true
        };
    },
    mounted() {
        window.addEventListener("scroll", () => {
            this.canShow = isInViewport(this.$refs.containerElement);
        });
    }
};
</script>

<style lang="scss" scoped>
.can-show video {
    opacity: 1;
}

.right-side {
    .hero-section-container {
        flex-direction: row-reverse;
    }

    .video-container {
        margin-right: 40px;
    }
}

.left-side {
    .video-container {
        margin-left: 40px;
    }
}

.video-container {
    position: relative;
    max-width: 50%;
    min-width: 400px;
    z-index: 1;
    display: inline-flex;
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
}

video {
    opacity: 0;
    max-width: 100%;
    border-radius: 5px;
    margin-top: 0px;
}

.shadow {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.hero-section-wrapper {
    width: 100%;
}

.hero-section-container {
    padding: 20px;
    align-items: center;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
}

@media only screen and (max-width: 760px) {
    .hero-section-container {
        padding-right: 20px !important;
        padding-left: 20px !important;
    }
}

h3 {
    position: relative;
}

h3::before {
    border-top: solid 10px var(--text-color--dark);
    content: "";
    display: block;
    position: absolute;
    width: 80px;
    top: 20px;
    left: 0px;
}

a {
    display: inline-block;
    padding: 0.5em 1em;
    line-height: inherit;
    font-size: inherit;
    font-weight: 500;
    text-decoration: none;
    border-radius: 5px;
    color: #ffffff;
    background-color: var(--accent-color);
}
</style>
