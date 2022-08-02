import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MapsComponent } from './pages/maps/maps.component';

const routes: Routes = [
  {
    path: '', redirectTo : 'home', pathMatch : 'full'
  },
  {
    path : 'home',
    component : DashboardComponent
  },
  {
    path : 'maps',
    component : MapsComponent
  },
  {
    path : 'contactUs',
    component : ContactUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
