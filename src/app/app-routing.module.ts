import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: '**', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
