<template>
  <div class="properties" :style="{maxHeight: maxHeight}">
    <div class="property" v-for="item in items" :key="item.title">
      <!-- <img :src="item.icon" /> -->
      <Icon :name="item.icon" />
      <div class="title serif">{{ item.title }}</div>
      <div class="text">{{ item.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface PropertyListItem {
  title: string;
  text: string;
  icon: string;
}

export default defineComponent({
  name: 'PropertyList',
  props: {
    items: Array as PropType<PropertyListItem[]>,
  },
  computed: {
    maxHeight(): string {
      if (!this.items) {
        return 'auto';
      }

      return 4 * Math.ceil(this.items.length / 2) + 'rem';
    },
  },
});
</script>

<style scoped lang="scss">
.properties {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 12rem;

  font-size: .9rem;
  line-height: 1;
  margin: 3rem 0;
}

.property {
  padding: .9rem 1.5rem;
  display: inline-block;
  flex: 0 1;
  width: calc(50% - 3rem);
  position: relative;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;

    border-bottom: 1px solid $color-grey-light;
    width: 16rem;
  }
}

.icon {
  font-size: 1.9rem;
  color: $color-primary;
  float: left;
  margin-right: 2.65rem;
}

.title {
  color: $color-grey-medium;
  margin-bottom: .3rem;
}

.text {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: .07rem;
}
</style>
