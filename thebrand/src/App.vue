<template>
  <MainMenuOverlay ref="mainMenuOverlay" />
  <div class="container">
    <div class="row">
      <div class="col col-12">
        <div class="quickbar">
          <div class="left">
            <a href="/contact" title="Contact"><Icon name="contact"></Icon></a>
            <a href="/stores" title="Stores"><Icon name="stores"></Icon></a>
            <a href="/#" title="Language"><Icon name="language"></Icon></a>
          </div>
          <div class="right">
            <a href="/cart" title="Cart"><Icon name="bag"></Icon></a>
            <a href="/wishlist" title="Wishlist"><Icon name="wishlist"></Icon></a>
            <a href="/login" title="Login"><Icon name="login"></Icon></a>
            <a href="/search" title="Search"><Icon name="search"></Icon></a>
          </div>
        </div>
        <MainMenu middle-logo />
        <div class="logo-bar">
          <a href="/" class="logo">The Brand</a>
          <a href="#menu" class="toggle-menu" @click.prevent="$refs.mainMenuOverlay.toggle()" title="Open Menu"></a>
        </div>
      </div>
    </div>
  </div>
  <div class="breadcrumbs">
    <div class="container g-0">
      <a href="#">Home</a>
      <span class="sep">/</span>
      <a href="#">Watches</a>
      <span class="sep">/</span>
      <a href="#">Men's Watches</a>
      <span class="sep">/</span>
      <a href="#">Piaget</a>
      <span class="sep">/</span>
      <span class="current">Piaget Altiplano Ultimate 910P</span>
    </div>
  </div>

  <router-view/>

  <AppFooter />
</template>

<style lang="scss">
.logo-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  @include media-breakpoint-up(md) {
    display: none;
  }

  .toggle-menu {
    position: absolute;
    right: 1rem;
    display: inline-block;
    width: 1.5rem;
    height: 1.2rem;
    border-top: .2em solid black;
    border-bottom: .2em solid black;

    &:before {
      content: "";
      position: absolute;
      top: .3em;
      left: 0;
      width: 100%;
      border-top: .2em solid black;
    }
  }
}


.main-menu {

  @include media-breakpoint-down(md) {

    &.middleLogo {
      display: none;
    }
  }
}

.quickbar {
  display: flex;
  justify-content: space-between;
  margin: 1.1rem 0 1.5rem;

  > div {
    display: flex;
    align-items: center;
  }

  a {
    display: inline-block;
    margin-right: 1.7em;
    color: black;

    &:hover {
      color: $color-primary;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  .icon > svg {
    width: auto;
  }
}

.breadcrumbs {
  background-color: $color-dark;
  color: #7e7e7e;
  padding: 1rem;
  font-size: .7rem;

  a {
    color: #7e7e7e;

    &:hover {
      color: white;
    }
  }

  .sep {
    margin: 0 .5rem;
  }

  .current {
    color: #ededed;
  }
}
</style>

<script lang="ts">
import MainMenu from '@/components/MainMenu.vue';
import MainMenuOverlay from '@/components/MainMenuOverlay.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    MainMenu,
    MainMenuOverlay,
    AppFooter,
  },
  data() {
    return {
      isMainMenuOpen: false,
    };
  },
};
</script>