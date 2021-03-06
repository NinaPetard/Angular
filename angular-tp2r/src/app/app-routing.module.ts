import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AccueilComponent} from './accueil/accueil.component'
import {StatsComponent} from './stats/stats.component'





const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'stats/:id', component: StatsComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
