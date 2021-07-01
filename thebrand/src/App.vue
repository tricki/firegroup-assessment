<template>
  <div class="container">
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
    <nav class="main-menu">
      <ol>
        <li>
          <router-link to="/watches">Watches</router-link>
        </li>
        <li>
          <router-link to="/jewellery">Jewellery</router-link>
        </li>
        <li>
          <router-link to="/wedding">Wedding</router-link>
        </li>
        <li>
          <router-link to="/" class="logo">The Brand</router-link>
        </li>
        <li>
          <router-link to="/academy">Academy</router-link>
        </li>
        <li>
          <router-link to="/company">Company</router-link>
        </li>
        <li>
          <router-link to="/stores">Stores</router-link>
        </li>
      </ol>
    </nav>
  </div>
  <div class="breadcrumbs">
    <div class="container">
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

    &:last-child {
      margin-right: 0;
    }
  }

  .icon > svg {
    width: auto;
  }
}

.main-menu {
  font-family: 'MinionProRegular', 'Times New Roman', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 2em;

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

  .logo {
    font-size: 2rem;
    letter-spacing: 5px;
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
import AppFooter from '@/components/AppFooter.vue';

export default {
  components: {
    AppFooter,
  },
};
</script>