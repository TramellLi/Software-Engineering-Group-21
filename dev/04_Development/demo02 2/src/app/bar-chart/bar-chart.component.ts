import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  constructor(private dataService: DataService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: { fontColor: 'black' }
    },
    scales: {
      xAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'rgba(255,255,255,0.1)' }
      }],
      yAxes: [{
        ticks: { fontColor: 'white' },
        gridLines: { color: 'rgba(255,255,255,0.1)' }
      }]
    },
  };
  public barChartLabels = ['head', 'neck', '...', '...', '..', '.', '...', '..', '.', '...', '...', '..', '.', '...'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    {data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], label: 'Votes'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(90,85,85,0.3)',
    },
  ];

  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';

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
}
