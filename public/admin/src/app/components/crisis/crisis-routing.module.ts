import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {SubRouteComponent} from "./subroute/subroute.component";
import {AboutComponent} from "./about/about.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'crisis',
                component: CrisisListComponent, 
                children: [
                    
                    {path: 'subroute', component: SubRouteComponent},
                    {path: 'about', component: AboutComponent},
                    {path:'', redirectTo:'/crisis/subroute'}
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class CrisisRoutingModule {}
