import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {
  constructor(private dataService: DataService) { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['head', 'neck', '...', '...', '..', '.', '...', '..', '.', '...', '...', '..', '.', '...'];
  public barChartType = 'horizontalBar';
  public barChartLegend = true;
  public barChartData = [
    {data: [6, 5, 8, 8, 5, 5, 4, 6, 5, 4, 4, 6, 5, 4], label: 'Votes'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
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
