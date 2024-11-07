## stencil-ng-slots-repro

This is a demo of issues with [StencilJS](https://github.com/ionic-team/stencil) components when used in Angular app.

### An issue

Prerequisites
- Stencil component with `shadow: false` and named slot.

Elements are being "slotted" incorrectly if added at runtime (with Angular's @if, for example). Elements are inserted into default slot if it exists and as a first child of component if it does not.

Stencil component with `shadow: true` works as expected.

### Running the demo

`npm i`

`npm run start`

### About the demo

Demo app has multiple examples, utilizing three Stencil components with (mostly) same structure.
- `simple-component`: has both Shadow DOM and default slot. Works as expected.
- `simple-component-no-shadow`: no Shadow DOM, no default (unnamed) slot.
- `simple-component-default-slot`: no Shadow DOM, has default slot.

