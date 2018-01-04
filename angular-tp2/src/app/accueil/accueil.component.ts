import { Component, OnInit } from '@angular/core';
import {CHAMPIONS} from './wsdummy'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  champions=CHAMPIONS;

  constructor() { }

  ngOnInit() {
  }

}
