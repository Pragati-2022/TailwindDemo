import { Component, OnInit } from '@angular/core';
import { GuiCellView, GuiColumn } from '@generic-ui/ngx-grid';
import { Dashboard } from 'src/app/interfaces/dashboard';
import { CallApiService } from 'src/app/services/callApi/call-api.service';

@Component({
  selector: 'app-social-traffic-table',
  templateUrl: './social-traffic-table.component.html',
  styleUrls: ['./social-traffic-table.component.scss'],
})
export class SocialTrafficTableComponent implements OnInit {
  constructor(private callApiService: CallApiService) {}

  ngOnInit(): void {
    this.getColumns();
  }
  getColumns() {
    this.callApiService
      .getAll('assets/fakeData/dashboard.json')
      .subscribe((data: Dashboard) => {
        this.columns = data.social_traffic.columns;
        this.columns.map((data : any) => {
         const setBold:any = ['job'];
         const setBAR:any = ['age','progress'];

         if(setBold.includes(data.field.toLowerCase())){
           data.view = GuiCellView.BOLD;
         }
         if(setBAR.includes(data.field.toLowerCase())){
           data.view = GuiCellView.BAR;
         }
        });

        this.source = data.social_traffic.source;
      });
  }

  columns: Array<GuiColumn> = [];
  source: Array<any> = [];
}
