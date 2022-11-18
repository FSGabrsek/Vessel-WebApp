import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PersonalListModule } from './features/personal-list/personal-list.module';
import { AboutModule } from './features/about/about.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        PersonalListModule,
        AboutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
