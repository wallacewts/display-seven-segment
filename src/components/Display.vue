<template>
  <div class="container">
    <div class="grid">
      <div class="a">
        <div></div>
      </div>
      <div class="b">
        <div></div>
      </div>
      <div class="c">
        <div></div>
      </div>
      <div class="d">
        <div></div>
      </div>
      <div class="e">
        <div></div>
      </div>
      <div class="f">
        <div></div>
      </div>
      <div class="g">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  name: 'Display',
})
export default class Display extends Vue {}
</script>

<style lang="scss">
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48rem;

    .grid {
      display: grid;
      grid-template-areas:
        ". a a a ."
        "f . . . b"
        "f . . . b"
        "f . . . b"
        ". g g g ."
        "e . . . c"
        "e . . . c"
        "e . . . c"
        ". d d d ."
      ;
      width: 25rem;
      height: 90%;
      row-gap: 1rem;
      margin: 5rem 0;

      & > div {
        background-color: #5d5d5d;
        position: relative;
      }

      .a:before, .d:before, .g:before {
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        border-right-color: #5d5d5d;
        border-width: 2rem;
        left: -2rem;
        top: 0rem;
        margin-left: -2rem;
      }

      .b:before, .c:before, .e:before, .f:before {
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        border-bottom-color: #5d5d5d;
        border-width: 2.5rem;
        left: 50%;
        top: -5rem;
        margin-left: -2.5rem;
      }

      .b > div:before, .c > div:before, .e > div:before, .f > div:before {
        top: 100%;
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        border-top-color: #5d5d5d;
        border-width: 2.5rem;
        margin-left: -2.5rem;
        left: 50%;
      }

      .a > div:before, .d > div:before, .g > div:before {
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        border-left-color: #5d5d5d;
        border-width: 2rem;
        right: -4rem;
        top: -.07rem;
        margin-left: -2rem;
      }

      .a {
        grid-area: a;
      }

      .b {
        grid-area: b;
      }

      .c {
        grid-area: c;
      }

      .d {
        grid-area: d;
      }

      .e {
        grid-area: e;
      }

      .f {
        grid-area: f;
      }

      .g {
        grid-area: g;
      }
    }
  }
</style>
