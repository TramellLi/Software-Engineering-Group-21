import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { DataService } from '../data.service';
import { ChangeDetectorRef } from '@angular/core';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

import { ElementRef } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import {Observable} from 'rxjs';

// Here are some test or not used imports.
// import { BODYPARTS } from '../tempBody';
// import * as pluginAnnotations from 'chartjs-plugin-annotation';
// import { Service } from '../service';
// import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  // not used commands
  // @ViewChild('regionCharts', {static: false}) regionCharts: any;
  // @Input() addItemStream: Observable<any> | undefined;

  constructor(private dataService: DataService, public changeDetectorRef: ChangeDetectorRef ) {
    // render barchart
    this.retrieveData();
  }

  // bar chart attributes, data are not used in real, styles are used
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      labels: { fontColor: 'black' }
    },
    scales: {
      xAxes: [{
        ticks: { fontColor: 'black', beginAtZero: true,
          backdropColor: { color: 'rgba(255,255,255,0.1)' } },
        gridLines: { color: 'rgba(255,255,255,0.1)' },
        color: { color: 'rgba(255,255,255,0.1)' },
        borderColor: { color: 'rgba(255,255,255,0.1)' },
        display: true
      }],
      yAxes: [{
        ticks: { fontColor: 'black' },
        gridLines: { color: 'rgba(255,255,255,0.1)' },
        display: false
      }]
    },
  };
  public comments = ['Test comment 1', 'Test comment 2', 'Test comment 3'];
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
  public bodyParts: any = [];

  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective | undefined;
  // chart: BaseChartDirective;
  stats: any = [];
  currentdata = null;
  currentIndex = -1;
  title = '';
  indexOfBar = 0;
  tstString = '';
  backValue: any = {
    barChartLabels:  [],
    barChartData: []
  };

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.retrieveData();
    this.retrieveComments();
    this.retrieveBodyParts();
    // this.clkbtn()
    // @ts-ignore
    // document.getElementById('myChart').ontimeupdate(this.clkbtn());
  }

  // tslint:disable-next-line:typedef
  ngOnChange(){
    this.retrieveComments();
  }
  // cellect data of vote from back end
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

  // cellect data of comments from back end
  // tslint:disable-next-line:typedef
  retrieveComments() {
    this.dataService.getComments().subscribe(
      data => {
        this.stats = data;
        // now let's update the fields
        console.log(data);
        for (let i = 0; i < 6; i++) {
          this.comments[i] = this.stats[i].content + '¬';
        }
      },
      error => {
        console.log(error);
      });
  }
  // cellect data of bodyparts from back end
  // tslint:disable-next-line:typedef
  retrieveBodyParts() {
    this.dataService.getBodyParts().subscribe(
      data => {
        this.bodyParts = data;
        // now let's update the fields
        console.log('zzz' + data);
        // for (let i = 0; i < 6; i++) {
        //   this.comments[i] = this.bodyParts[i].content + '¬';
        // }
      },
      error => {
        console.log(error);
      });
    return this.bodyParts;
  }

  // button list event
  // tslint:disable-next-line:typedef
  clkbtn(barChartLabel: string){
    this.indexOfBar = this.barChartLabels.indexOf(barChartLabel);
    this.barChartData[0].data[this.indexOfBar]++;
    this.barChartLegend = false;
    this.changeDetectorRef.reattach();
    // this.retrieveComments();
    this.barChartLegend = true;
    this.backValue.barChartData = this.barChartData;
    this.backValue.barChartLabels = this.barChartLabels;
    // this.dataService.putAll(this.backValue).subscribe();
    this.retrieveData();
    // this.update();
    // this.regionCharts.chartInstance.setOption(this.barChartData);
    // @ts-ignore
    // document.getElementById('myChart').ontimeupdate(this.clkbtn());
    // this.ngOnChange();
  }

  // tslint:disable-next-line:typedef
  // submitComments(commentValue: HTMLInputElement) {
  //   this.dataService.addComments( commentValue.value as any).subscribe();
  //   this.ngOnChange();
  // }
}
