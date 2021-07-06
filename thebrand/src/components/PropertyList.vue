<template>
  <div class="properties">
    <div class="column" v-for="(column, index) in columns" :key="index">
      <div class="property" v-for="item in column" :key="item.title">
        <Icon :name="item.icon" />
        <div class="title serif">{{ item.title }}</div>
        <div class="text">{{ item.text }}</div>
      </div>
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
    itemsPerColumn(): number {
      if (!this.items) {
        return 0;
      }

      return Math.ceil(this.items.length / 2);
    },
    columns(): [Array<PropertyListItem>, Array<PropertyListItem>] {
      const initial: [Array<PropertyListItem>, Array<PropertyListItem>] = [[], []];

      if (!this.items) {
        return initial;
      }

      // separate the items into 2 columns
      return this.items.reduce((acc, item: PropertyListItem, i: number) => {
        acc[i < this.itemsPerColumn ? 0 : 1].push(item);
        return acc;
      }, initial);
    },
  },
});
</script>

<style scoped lang="scss">
.properties {
  display: flex;

  font-size: .9rem;
  line-height: 1;
  margin: 3rem 0;

  @include media-breakpoint-down(sm) {
    flex-direction: column;
  }
}

.column {
  flex: 1 0 50%;

  // always remove border on last item in last column
  &:last-child :last-child::after {
    border-bottom: 0;
  }
}

.property {
  padding: .9rem 1.5rem;
  position: relative;
  white-space: nowrap;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;

    border-bottom: 1px solid $color-grey-light;
    width: 16rem;
  }

  // remove border on last item in column (if not wrapped)
  @include media-breakpoint-up(sm) {
    &:last-child::after {
      border-bottom: 0;
    }
  }
}

.icon {
  font-size: 1.9rem;
  color: $color-primary;
  float: left;
  margin-right: 2.65rem;

  @include media-breakpoint-down(lg) {
    margin-right: 1.5rem;
  }
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
