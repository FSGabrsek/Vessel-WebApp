import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalListRoutingModule } from './personal-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateMediaComponent } from './pages/create-media/create-media.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewMediaComponent } from './pages/view-media/view-media.component';
import { MediaListItemComponent } from './components/media-list-item/media-list-item.component';


@NgModule({
  declarations: [
    CreateMediaComponent,
    ViewMediaComponent,
    MediaListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonalListRoutingModule,
    SharedModule,
  ]
})
export class PersonalListModule { }
