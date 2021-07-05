/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ISliderProduct } from "./fg-product-slider/fg-product-slider";
export namespace Components {
    interface FgProductImages {
        "images": string[];
    }
    interface FgProductSlider {
        "fade": boolean;
        "goTo": (target: number | string) => Promise<void>;
        "products": ISliderProduct[];
    }
}
declare global {
    interface HTMLFgProductImagesElement extends Components.FgProductImages, HTMLStencilElement {
    }
    var HTMLFgProductImagesElement: {
        prototype: HTMLFgProductImagesElement;
        new (): HTMLFgProductImagesElement;
    };
    interface HTMLFgProductSliderElement extends Components.FgProductSlider, HTMLStencilElement {
    }
    var HTMLFgProductSliderElement: {
        prototype: HTMLFgProductSliderElement;
        new (): HTMLFgProductSliderElement;
    };
    interface HTMLElementTagNameMap {
        "fg-product-images": HTMLFgProductImagesElement;
        "fg-product-slider": HTMLFgProductSliderElement;
    }
}
declare namespace LocalJSX {
    interface FgProductImages {
        "images"?: string[];
    }
    interface FgProductSlider {
        "fade"?: boolean;
        "onSlideClick"?: (event: CustomEvent<{originalEvent: MouseEvent, product: ISliderProduct}>) => void;
        "products"?: ISliderProduct[];
    }
    interface IntrinsicElements {
        "fg-product-images": FgProductImages;
        "fg-product-slider": FgProductSlider;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fg-product-images": LocalJSX.FgProductImages & JSXBase.HTMLAttributes<HTMLFgProductImagesElement>;
            "fg-product-slider": LocalJSX.FgProductSlider & JSXBase.HTMLAttributes<HTMLFgProductSliderElement>;
        }
    }
}
