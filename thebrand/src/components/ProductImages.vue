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
      height: 25rem;
      background-size: 100%;
    }

    aside {
      order: 2;
      width: 100%;
      margin: 0;
      margin-top: 1rem;

      > ol {
        display: flex;
        justify-content: stretch;
      }

      li {
        flex-grow: 1;
        width: 6rem;
        height: 6rem;
        margin-bottom: 0;
        margin-right: .75rem;

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }

  @include media-breakpoint-down(md) {
    .current {
      width: 60%;
    }
  }
}
</style>
