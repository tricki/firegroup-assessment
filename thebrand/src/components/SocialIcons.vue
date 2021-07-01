<template>
  <div class="social-icons">
    <a v-for="item in socials" :key="item.title" :href="item.url" target="_blank" class="social-icon" :title="item.title">
      <Icon :name="item.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SocialIcons',
  data() {
    return {
      socials: [
        {
          title: 'Facebook',
          icon: 'facebook',
          url: 'https://de-de.facebook.com/FIREGROUPcom',
        },
        {
          title: 'Twitter',
          icon: 'twitter',
          url: 'https://twitter.com/firegroupcom',
        },
        {
          title: 'YouTube',
          icon: 'youtube',
          url: 'https://www.youtube.com/c/Firegroup',
        },
        {
          title: 'Instagram',
          icon: 'instagram',
          url: 'https://www.instagram.com/team.firegroup/',
        },
        {
          title: 'LinkedIn',
          icon: 'linkedin',
          url: 'https://www.linkedin.com/company/firegroup-gmbh',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem;
  height: 2.8rem;
  margin-right: .5rem;

  background-color: $color-grey-light;
  color: black;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    background-color: darken($color-grey-light, 10);
  }
}
</style>
