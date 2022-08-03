import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { ComponentModule } from './components/component.module';
import { PipeModule } from './pipe/pipe.module';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FirstPartComponent,
    SecondChartPartComponent,
    LineChartComponent,
    BarChartComponent,
    PageVisitesTableComponent,
    SocialTrafficTableComponent,
    MapsComponent,
    ContactUsComponent,
    UserProfileComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    HttpClientModule,
    GuiGridModule,
    ComponentModule,
    PipeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
