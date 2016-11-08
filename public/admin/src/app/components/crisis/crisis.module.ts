import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {SubRouteComponent} from "./subroute/subroute.component";
import {AboutComponent} from "./about/about.component";
import {CrisisRoutingModule} from "./crisis-routing.module";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisRoutingModule
    ],
    declarations : [
        CrisisListComponent,
        SubRouteComponent,
        AboutComponent
    ]
})
export class CrisisModule {}