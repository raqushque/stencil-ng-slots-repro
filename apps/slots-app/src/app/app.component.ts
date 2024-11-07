import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleComponentModule, SimpleComponentNoShadowModule, SimpleComponentDefaultSlotModule } from '@rockssh/slots-wrapper';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    SimpleComponentModule,
    SimpleComponentNoShadowModule,
    SimpleComponentDefaultSlotModule,
    NgIf,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'slots-app';
  showContent = false;
  exampleArray: number[] = [];
  pushToArray() {
    this.exampleArray.push(this.exampleArray.length + 1);
  }
}
