<template>
  <div class="page">
    <div class="overview bg-alt">
      <div class="container">
        <div class="row g-lg-0">
          <div class="col col-12 col-md-5 order-2 order-md-1">
            <ProductImages :images="slideshowImages" />
          </div>
          <div class="col col-12 col-md-7 col-lg-6 offset-lg-1 order-1 order-md-2">
            <div class="subtitle">
              Piaget Watches
            </div>
            <h1>
              Piaget Altiplano Ultimate 910P
            </h1>
            <div class="offset-lg-2">
              <div class="price subtitle serif">
                CHF 35'700.00
              </div>
              <div class="serial">
                Watch GOA39111
              </div>
              <div>
                <p class="serif large">
                  The thinnest hand-wound mechanical watches
                  in the world. Manufacture Piaget 910P ultra-thin,
                  hand-wound mechanical movement.
                </p>
                <p>
                  <button class="anim" type="button">Add to shopping bag</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row g-0 link-row">
          <div class="col col-md-5 show-details">
            <a href="#product-details">
              <Icon name="arrow-down" />
              Show Product Details
            </a>
          </div>
          <div class="col col-md-7">
            <a href="#n">
              <Icon name="share" />
              Share
            </a>
            <a href="#n">
              <Icon name="wishlist" />
              Wish List
            </a>
            <a href="#n">
              <Icon name="search" />
              Compare
            </a>
            <a href="#n">
              <Icon name="enquiry" />
              Enquire
            </a>
          </div>
        </div>
      </div>
    </div>

    <a name="product-details"></a>
    <div class="main-section details">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-md-8 mt-md-3">
            <div class="subtitle text-offset">Product Details</div>
            <h2 class="text-offset">Piaget Altiplano Ultimate 910P</h2>
            <PropertyList :items="detailItems"></PropertyList>
          </div>
          <div class="col col-12 col-md-4">
            <div class="img" :style="{ backgroundImage: `url(${images[1]})` }"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-section description">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-md-4 rel">
            <div class="img" :style="{ backgroundImage: `url(${images[2]})` }"></div>
            <div class="img img-floating" :style="{ backgroundImage: `url(${images[4]})` }"></div>
          </div>
          <div class="col col-12 col-md-6 offset-md-1">
            <div class="subtitle">Product Description</div>
            <h2>The world's thinnest Automatic Watch</h2>
            <div class="col offset-md-2">
              <p class="serif large">
                The thinnest hand-wound mechanical watches
                in the world. Manufacture Piaget 910P ultra-thin,
                hand-wound mechanical movement.
              </p>
              <p>
                The Altiplano 38 mm watch is a unique concept, and resolutely
                proud of its status as one of the thinnest and most elegant me&shy;chanical
                timepieces in the world. Blending hand-wound calibre
                and external features into a single concept, the watch has been de&shy;signed
                as a whole unit and is only 3.65 mm thick.
              </p>
              <p>
                The culmination of over half a century of virtuoso craftsmanship
                in the field of ultra-thin watchmaking, a domain in which Piaget
                reigns supreme, this luxury watch symbolises all the excelence.
              </p>
              <p>
                <button class="anim" type="button">Add to shopping bag</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="main-section specs">
      <div class="container">
        <div class="row">
          <div class="col col-12 col-md-8 mt-3">
            <div class="subtitle text-offset">Specifications</div>
            <h2 class="text-offset">Product Characteristics</h2>
            <PropertyList :items="specItems"></PropertyList>
          </div>
          <div class="col col-12 col-md-4 rel">
            <div class="img" :style="{ backgroundImage: `url(${images[3]})` }"></div>
            <VideoThumb class="img img-floating" :thumbnail="images[5]">
              <img src="@/assets/icons/play.svg" />
            </VideoThumb>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-dark">
      <div class="container">
        <div class="row link-row link-row--final">
          <a href="#top" class="col col-md-4">
            <Icon name="arrow-up" />
            Close Product Details
          </a>
          <a href="#n" class="col col-md-4">
            <Icon name="bag" />
            Add to the Shopping Bag
          </a>
          <a href="#n" class="col col-md-4">
            <Icon name="enquiry" />
            Make an Enquiry
          </a>
        </div>
      </div>
    </div>

    <div class="product-slider">
      <fg-product-slider fade :products="relatedProducts" ref="productSlider">
        <div class="subtitle">
          Altiplano Collection
        </div>
        <h3>
          Related Pieces
        </h3>

        <button class="round" @click.prevent="$refs.productSlider.goTo('>')">
          <Icon name="arrow-left" />
          Drag
        </button>
      </fg-product-slider>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.overview {
  > .container:first-child {
    padding-top: 6.5rem;
    padding-bottom: 6.5rem;
  }

  .link-row {
    background-color: $color-dark;

    a {
      line-height: 1;

      &:hover {
        background-color: $color-grey-dark-alt;
      }

      &:active {
        background-color: darken($color-grey-dark-alt, 10);
      }

      @include media-breakpoint-up(lg) {

        &:first-child {
          margin-left: 5rem;
        }

        &:last-child {
          margin-right: 4rem;
        }
      }
    }

    .icon {
      color: $color-grey-medium;
      margin-right: .2rem;
    }

    .show-details {
      background-color: white;

      a {
        display: block;
        background: white;
        color: black;
        margin-left: 0;
        margin-right: 0;

        &:hover {
          background-color: #fafafa;
        }

        &:active {
          background-color: darken(#fafafa, 10);
        }
      }

      .icon {
        color: $color-primary;
      }
    }
  }
}

.price {
  color: $color-primary;
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1;
  text-transform: uppercase;
  margin-bottom: 1.9rem;
}

.serial {
  color: $color-grey-medium;
  font-size: .65rem;
  letter-spacing: -.01rem;
  margin-bottom: .5rem;
}

.link-row {
  text-align: center;
  text-transform: uppercase;

  @include media-breakpoint-down(md) {
    flex-direction: column;
  }

  > div:last-child {
    display: flex;

    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }

  a {
    display: block;
    flex-grow: 1;
    padding: 2.3rem 0;
    color: white;
    font-size: .8rem;
    font-weight: bold;
    letter-spacing: .1rem;

    &:hover {
      text-decoration: none;
    }
  }

  .icon {
    vertical-align: middle;
    color: $color-primary;
  }
}

.details,
.description {

  p {
    color: $color-grey-medium;
  }
}

.text-offset {
  margin-left: 12.5%;
}

.img {
  background: $color-dark top center no-repeat;
  width: 100%;
  background-size: 25rem;

  @include media-breakpoint-down(md) {
    // size ususally set by parent row, but not in mobile mode
    min-height: 20rem;
  }

  @include media-breakpoint-up(md) {
    height: 100%;
  }
}

.img-floating {
  @include media-breakpoint-up(md) {
    position: absolute;
  }
}

.img + .img-floating {
  margin-top: 2rem;
}

.description {
  position: relative;

  @include media-breakpoint-down(md) {
    .col:nth-child(2) {
      margin-top: 3rem;
    }
  }

  .img {
    height: 27rem;
    background-size: 80rem;
    background-position: -21rem -4rem;
  }

  .img-floating {
    background-size: 19rem;
    background-position: 3rem -5rem;

    @include media-breakpoint-up(md) {
      top: 9rem;
      left: 5rem;
      width: 15rem;
    }

    @include media-breakpoint-up(lg) {
      top: 9rem;
      left: 9rem;
      width: 17rem;
    }

    @include media-breakpoint-up(xl) {
      top: 7rem;
      left: 13rem;
    }

    @include media-breakpoint-up(xxl) {
      left: 18rem;
    }
  }
}

.specs {
  position: relative;

  .img {
    background-size: 81rem;
    background-position: -22rem 2rem;
  }

  .img-floating {
    background-size: 28rem;
    background-position: 66% 73%;
    height: 11rem;

    @include media-breakpoint-up(md) {
      right: -.5rem;
      bottom: -6.2rem;
      width: 16rem;
    }

    @include media-breakpoint-up(lg) {
      right: 1.9rem;
    }
  }
}

.link-row--final {

  @include media-breakpoint-up(md) {
    margin-top: 16rem;
  }

  a {
    padding: 3.3rem 0 3.8rem;
    font-size: .85rem;

    &:nth-child(2) {
      background-color: $color-grey-dark-alt;
    }

    &:hover {
      background-color: $color-dark;
    }

    &:active {
      background-color: darken($color-dark, 10);
    }
  }

  .icon {
    margin-right: 2rem;
    font-size: 1.3rem;
  }
}

.product-slider {
  background-color: $color-darkest;
  overflow: hidden;
}

fg-product-slider {
  padding-top: 6rem;
  padding-bottom: 7rem;

  &::v-deep {

    .row > .col:first-child {
      margin-top: 5%;
    }

    .pagination {
      font-size: 1.1rem;
      margin-top: 2.7rem;
      margin-left: 2.3rem;
      color: $color-grey-medium;

      @include media-breakpoint-down(md) {
        margin-bottom: 2rem;
      }

      .current {
        color: white;
      }
    }

    .splide__slide {

      @include media-breakpoint-down(lg) {
        padding: 0 1.5rem 1.5rem;
      }

      .subtitle,
      small {
        color: $color-grey-medium;
      }
    }
  }

  button.round .icon {
    color: $color-primary;
    line-height: 2.3;
  }

  h3 {
    font-size: 2.2rem;
  }
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import PropertyList from '@/components/PropertyList.vue';
import ProductImages from '@/components/ProductImages.vue';

export default defineComponent({
  name: 'Home',
  components: {
    ProductImages,
    PropertyList,
  },
  computed: {
    slideshowImages(): string[] {
      if (!this.images) {
        return [];
      }

      return this.images.slice(0, 3);
    },
  },
  data() {
    return {
      images: [
        require('@/assets/products/piaget-altiplano-ultimate-910p-1.png'),
        require('@/assets/products/piaget-altiplano-ultimate-910p-2.png'),
        require('@/assets/products/piaget-altiplano-ultimate-910p-3.png'),
        require('@/assets/products/piaget-altiplano-ultimate-910p-4.png'),
        require('@/assets/products/piaget-altiplano-ultimate-910p-5.png'),
        require('@/assets/products/piaget-altiplano-ultimate-910p-6.png'),
      ],
      detailItems: [
        {
          title: 'Brand',
          text: 'Piaget',
          icon: 'strap',
        },
        {
          title: 'Collection',
          text: '60th Anniversary',
          icon: 'cogs',
        },
        {
          title: 'Movement',
          text: 'Automatic Movement',
          icon: 'watch-front',
        },
        {
          title: 'Warranty',
          text: '2 years',
          icon: 'watch-front-2',
        },
        {
          title: 'Gender',
          text: 'For Men',
          icon: 'watch-inside',
        },
        {
          title: 'Origin',
          text: 'Switzerland',
          icon: 'watch-wind',
        },
      ],
      specItems: [
        {
          title: 'Metal',
          text: 'Rose Gold / Silver',
          icon: 'strap',
        },
        {
          title: 'Metal Weight',
          text: '32.14',
          icon: 'cogs',
        },
        {
          title: 'Strap Type',
          text: 'Alligator',
          icon: 'watch-front',
        },
        {
          title: 'Strap Color',
          text: 'Black / Brown',
          icon: 'watch-back',
        },
        {
          title: 'Case Shape',
          text: 'Round',
          icon: 'watch-front-2',
        },
        {
          title: 'Case Diameter',
          text: '38 mm',
          icon: 'watch-inside',
        },
        {
          title: 'Case Thickness',
          text: '3.45 mm',
          icon: 'watch-wind',
        },
        {
          title: 'Water Resistance',
          text: '30 m / 02 ATM',
          icon: 'details',
        },
      ],
      relatedProducts: [
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39112/main.png'),
          price: 24900,
          serial: 'Watch GOA39112',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39113/main.png'),
          price: 24900,
          serial: 'Watch GOA39113',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39114/main.png'),
          price: 24900,
          serial: 'Watch GOA39114',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39112/main.png'),
          price: 24900,
          serial: 'Watch GOA39115',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39113/main.png'),
          price: 24900,
          serial: 'Watch GOA39116',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39114/main.png'),
          price: 24900,
          serial: 'Watch GOA39117',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39112/main.png'),
          price: 24900,
          serial: 'Watch GOA39118',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39113/main.png'),
          price: 24900,
          serial: 'Watch GOA39119',
        },
        {
          brand: 'Piaget',
          name: 'Altiplano',
          image: require('@/assets/products/GOA39114/main.png'),
          price: 24900,
          serial: 'Watch GOA39120',
        },
      ],
    };
  },
});
</script>
