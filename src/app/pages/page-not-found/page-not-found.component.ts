import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit, OnDestroy {

  constructor(public commonService : CommonService, private router : Router) { }

  ngOnInit(): void {
    this.commonService.isOnPageNotFound = true;
  }

  onNotFound(){
    if(this.commonService.isLoggedIn)
    {
    this.router.navigate(['home']);
    return;
    }

    this.router.navigate(['login']);
  }

  ngOnDestroy() {
    this.commonService.isOnPageNotFound = false;
  }
}
