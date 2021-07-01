<template>
  <span class="icon" v-html="iconHtml"></span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Icon',
  props: {
    name: String,
  },
  data: function() {
    return {
      iconHtml: '',
      iconUrl: '',
    };
  },
  created() {
    this.fetchIcon();
  },
  watch: {
    async name() {
      this.fetchIcon();
    },
  },
  methods: {
    async fetchIcon() {
      if (!this.name) {
        this.iconHtml = '';
        return;
      }

      // save URL in data because of eslint rule "no-var-requires"
      this.iconUrl = require(`@/assets/icons/${this.name}` + '.svg');
      const response = await fetch(this.iconUrl)

      if (response.ok) {
        this.iconHtml = await response.text();
      }
    },
  },
});
</script>

<style lang="scss">
.icon {
  display: inline-block;
  line-height: 1;

  svg {
    width: 1em;
    height: 1em;
  }
}
</style>
