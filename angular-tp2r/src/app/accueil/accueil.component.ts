import { Component, OnInit } from '@angular/core';
import{ChampionService} from '../champion.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  champions=Champions[];
  constructor(private championService: ChampionService) { }

  ngOnInit() {
this.getchamps();
  }

  getchamps(): void {
     this.championService.getHeroes()
     .subscribe(champions => this.champions = champions);
   }
}
