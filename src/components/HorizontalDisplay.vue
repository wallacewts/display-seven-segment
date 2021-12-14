<template>
  <div class="box" :class="{ active: paint }">
    <div class="arrow"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'HorizontalDisplay',
  props: {
    paint: Boolean,
  },
})
export default class HorizontalDisplay extends Vue {}
</script>

<style lang="scss" scoped>
  .box {
    position: relative;
    background-color: $gray;

    &:before {
      border: solid transparent;
      border-right-color: $gray;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      border-width: 2rem;
      left: -2rem;
      top: -.05rem;
      margin-left: -2rem;
    }

    .arrow:before {
      border: solid transparent;
      border-left-color: $gray;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      border-width: 2rem;
      right: -4rem;
      top: -.07rem;
      margin-left: -2rem;
    }
  }

  .active {
    background-color: $green;

    &:before {
      border-right-color: $green;
    }

    .arrow:before {
      border-left-color: $green;
    }
  }
</style>
