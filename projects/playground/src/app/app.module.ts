import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibraryModule } from '../../../library/src/public-api';
import { CommonModule } from '@angular/common';
import { AngularIconComponent } from './angular-icon.component';

@NgModule({
  declarations: [AppComponent, AngularIconComponent],
  imports: [BrowserModule, CommonModule, LibraryModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
