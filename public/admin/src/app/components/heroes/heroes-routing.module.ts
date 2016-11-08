import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroesListComponent }    from './heroes-list/heroes-list.component';
import { HeroesDetailComponent }  from './heroes-detail/heroes-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'heroes',  component: HeroesListComponent },
      { path: 'heroes/:id', component: HeroesDetailComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }