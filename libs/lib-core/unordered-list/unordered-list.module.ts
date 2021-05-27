import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnorderedListComponent } from './unordered-list.component';



@NgModule({
  declarations: [UnorderedListComponent],
  imports: [
    CommonModule
  ],
  exports: [UnorderedListComponent]
})
export class UnorderedListModule { }
