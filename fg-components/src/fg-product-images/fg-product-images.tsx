import { Component, h, Prop, State, Watch } from '@stencil/core';

import openSVG from './assets/open.svg?format=text';

@Component({
  tag: 'fg-product-images',
  styleUrl: 'fg-product-images.scss',
})
export class FgProductImages {

  @Prop() images: string[];

  @Watch('images')
  imagesChanged() {
    if (!this.images || !this.images.length) {
      return;
    }

    this.currentImage = this.images[0];
  }

  @State() currentImage: string;

  componentWillLoad() {
    this.imagesChanged();
  }

  render() {
    return (
      <section>
        <aside>
          <ol>
            {this.images.map(src => (
              <li
                class={{ 'is-current': src === this.currentImage }}
                style={{ backgroundImage: `url(${src})` }}
                onClick={() => this.currentImage = src}
              ></li>
            ))}
          </ol>
        </aside>
        <div class="current" style={{ backgroundImage: `url(${this.currentImage})` }}>
          <a class="open" title="Open image in new window" href={this.currentImage} target="_blank" innerHTML={openSVG}></a>
        </div>
      </section>
    );
  }

}
