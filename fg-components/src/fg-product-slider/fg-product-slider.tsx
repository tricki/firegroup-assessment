import { Component, ComponentInterface, h, Host, Prop, State, Watch } from '@stencil/core';
import Splide from '@splidejs/splide';

import { formatCurrency } from '../utils/formatCurrency';

@Component({
  tag: 'fg-product-slider',
  styleUrl: 'fg-product-slider.scss'
})
export class FgProductSlider implements ComponentInterface {
  elSplide: HTMLDivElement;
  splide: Splide;

  @Prop() products: ISliderProduct[] = [];

  @Prop() fade = false;

  @Watch('fade')
  fadeChanged() {
    this.splide.options.perPage = this.getItemsPerPage();
    setTimeout(() => {
      // let the browser recalculate layout before
      // Splide recalculates item width
      this.splide.refresh();
    }, 0);
  }

  @State() currentIndex = 0;

  componentDidLoad() {
    this.initSlider();
  }

  initSlider() {
    this.splide = new Splide(this.elSplide, {
      perPage: this.getItemsPerPage(),
      gap: '1rem',
      arrows: false,
      pagination: false,
    }).mount();

    this.splide.on('active', () => {
      this.currentIndex = this.splide.index;
    });
  }

  getItemsPerPage(): number {
    return this.fade ? 4 : 3;
  }

  render() {
    return (
      <Host class={{
        container: true,
        faded: this.fade,
      }}>
        <div class="row g-0">

          <div class="col col-3">
            <div>
              <slot />

              <div class="pagination serif">
                <span class="current">{this.currentIndex + 1}</span>
                &nbsp;/&nbsp;
                <span class="total">{this.products.length}</span>
              </div>
            </div>
          </div>

          <div class="splide col col-9" ref={el => this.elSplide = el}>
            <div class="splide__track">
              <div class="splide__list">
                {this.products.map(product => (
                  <section class="splide__slide">
                    <img src={product.image} />
                    <div class="subtitle">{product.brand}</div>
                    <h4>{product.name}</h4>
                    <small>{product.serial}</small>
                    <div class="price serif">{formatCurrency(product.price)}</div>
                  </section>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Host>
    );
  }
}

export interface ISliderProduct {
  brand: string;
  name: string;
  image: string;
  price: number;
  serial: string;
}
