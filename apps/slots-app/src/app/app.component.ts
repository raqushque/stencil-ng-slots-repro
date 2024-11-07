import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleComponentModule, SimpleComponentNoShadowModule, SimpleComponentDefaultSlotModule } from '@rockssh/slots-wrapper';

@Component({
  standalone: true,
  imports: [ RouterModule, SimpleComponentModule, SimpleComponentNoShadowModule, SimpleComponentDefaultSlotModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'slots-app';
  showContent = false;
}
