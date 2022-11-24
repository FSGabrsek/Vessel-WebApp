import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalListRoutingModule } from './personal-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateMediaComponent } from './pages/create-media/create-media.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewMediaComponent } from './pages/view-media/view-media.component';
import { MediaDetailComponent } from './components/media-detail/media-detail.component';
import { MediaFormComponent } from './components/media-form/media-form.component';
import { MediaEditComponent } from './components/media-edit/media-edit.component';
import { MediaProgressComponent } from './components/media-progress/media-progress.component';


@NgModule({
    declarations: [
        CreateMediaComponent,
        ViewMediaComponent,
        MediaDetailComponent,
        MediaFormComponent,
        MediaEditComponent,
        MediaProgressComponent
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
