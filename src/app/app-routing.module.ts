import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { MapsComponent } from './pages/maps/maps.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuard } from './services/auth/auth.guard';

const routes: Routes = [
  {
    path: '', redirectTo : 'login', pathMatch : 'full'
  },
  {
    path : 'home',
    component : DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'maps',
    component : MapsComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'contactUs',
    component : ContactUsComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : 'userProfile',
    component : UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path : '**',
    component : PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
