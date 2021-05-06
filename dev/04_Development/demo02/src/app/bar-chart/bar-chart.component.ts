import {Component, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';

import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {


  constructor(private dataService: DataService, public changeDetectorRef: ChangeDetectorRef ) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: { fontColor: 'black' }
    },
    scales: {
      xAxes: [{
        ticks: { fontColor: 'black' },
        gridLines: { color: 'rgba(255,255,255,0.1)' },
        display: false
      }],
      yAxes: [{
        ticks: { fontColor: 'black' },
        gridLines: { color: 'rgba(255,255,255,0.1)' },
        display: false
      }]
    },
  };
  public barChartLabels = ['Head', 'Eyes', 'Neck Pain', 'Shoulder', 'Cervical', 'Lumbar', 'Hand', 'Limb Pain', 'Foot'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    {data: [3, 2, 1, 4, 8, 6, 7, 5, 8], label: 'Vote if you got same pain by click buttons on the right'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(90,85,85,0.3)',
    },
  ];

  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective | undefined;
  // chart: BaseChartDirective;
  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';
  indexOfBar = 0;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.retrieveData();
  }

  // tslint:disable-next-line:typedef
  retrieveData() {
    this.dataService.getAll().subscribe(
      data => {
        this.stats = data;
        // now let's update the fields
        this.barChartLabels = this.stats.barChartLabels;
        this.barChartData = this.stats.barChartData;
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  clkbtn(barChartLabel: string){
    this.indexOfBar = this.barChartLabels.indexOf(barChartLabel);
    this.barChartData[0].data[this.indexOfBar]++;
    this.changeDetectorRef.reattach();
  }
}
