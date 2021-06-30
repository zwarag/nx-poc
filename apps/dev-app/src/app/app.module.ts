import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from '@nx-poc/lib-core/button/button.module';
import { UnorderedListModule } from '@nx-poc/lib-core/unordered-list/unordered-list.module';
import { ButtonExperimentalModule } from '@nx-poc/lib-extend/button-experimental';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, UnorderedListModule, ButtonExperimentalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
