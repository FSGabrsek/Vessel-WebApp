import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaListItemComponent } from './components/media-list-item/media-list-item.component';



@NgModule({
  declarations: [
    MediaListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MediaListItemComponent
  ]
})
export class SharedModule { }
