import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaDetailComponent } from './features/personal-list/components/media-detail/media-detail.component';
import { MediaEditComponent } from './features/personal-list/components/media-edit/media-edit.component';
import { CreateMediaComponent } from './features/personal-list/pages/create-media/create-media.component';
import { ViewMediaComponent } from './features/personal-list/pages/view-media/view-media.component';

const routes: Routes = [
    { path: "view-media", component: ViewMediaComponent, children: [
        { path: ":id", component: MediaDetailComponent },
        { path: ":id/edit-media", component: MediaEditComponent },
    ] },
    { path: "create-media", component: CreateMediaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
