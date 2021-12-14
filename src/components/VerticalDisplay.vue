<template>
  <div class="box" :class="{ active: paint }">
    <div class="arrow"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'VerticalDisplay',
  props: {
    paint: Boolean,
  },
})
export default class VerticalDisplay extends Vue {}
</script>

<style lang="scss" scoped>
  .box {
    position: relative;
    background-color: $gray;

    &:before {
      border: solid transparent;
      border-bottom-color: $gray;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      border-width: 2.5rem;
      left: 50%;
      top: -5rem;
      margin-left: -2.5rem;
    }

    .arrow:before {
      border: solid transparent;
      border-top-color: $gray;
      top: 100%;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      border-width: 2.5rem;
      margin-left: -2.5rem;
      left: 50%;
    }
  }

  .active {
    background-color: $green;

    &:before {
      border-bottom-color: $green;
    }

    .arrow:before {
      border-top-color: $green;
    }
  }
</style>
