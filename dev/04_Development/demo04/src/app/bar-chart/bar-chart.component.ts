import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  constructor() {
  }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [2, 2, 3, 4, 5, 6, 7], label: 'Votes'}
  ];
  public arys = [1, 2, 3, 4, 5, 6, 7];

  onSelect(ary: any): void {
    this.barChartData[0].data[ary]++;
  }
  ngOnInit() { }
}
