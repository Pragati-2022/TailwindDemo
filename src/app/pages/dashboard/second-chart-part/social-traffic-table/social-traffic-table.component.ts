import { Component, OnInit } from '@angular/core';
import { GuiCellView, GuiColumn } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-social-traffic-table',
  templateUrl: './social-traffic-table.component.html',
  styleUrls: ['./social-traffic-table.component.scss'],
})
export class SocialTrafficTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  columns: Array<GuiColumn> = [
    {
      header: 'Name',
      field: 'name',
    },
    {
      header: 'Job',
      field: 'job',
    },
    {
      header: '',
      field: 'age',
      view: GuiCellView.BAR
    },
  ];

  source: Array<any> = [
    {
      name: 'Brad',
      job: 'programmer',
      age: '40',
    },
    {
      name: 'John',
      job: 'athlete',
      age: '100',
    },
    {
      name: 'John',
      job: 'athlete',
      age: '79',
    },
    {
      name: 'John',
      job: 'athlete',
      age: '10',
    },
    {
      name: 'Eve',
      job: 'artist',
      age: '50',
    },
  ];
}
