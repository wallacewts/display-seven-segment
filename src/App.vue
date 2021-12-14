<template>
  <Display />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Display from '@/components/Display.vue';

@Options({
  components: {
    Display,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    height: 100%;
    background-color: black;
  }
</style>
