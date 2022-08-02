import { GuiPaging, GuiPagingDisplay, GuiSearching, GuiSorting } from "@generic-ui/ngx-grid";

export class ConstantClass {
    static months = ['January', 'February', 'March', 'April', 'May'];
    static monthsData = [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15];
    static yearsData = [5, 16, 13, 40, 20, 25, 10, 30, 33, 35, 10, 15];
    static years = ['2001', '2002', '2003', '2004', '2005'];
    static paging: GuiPaging = {
        enabled: true,
        page: 1,
        pageSize: 3,
        pageSizes: [2, 5, 3],
        pagerTop: false,
        pagerBottom: true,
        display: GuiPagingDisplay.ADVANCED,
      };
    static searching: GuiSearching = {
        enabled: true,
        placeholder: 'Search Here...',
        // phrase: 'man',
        // highlighting: true,
      };
    static sorting: GuiSorting = {
        enabled: true,
        multiSorting: true,
      }; 
}