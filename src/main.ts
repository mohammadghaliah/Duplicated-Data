import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Duplicated Data</h1>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
