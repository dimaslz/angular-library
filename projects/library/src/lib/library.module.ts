import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LibraryComponent } from './library.component';

@NgModule({
  declarations: [LibraryComponent],
  imports: [CommonModule],
  exports: [LibraryComponent],
})
export class LibraryModule {}
