import {NgModule} from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {HeroesListComponent} from "./heroes-list/heroes-list.component";
import {HeroesDetailComponent} from "./heroes-detail/heroes-detail.component";
import {HeroesRoutingModule} from "./heroes-routing.module";
import {HeroesService} from "../../services/heroes.service";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HeroesRoutingModule
    ],
    declarations : [
        HeroesListComponent,
        HeroesDetailComponent
    ],
    providers : [HeroesService]
})
export class HeroesModule {}