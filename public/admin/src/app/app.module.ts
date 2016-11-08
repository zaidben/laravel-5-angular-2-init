import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./components/root/app.component";
import {AppRoutingModule} from "./app-routing.module";
import {HeroesModule} from "./components/heroes/heroes.module";
import {CrisisModule} from "./components/crisis/crisis.module";



@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroesModule,
        CrisisModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}