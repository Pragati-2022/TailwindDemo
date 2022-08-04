import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  menu: any = [
    {
      routerLink: 'home',
      title: 'TITLE.DASHBOARD',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: '',
      title: 'TITLE.ICONS',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: 'maps',
      title: 'TITLE.MAPS',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: 'userProfile',
      title: 'TITLE.USER_PROFILE',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: 'contactUs',
      title: 'TITLE.CONTACT_US',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: 'login',
      title: 'TITLE.LOGOUT',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: '',
      title: 'TITLE.PAGE_VIEW',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: '',
      title: 'TITLE.DOCUMENTATION',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: '',
      title: 'TITLE.GETTING_STARTED',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: '',
      title: 'TITLE.FOUNDATION',
      src: 'assets/icons/bricks.svg',
    },
    {
      routerLink: '',
      title: 'TITLE.COMPONENTS',
      src: 'assets/icons/bricks.svg',
    },
  ];

  constructor(public commonService: CommonService) {}

  ngOnInit(): void {
    if (window.innerWidth < 450) {
      this.commonService.isOpen = false;
    }
  }

  onChangeRoute(item : any){
    if(window.innerWidth < 450)
    this.commonService.isOpen = !this.commonService.isOpen;

    if(item.routerLink === 'login'){
      localStorage.removeItem('loggedIn');
      this.commonService.isLoggedIn = '';
      console.log(this.commonService.isLoggedIn);
      
    }
  }
}
