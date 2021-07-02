<template>
  <fg-product-images :images="images"></fg-product-images>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductImages',
  props: {
    images: Array,
  },
});
</script>

<style lang="scss">
fg-product-images {

  @include media-breakpoint-down(lg) {
    > section {
      flex-direction: column;
    }

    .current {
      width: 100%;
      background-size: 100%;
    }

    aside {
      order: 2;
      width: 100%;
      margin: 0;
      margin-top: 1rem;

      > ol {
        display: flex;
      }

      li {
        width: 6rem;
        height: 6rem;
        margin-bottom: 0;
        margin-right: 0.75rem;
      }
    }
  }
}
</style>
