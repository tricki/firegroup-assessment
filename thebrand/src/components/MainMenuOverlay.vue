<template>
  <div class="main-menu-overlay" :class="{visible: isVisible}">
    <a href="#" class="close" @click.prevent="toggle(false)">&times;</a>
    <MainMenu />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainMenu from '@/components/MainMenu.vue';

export default defineComponent({
  name: 'MainMenuOverlay',
  components: {
    MainMenu,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    toggle(force: boolean) {
      if (undefined === force) {
        force = !this.isVisible;
      }

      this.isVisible = force;
    },
  },
});
</script>

<style lang="scss">
.main-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;

  transform: translateX(100%);
  transition: transform .3s ease;

  &.visible {
    transform: translateX(0);
  }

  .close {
    position: absolute;
    top: 0;
    right: 0;

    font-size: 3rem;
    line-height: 1;
    padding: 1rem;

    &:hover {
      text-decoration: none;
      color: black;
    }
  }

  ol {
    flex-direction: column;
    align-items: center;
  }

  a {
    display: inline-block;
    padding: 1rem;
  }

  // li {
  //   display: block;
  // }
}
</style>
