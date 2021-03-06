<template>
  <section class="hero-section-component landing-page-background" :class="side + '-side'">
    <div class="hero-section-wrapper" ref="containerElement" :class="{'can-show' : canShow}">
      <div class="hero-section-container">
        <div style class="meta-data">
          <div class="flares" v-if="flares">
            <span>{{flares}}</span>
          </div>
          <h3>{{heading}}</h3>
          <p v-html="content" class="text-content"></p>
          <router-link
            v-if="learnMoreLink"
            :to="(learnMoreLink || '/mechanical/')"
            class="learn-more"
          >Learn more</router-link>
        </div>
        <div class="video-container">
          <slot name="image"></slot>
          <div class="shadow"></div>
          <div class="full-circle" :class="'full-circle-' + (index || 1)"></div>
          <div class="cut-circle" :class="'cut-circle-' + (index || 1)"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { isInViewport } from "./util";
export default {
  props: [
    "side",
    "heading",
    "content",
    "image",
    "learnMoreLink",
    "index",
    "flare"
  ],
  data() {
    return {
      canShow: true,
      flares: (this.flare || "").replace(/\,/gi, " • ")
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
$cssSvgWidth: 250;

.can-show .section-slot {
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

.meta-data {
  padding: 20px 30px;
  display: inline-block;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 300px;
  max-width: 600px;

  font-size: 14px;

  .learn-more,
  .text-content {
    position: relative;
    z-index: 2;
  }

  a.learn-more {
    text-decoration: none !important;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }

  .flares {
    background: linear-gradient(225deg, #fbd38d, #ed8936);
    color: #ffffff;
    padding: 2px 10px;
    display: inline-block;
    border-radius: 5px;
    font-family: var(--heading-font-family);
    font-size: 11px;
    margin-bottom: 10px;
    box-shadow: #fbd38d55 0px 5px 15px;
  }

  h3 {
    color: var(--text-color);
    margin-top: 0px;

    position: relative;
    padding-top: 0px;
    font-size: 2em !important;
  }

  p {
    margin-top: 0px;
    // font-size: 1.25em;
    font-size: 15px;
    color: var(--text-color--light);
  }
}

.video-container {
  position: relative;
  max-width: 40%;
  min-width: 500px;
  z-index: 1;
  display: inline-flex;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 15px 25px;

  display: flex;
  height: 100%;
  align-items: center;
}

.section-slot {
  opacity: 0;
  max-width: 100%;
  border-radius: var(--border-radius);
  margin-top: 0px;
  z-index: 2;
}

.full-circle {
  position: absolute;
  border-radius: 9999px;
  z-index: -2;
  opacity: 1;
}

.cut-circle {
  position: absolute;
  border-width: 20px;
  border-style: solid;
  border-radius: 9999px;
  z-index: -2;
  opacity: 1;
  right: unset;
  background-color: transparent;
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
  margin: 70px 0px;
}

.hero-section-container {
  padding: 20px;
  align-items: center;
  justify-content: center;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
}

a {
  display: inline-block;
  padding: 0.5em 1em;
  line-height: inherit;
  font-size: 1.3em;
  font-weight: 500;
  text-decoration: none;
  border-radius: 5px;
  color: #ffffff;
  background-color: var(--accent-color);

  box-shadow: var(--gradient-shadow) 0px 10px 15px;
  background-image: var(--gradient);
  transition: all 0.3s ease-in-out;
}

a:hover {
  transform: translateY(-2px);
  box-shadow: var(--gradient-shadow) 0px 20px 25px;
}

@mixin fullCircle($dimensions, $bg, $vertical, $horizontal) {
  background-image: $bg;
  top: $vertical;
  left: $horizontal;

  width: $dimensions;
  height: $dimensions;
}

@mixin cutCircle($dimensions, $bg, $vertical, $horizontal) {
  border-color: $bg;
  top: $vertical;
  left: $horizontal;

  width: $dimensions;
  height: $dimensions;
}

.full-circle-1 {
  @include fullCircle(
    100px,
    linear-gradient(135deg, #805ad5, #d6bcfa),
    -70px,
    350px
  );
}

.cut-circle-1 {
  @include cutCircle(160px, #4299e1, 200px, 350px);
}

.full-circle-5 {
  @include fullCircle(
    100px,
    linear-gradient(135deg, #5a67d8, #7f9cf5),
    -70px,
    350px
  );
}

.cut-circle-5 {
  @include cutCircle(160px, #805ad5, 200px, 350px);
}

// this
.full-circle-2 {
  @include fullCircle(
    180px,
    linear-gradient(225deg, #fbd38d, #ed8936),
    220px,
    -50px
  );
}

.cut-circle-2 {
  @include cutCircle(80px, #4a5568, -50px, -50px);
}

.full-circle-4 {
  @include fullCircle(
    180px,
    linear-gradient(225deg, #e53e3e, #feb2b2),
    220px,
    -50px
  );
}

.cut-circle-4 {
  @include cutCircle(80px, #ecc94b, -50px, -50px);
}

// this
.full-circle-3 {
  @include fullCircle(
    200px,
    linear-gradient(225deg, #9ae6b4, #48bb78),
    -100px,
    340px
  );
}

.cut-circle-3 {
  @include cutCircle(60px, #38b2ac, -100px, 300px);
}

@media only screen and (max-width: 600px) {
  .hero-section-wrapper {
    margin: 40px 0px;
  }

  .hero-section-container {
    flex-wrap: wrap;
    font-size: 12px;

    .meta-data {
      font-size: 12px;
    }

    .video-container {
      min-width: 100%;
      max-width: 100%;
      margin-left: 0px !important;
      margin-right: 0px !important;

      margin-top: 50px;
    }
  }

  .full-circle-1 {
    @include fullCircle(
      60px,
      linear-gradient(135deg, #805ad5, #d6bcfa),
      -40px,
      220px
    );
  }

  .cut-circle-1 {
    @include cutCircle(100px, #4299e1, 120px, 220px);
  }

  .full-circle-5 {
    @include fullCircle(
      60px,
      linear-gradient(45deg, #5a67d8, #7f9cf5),
      -40px,
      220px
    );
  }

  .cut-circle-5 {
    @include cutCircle(100px, #805ad5, 120px, 220px);
  }

  // this
  .full-circle-2 {
    @include fullCircle(
      120px,
      linear-gradient(225deg, #fbd38d, #ed8936),
      120px,
      -50px
    );
  }

  .cut-circle-2 {
    @include cutCircle(40px, #4a5568, -50px, -50px);
  }

  .full-circle-4 {
    @include fullCircle(
      120px,
      linear-gradient(225deg, #e53e3e, #feb2b2),
      120px,
      -50px
    );
  }

  .cut-circle-4 {
    @include cutCircle(40px, #ecc94b, -50px, -50px);
  }

  // this
  .full-circle-3 {
    @include fullCircle(
      100px,
      linear-gradient(225deg, #9ae6b4, #48bb78),
      -60px,
      240px
    );
  }

  .cut-circle-3 {
    @include cutCircle(30px, #38b2ac, -100px, 200px);
  }
}
</style>
