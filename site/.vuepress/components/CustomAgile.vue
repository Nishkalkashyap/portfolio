<template>
  <div class="custom-agile-container-component">
    <agile :autoplay-speed="5000" ref="carousel">
      <!-- <svg class="prev my-arrow" slot="prevButton" v-html="svgs.triangle.shape" viewBox="0 0 30 30" />
      <svg class="next my-arrow" slot="nextButton" v-html="svgs.triangle.shape" viewBox="0 0 30 30" />-->
      <div class="butt" slot="prevButton"><</div>
      <div class="butt" slot="nextButton">></div>

      <slot></slot>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
import { svgs } from "./landing-components/svg";
export default {
  components: {
    agile: VueAgile
  },
  data() {
    return {
      svgs
    };
  },
  mounted() {
    this.$refs.carousel.reload();
    setTimeout(() => {
      this.$refs.carousel.reload();
    }, 5000);
  }
};
</script>

<style lang="scss" scoped>
div.butt {
  font-weight: 900;
  padding: 1px 6px;
  border-radius: 5px;
  line-height: 40px;

  box-shadow: var(--gradient-shadow) 0px 10px 15px;
  background-image: var(--gradient);
  transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 600px) {
  div.butt {
    font-size: 18px;
    padding: 1px 2px !important;
    width: 18px;
  }
}
</style>
