<template>
  <nav class="main-menu" :class="{middleLogo: middleLogo}">
    <ol>
      <li v-if="!middleLogo">
        <a href="/" class="logo">The Brand</a>
      </li>
      <li>
        <a href="/watches">Watches</a>
      </li>
      <li>
        <a href="/jewellery">Jewellery</a>
      </li>
      <li>
        <a href="/wedding">Wedding</a>
      </li>
      <li v-if="middleLogo">
        <a href="/" class="logo">The Brand</a>
      </li>
      <li>
        <a href="/academy">Academy</a>
      </li>
      <li>
        <a href="/company">Company</a>
      </li>
      <li>
        <a href="/stores">Stores</a>
      </li>
    </ol>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainMenu',
  props: {
    middleLogo: Boolean,
  },
});
</script>

<style lang="scss">
.main-menu {
  font-family: 'MinionProRegular', 'Times New Roman', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 2em;

  // @include media-breakpoint-down(md) {
  //   // TODO
  //   display: none;
  // }

  ol {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 1;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    text-transform: uppercase;
  }

  a {
    color: black;

    font-weight: bold;
    font-size: .9rem;
    letter-spacing: 1.3px;
  }
}
</style>
