import { Component, OnInit } from '@angular/core';
import {
  GuiColumn,
  GuiLocalization,
  GuiPaging,
  GuiPagingDisplay,
  GuiSearching,
  GuiSorting,
} from '@generic-ui/ngx-grid';
import { ConstantClass } from 'src/app/constants/constants';
import { Contact } from 'src/app/interfaces/conatcts';
import { CallApiService } from 'src/app/services/callApi/call-api.service';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  public constant = ConstantClass;
  
  constructor(
    public commonService: CommonService,
    private callApiService: CallApiService
  ) { }

  ngOnInit(): void {
    this.getColumns();
  }

  getColumns() {
    this.callApiService
      .getAll('assets/fakeData/contacts.json')
      .subscribe((data: Contact) => {
        this.columns = data.columns;
        this.columns.map((data: any) => {
          const setMarge: any = ['owner'];

          if (setMarge.includes(data.field.toLowerCase())) {
            data.view = (owner: any) => {
              return '<b>' + owner.firstName + ' ' + owner.lastName + '</b>';
            };
            data.matcher = (owner: any) => {
              return owner.firstName + ' ' + owner.lastName;
            };
          }
        });
        this.source = data.source;
      });
  }
  columns: Array<GuiColumn> = [];

  source: Array<any> = [];

  sorting = this.constant.searching;

  searching = this.constant.searching;

  paging = this.constant.paging;
}
