import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'simple-component',
  styleUrl: 'simple-component.scss',
  shadow: true,
})
export class SimpleComponent {
  render() {
    return (
      <Host class="simple-component">
        <div class="simple-component__description-container">
          <span class="simple-component__description">
            This component uses Shadow DOM.
          </span>
        </div>
        <p class="simple-component__slot-boundary-description">
          Content with slot="content" should be slotted after this paragraph...
        </p>
        <slot name="content"></slot>
        <p class="simple-component__slot-boundary-description">
          ...and before this paragraph.
        </p>
        <div class="simple-component__default-slot-container">
          <p class="simple-component__slot-boundary-description">
            This is a default slot container
          </p>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
