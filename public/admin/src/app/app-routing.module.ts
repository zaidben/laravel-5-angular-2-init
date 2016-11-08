import { NgModule }     from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', redirectTo: '/crisis/subroute', pathMatch: 'full' }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}