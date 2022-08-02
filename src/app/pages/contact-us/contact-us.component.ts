import { Component, OnInit } from '@angular/core';
import {
  GuiColumn,
  GuiLocalization,
  GuiPaging,
  GuiPagingDisplay,
  GuiSearching,
  GuiSorting,
} from '@generic-ui/ngx-grid';
import { CallApiService } from 'src/app/services/callApi/call-api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  constructor(public commonService: CommonService, private callApiService : CallApiService) {}

  ngOnInit(): void {
    this.getColumns();
  }

  getColumns(){
    this.callApiService.getAll('assets/fakeData/contacts.json').subscribe((data : any) => {
      console.log(data);
      this.columns = data.columns;
      this.source = data.source;
    })
  }
  columns: Array<GuiColumn> = [];

  source: Array<any> = []

  sorting: GuiSorting = {
    enabled: true,
    multiSorting: true,
  };

  searching: GuiSearching = {
    enabled: true,
    placeholder: 'Search Here...',
    // phrase: 'man',
    // highlighting: true,
  };

  paging: GuiPaging = {
    enabled: true,
    page: 1,
    pageSize: 3,
    pageSizes: [2, 5, 3],
    pagerTop: false,
    pagerBottom: true,
    display: GuiPagingDisplay.ADVANCED,
  };

  localization: GuiLocalization = {
    translationResolver: (key: string, value: string) => {
      return value;
    },
  };
}
