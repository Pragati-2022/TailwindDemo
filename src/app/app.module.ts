import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FirstPartComponent } from './pages/dashboard/first-part/first-part.component';
import { SecondChartPartComponent } from './pages/dashboard/second-chart-part/second-chart-part.component';
import { LineChartComponent } from './pages/dashboard/second-chart-part/line-chart/line-chart.component';
import { BarChartComponent } from './pages/dashboard/second-chart-part/bar-chart/bar-chart.component';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { PageVisitesTableComponent } from './pages/dashboard/second-chart-part/page-visites-table/page-visites-table.component';
import { SocialTrafficTableComponent } from './pages/dashboard/second-chart-part/social-traffic-table/social-traffic-table.component';
import { MapsComponent } from './pages/maps/maps.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DashboardComponent,
    FirstPartComponent,
    SecondChartPartComponent,
    LineChartComponent,
    BarChartComponent,
    PageVisitesTableComponent,
    SocialTrafficTableComponent,
    MapsComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuiGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
