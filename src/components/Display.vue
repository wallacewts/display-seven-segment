<template>
  <div class="container">
    <div class="grid" @click="incrementCount">
      <HorizontalDisplay class="a" :paint="paintA" />
      <VerticalDisplay class="b" :paint="paintB" />
      <VerticalDisplay class="c" :paint="paintC" />
      <HorizontalDisplay class="d" :paint="paintD" />
      <VerticalDisplay class="e" :paint="paintE" />
      <VerticalDisplay class="f" :paint="paintF" />
      <HorizontalDisplay class="g" :paint="paintG" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import VerticalDisplay from '@/components/VerticalDisplay.vue';
import HorizontalDisplay from '@/components/HorizontalDisplay.vue';
import { IPaint } from '@/interfaces/paint.interface';

@Options({
  name: 'Display',
  components: {
    VerticalDisplay,
    HorizontalDisplay,
  },
  data() {
    return {
      count: 0,
      paintA: true,
      paintB: true,
      paintC: true,
      paintD: true,
      paintE: true,
      paintF: true,
      paintG: false,
    };
  },
  methods: {
    incrementCount(): void {
      if (this.count === 9) {
        this.count = 0;
      } else {
        this.count += 1;
      }

      this.paintDisplay();
    },
    paintDisplay(): void {
      const displaysToPaint: { [key: number]: IPaint } = {
        0: {
          paintA: true,
          paintB: true,
          paintC: true,
          paintD: true,
          paintE: true,
          paintF: true,
          paintG: false,
        },
        1: {
          paintA: false,
          paintB: true,
          paintC: true,
          paintD: false,
          paintE: false,
          paintF: false,
          paintG: false,
        },
        2: {
          paintA: true,
          paintB: true,
          paintC: false,
          paintD: true,
          paintE: true,
          paintF: false,
          paintG: true,
        },
        3: {
          paintA: true,
          paintB: true,
          paintC: true,
          paintD: true,
          paintE: false,
          paintF: false,
          paintG: true,
        },
        4: {
          paintA: false,
          paintB: true,
          paintC: true,
          paintD: false,
          paintE: false,
          paintF: true,
          paintG: true,
        },
        5: {
          paintA: true,
          paintB: false,
          paintC: true,
          paintD: true,
          paintE: false,
          paintF: true,
          paintG: true,
        },
        6: {
          paintA: true,
          paintB: false,
          paintC: true,
          paintD: true,
          paintE: true,
          paintF: true,
          paintG: true,
        },
        7: {
          paintA: true,
          paintB: true,
          paintC: true,
          paintD: false,
          paintE: false,
          paintF: false,
          paintG: false,
        },
        8: {
          paintA: true,
          paintB: true,
          paintC: true,
          paintD: true,
          paintE: true,
          paintF: true,
          paintG: true,
        },
        9: {
          paintA: true,
          paintB: true,
          paintC: true,
          paintD: false,
          paintE: false,
          paintF: true,
          paintG: true,
        },
      };
      const test = this.count as number;
      const display = displaysToPaint[test];

      this.setState(display);
    },
    setState(object: {[key: string]: string | number}): void {
      Object.assign(this, object);
    },
  },
})
export default class Display extends Vue {}
</script>

<style lang="scss" scoped>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48rem;

    .grid {
      cursor: pointer;
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
