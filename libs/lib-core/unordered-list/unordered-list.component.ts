import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-poc-unordered-list',
  template: `
    <ul>
      <li *ngFor="let element of data">
        {{ element }}
      </li>
    </ul>
  `,
  styles: [],
})
export class UnorderedListComponent {
  @Input()
  data: Array<string>;

  constructor() {
    this.data = ['first', 'second', 'third'];
  }
}
