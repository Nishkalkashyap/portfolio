<template>
  <div class="custom-agile-container-component">
    <agile>
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
  }
};
</script>

<style lang="scss" scoped>
div.butt {
  font-weight: 900;
  padding: 1px 6px;
  border-radius: 5px;

  box-shadow: rgba(52, 152, 219, 0.3) 0px 10px 15px;
  background-image: linear-gradient(
    30deg,
    rgb(90, 189, 255) 0%,
    rgb(71, 104, 180) 100%
  );
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
