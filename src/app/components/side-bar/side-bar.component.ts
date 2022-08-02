import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  constructor(public commonService : CommonService) { }

  ngOnInit(): void {
    if(window.innerWidth < 450){
      this.commonService.isOpen = false;
    }
  }

}
