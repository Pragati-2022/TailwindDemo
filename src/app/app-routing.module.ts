import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MapsComponent } from './pages/maps/maps.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '', redirectTo : 'login', pathMatch : 'full'
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
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'userProfile',
    component : UserProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
