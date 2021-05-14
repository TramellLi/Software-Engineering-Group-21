import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {DataService} from './data.service';


import {ChartsModule} from 'ng2-charts';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import { MainBodyComponent } from './main-body/main-body.component';



@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    MainBodyComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
