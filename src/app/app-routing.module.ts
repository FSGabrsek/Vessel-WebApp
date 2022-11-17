import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateMediaComponent } from './features/personal-list/pages/create-media/create-media.component';
import { ViewMediaComponent } from './features/personal-list/pages/view-media/view-media.component';

const routes: Routes = [
    { path: "view-media", component: ViewMediaComponent },
    { path: "create-media", component: CreateMediaComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
