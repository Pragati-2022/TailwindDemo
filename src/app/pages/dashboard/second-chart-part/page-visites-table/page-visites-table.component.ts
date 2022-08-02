import { Component, OnInit } from '@angular/core';
import { GuiColumn } from '@generic-ui/ngx-grid';
import { Dashboard } from 'src/app/interfaces/dashboard';
import { CallApiService } from 'src/app/services/callApi/call-api.service';

@Component({
  selector: 'app-page-visites-table',
  templateUrl: './page-visites-table.component.html',
  styleUrls: ['./page-visites-table.component.scss'],
})
export class PageVisitesTableComponent implements OnInit {
  constructor(private callApiService : CallApiService) {}

  ngOnInit(): void {
    this.getColumns();
  }

  getColumns(){
    this.callApiService.getAll('assets/fakeData/dashboard.json').subscribe((data : Dashboard) => {
      this.columns = data.page_visites.columns;
      this.source = data.page_visites.source;
    })
  }

  columns: Array<GuiColumn> = [];

  source: Array<any> = [];
}
