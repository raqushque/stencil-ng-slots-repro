/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, NgModule } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import type { Components } from '@rockssh/slots/dist/components';

import { defineCustomElement as defineSimpleComponent } from '@rockssh/slots/dist/components/simple-component.js';
import { defineCustomElement as defineSimpleComponentDefaultSlot } from '@rockssh/slots/dist/components/simple-component-default-slot.js';
import { defineCustomElement as defineSimpleComponentNoShadow } from '@rockssh/slots/dist/components/simple-component-no-shadow.js';
@ProxyCmp({
  defineCustomElementFn: defineSimpleComponent
})
@Component({
  selector: 'simple-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SimpleComponent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [SimpleComponent],
  exports: [SimpleComponent]
})
export class SimpleComponentModule { }


export declare interface SimpleComponent extends Components.SimpleComponent {}


@ProxyCmp({
  defineCustomElementFn: defineSimpleComponentDefaultSlot
})
@Component({
  selector: 'simple-component-default-slot',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SimpleComponentDefaultSlot {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [SimpleComponentDefaultSlot],
  exports: [SimpleComponentDefaultSlot]
})
export class SimpleComponentDefaultSlotModule { }


export declare interface SimpleComponentDefaultSlot extends Components.SimpleComponentDefaultSlot {}


@ProxyCmp({
  defineCustomElementFn: defineSimpleComponentNoShadow
})
@Component({
  selector: 'simple-component-no-shadow',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class SimpleComponentNoShadow {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


@NgModule({
  declarations: [SimpleComponentNoShadow],
  exports: [SimpleComponentNoShadow]
})
export class SimpleComponentNoShadowModule { }


export declare interface SimpleComponentNoShadow extends Components.SimpleComponentNoShadow {}


