<template>
  <div class="custom-agile-container-component agile">
    <agile>
      <slot></slot>
    </agile>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";
export default {
  components: {
    agile: VueAgile
  }
};
</script>

<style lang="scss">
// Slides styles
// .slide {
//   display: block;
//   height: 500px;
//   object-fit: cover;
//   width: 100%;
// }
</style>
