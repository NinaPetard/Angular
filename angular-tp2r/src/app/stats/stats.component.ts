import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Champion} from '../champion'
import {ChampionService}  from '../champion.service';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

@Input() champion: Champion;

constructor(
  private route: ActivatedRoute,
  private championService: ChampionService,
  private location: Location
) {}

  ngOnInit(): void {
    this.getChamp();
  }

  getChamp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.championService.getChampId(id)
      .subscribe(champion => this.champion = champion);
  }




}
