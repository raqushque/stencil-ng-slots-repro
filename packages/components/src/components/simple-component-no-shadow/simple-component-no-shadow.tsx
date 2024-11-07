import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'simple-component-no-shadow',
  styleUrl: 'simple-component-no-shadow.scss',
  shadow: false,
})
export class SimpleComponentNoShadow {
  render() {
    return (
      <Host class="simple-component-no-shadow">
        <div class="simple-component-no-shadow__description-container">
          <span class="simple-component-no-shadow__description">
            This component does not use Shadow DOM.
          </span>
        </div>
        <p class="simple-component-no-shadow__slot-boundary-description">
          Content with slot="content" should be slotted after this paragraph...
        </p>
        <slot name="content"></slot>
        <p class="simple-component-no-shadow__slot-boundary-description">
          ...and before this paragraph.
        </p>
      </Host>
    );
  }
}
