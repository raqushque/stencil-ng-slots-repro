import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'simple-component-default-slot',
  styleUrl: 'simple-component-default-slot.scss',
  shadow: false,
})
export class SimpleComponentDefaultSlot {
  render() {
    return (
      <Host class="simple-component-no-shadow">
        <div class="simple-component-no-shadow__description-container">
          <span class="simple-component-no-shadow__description">
            This component does not use Shadow DOM and has default slot.
          </span>
        </div>
        <p class="simple-component-no-shadow__slot-boundary-description">
          Content with slot="content" should be slotted after this paragraph...
        </p>
        <slot name="content"></slot>
        <p class="simple-component-no-shadow__slot-boundary-description">
          ...and before this paragraph.
        </p>
        <div class="simple-component-no-shadow__default-slot-container">
          <p class="simple-component-no-shadow__slot-boundary-description">
            This is a default slot container
          </p>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
