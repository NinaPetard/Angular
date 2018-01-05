import { Component, OnInit } from '@angular/core';
//import { AppState } from '../app.service';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'barchart',
  styleUrls: ['./barchart.component.css'],
  templateUrl: './barchart.component.html'
})
export class BarChart {

  public colors = ['red', 'green', 'blue']
  public dataColumns = [1];
  public barChartData = [{
    id: 0,
    label: 'label1',
    value1: 10,
    value2: 10,
    value3: 10,
  }, {
    id: 1,
    label: 'label2',
    value1: 10,
    value2: 10,
    value3: 10,
  }]
}
