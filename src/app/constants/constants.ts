import {
  GuiPaging,
  GuiPagingDisplay,
  GuiSearching,
  GuiSorting,
} from '@generic-ui/ngx-grid';

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
  static chartType : any = {
    bar: 'bar',
    line: 'line',
  };
  static barChartConfig: any = {
    type: this.chartType.bar,
    data: {
      labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
      datasets: [
        {
          label: '# of Votes',
          data: [100, 86, 55, 38, 15, 20],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
          barPercentage: 9,
          barThickness: 5,
          maxBarThickness: 8,
          minBarLength: 50,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 5,
          },
        },
      },
    },
  };
}
