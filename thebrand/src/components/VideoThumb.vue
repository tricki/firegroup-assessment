<template>
  <div class="video-thumb" :style="{ backgroundImage: `url(${thumbnail})` }">
    <img src="@/assets/icons/play.svg" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VideoThumb',
  props: {
    thumbnail: String,
    video: String,
  },
});
</script>

<style lang="scss">
.video-thumb {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    background: black;
    opacity: .3;
    transition: opacity .1s ease-in-out;
    transform-origin: center top;
  }

  &:hover {
    &::before {
      opacity: 0;
    }
  }

  img {
    position: relative;
    z-index: 1;
    width: 4rem;
  }
}
</style>
