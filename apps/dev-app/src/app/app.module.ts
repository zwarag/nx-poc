import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonModule } from '@my-org/lib-core/button/button.module';
import { UnorderedListModule } from '@my-org/lib-core/unordered-list/unordered-list.module';
import { ButtonExperimentalModule } from '@my-org/lib-extend/button-experimental'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, UnorderedListModule, ButtonExperimentalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
