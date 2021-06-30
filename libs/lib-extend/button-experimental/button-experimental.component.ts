import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonComponent } from '@nx-poc/lib-core/button';

@Component({
  selector: 'nx-poc-experimental-button-experimental',
  templateUrl: './button-experimental.component.html',
  styleUrls: ['./button-experimental.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonExperimentalComponent extends ButtonComponent {
  color: string;

  constructor() {
    super();
    super.text = `Experimental button works!`;
    super.padding = 20;
    this.color = 'lightblue';
  }
}
