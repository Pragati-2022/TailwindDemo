import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  isOpen = true;
  
  constructor() { }

  ngOnInit(): void {
    if(window.innerWidth < 450){
      this.isOpen = false;
    }
  }

}
