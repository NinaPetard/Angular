import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AppRoutingModule } from './/app-routing.module';
import { StatsComponent } from './stats/stats.component';
import{ChampionService} from './champion.service';
import {BarChartComponent } from 'angular-d3-charts';
import {HttpClientModule} from '@angular/common/http';

import {KeysPipe} from './keys.pipe'
//import { BarchartComponent } from './barchart/barchart.component';


@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    StatsComponent,
    BarChartComponent,
    KeysPipe
  ],
  imports: [
HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  AppRoutingModule,
  ],
  providers: [ChampionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
