<template>
  <div class="custom-agile-container-component">
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
</style>
