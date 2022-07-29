import { Component, OnInit } from '@angular/core';
import { GuiColumn } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-page-visites-table',
  templateUrl: './page-visites-table.component.html',
  styleUrls: ['./page-visites-table.component.scss'],
})
export class PageVisitesTableComponent implements OnInit {
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
      header: 'Age',
      field: 'age',
    },
    {
      header: 'Phone',
      field: 'phone',
    },
  ];

  source: Array<any> = [
    {
      name: 'Brad',
      job: 'programmer',
      age: '40',
      phone: '8817678978',
    },
    {
      name: 'John',
      job: 'athlete',
      age: '22',
      phone: '8817678978',
    },
    {
      name: 'John',
      job: 'athlete',
      age: '22',
      phone: '8817678978',
    },
    {
      name: 'John',
      job: 'athlete',
      age: '22',
      phone: '8817678978',
    },
    {
      name: 'Eve',
      job: 'artist',
      age: '25',
      phone: '8817678978',
    },
  ];
}
