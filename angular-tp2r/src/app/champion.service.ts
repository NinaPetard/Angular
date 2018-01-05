import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Champion } from './champion';
import { CHAMPIONS } from './wsdummy';


@Injectable()
export class ChampionService {
private championsUrl = 'http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json';
  constructor(
    private http: HttpClient) { }

    getchamps (): Observable<Champion[]> {
      return this.http.get<Champion[]>(this.championsUrl);
    }

  getChampId(id: string): Observable<Champion> {
    return of(CHAMPIONS.find(champion => champion.id === id));
  }
}
