import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ButtonComponent } from '@my-org/lib-core/button'

@Component({
  selector: 'my-org-experimental-button-experimental',
  templateUrl: './button-experimental.component.html',
  styleUrls: ['./button-experimental.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonExperimentalComponent extends ButtonComponent {

  color: string;

  constructor() {
    super();
    super.text = `Experimental button works!`
    super.padding = 20
    this.color = 'lightblue'
  }

}
