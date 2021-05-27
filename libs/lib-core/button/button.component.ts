import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-org-poc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  text: string;
  padding: number;

  constructor() {
    this.text = "button works!";
    this.padding = 5;
  }

}
