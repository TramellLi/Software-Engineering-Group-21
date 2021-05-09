import { Component, OnInit } from '@angular/core';
import { votes } from '../votes';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  votes = votes;
  constructor() { }

  ngOnInit(): void {
  }

}
