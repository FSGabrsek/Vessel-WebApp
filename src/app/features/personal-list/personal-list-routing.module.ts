import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaDetailComponent } from './components/media-detail/media-detail.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalListRoutingModule { }
