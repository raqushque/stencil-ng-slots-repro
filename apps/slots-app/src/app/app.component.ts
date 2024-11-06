import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyComponentModule } from '@rockssh/slots-wrapper';

@Component({
  standalone: true,
  imports: [ RouterModule, MyComponentModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'slots-app';
}
