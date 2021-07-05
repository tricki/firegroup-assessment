<template>
  <footer class="container">
    <div class="row">
      <div class="col col-12 col-sm-6 col-md-3">
        <address>
          <p>
            <span class="brand serif">
              The Brand
            </span><br />
            Walchestrasse 9<br />
            8006 Zürich
          </p>
          <table>
            <tr>
              <th>T</th>
              <td>+41 (0) 10 20 30 40</td>
            </tr>
            <tr>
              <th>F</th>
              <td>+41 (0) 50 60 70 80</td>
            </tr>
            <tr>
              <th>M</th>
              <td><a href="mailto:contact@thebrand.com">contact@thebrand.com</a></td>
            </tr>
          </table>
        </address>
      </div>
      <div class="col col-12 col-sm-6 col-md-3">
        <h5>Customer Care</h5>
        <ol class="links">
          <li>
            <a href="#">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#">
              Track your order
            </a>
          </li>
          <li>
            <a href="#">
              Returns
            </a>
          </li>
          <li>
            <a href="#">
              FAQ's
            </a>
          </li>
          <li>
            <a href="#">
              Location Finder
            </a>
          </li>
          <li>
            <a href="#">
              Service
            </a>
          </li>
          <li>
            <a href="#">
              Product Care
            </a>
          </li>
          <li>
            <a href="#">
              Gift Cards
            </a>
          </li>
          <li>
            <a href="#">
              Sell your jewellery
            </a>
          </li>
        </ol>
      </div>
      <div class="col col-12 col-sm-6 col-md-3">
        <h5>Our Company</h5>
        <ol class="links">
          <li>
            <a href="#">
              News
            </a>
          </li>
          <li>
            <a href="#">
              Career
            </a>
          </li>
          <li>
            <a href="#">
              Press
            </a>
          </li>
          <li>
            <a href="#">
              Social
            </a>
          </li>
        </ol>
        <h5>Our Company</h5>
        <ol class="links">
          <li>
            <a href="#">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#">
              Cookie Policy
            </a>
          </li>
          <li>
            <a href="#">
              Terms &amp; Conditions
            </a>
          </li>
          <li>
            <a href="#">
              Impressum
            </a>
          </li>
        </ol>
      </div>
      <div class="col col-12 col-sm-6 col-md-3">
        <h5>Stay in Touch</h5>
        <ol class="links">
          <li>
            <a href="#">
              Sign up to our Newsletter
            </a>
          </li>
          <li>
            <a href="#">
              Magazine Download
            </a>
          </li>
        </ol>
        <SocialIcons />
      </div>
    </div>
    <div class="row socket">
      <div class="col">
        &copy; Copyright 2018 The Brand
      </div>
      <div class="col right">
        <a href="#top" @click.prevent="scrollToTop">
          Back to top
          <Icon name="arrow-up" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SocialIcons from '@/components/SocialIcons.vue';

export default defineComponent({
  name: 'AppFooter',
  components: {
    SocialIcons,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
});
</script>

<style lang="scss" scoped>
footer {
  padding-top: 5rem;
  font-size: .9rem;
  line-height: 1.4;
  letter-spacing: -.03rem;
}

h5 {
  text-transform: uppercase;
  font-size: .9rem;
  letter-spacing: .08rem;
  margin-top: 1rem;
  margin-bottom: .8rem;
}

.links {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 1.5rem;
  line-height: 1.7;

  a {
    color: $color-grey-medium;
  }
}

address {
  font-style: normal;

  p:first-child {
    line-height: 2.3;
    margin-bottom: 1.3rem;
  }

  th {
    text-align: left;
    width: 1.6rem;
  }
}

.brand {
  font-size: 1.25rem;
  line-height: 1.6;
  margin-top: 11px;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: .165rem;
}

.social-icons {
  margin-top: 3.5rem;
}

.socket {
  border-top: 1px solid #DCDCDC;
  padding: 2rem 0;
  margin-top: 2rem;

  *,
  a {
    color: $color-grey-medium;
  }

  .icon {
    vertical-align: middle;
  }

  .right {
    text-align: right;
  }
}
</style>
