import {
  AfterViewInit,
  OnInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { ConstantClass } from 'src/app/constants/constants';
import { CommonService } from 'src/app/services/common/common.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  @ViewChild('lineCanvas') lineCanvas2!: ElementRef;
  lineChart: any;
  public constant;
  
  constructor(public commonService : CommonService) {
    this.constant = ConstantClass;
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.lineChartMethod();
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.commonService.isMonth ? this.constant.months : this.constant.years,
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            tension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.commonService.isMonth ? this.constant.monthsData : this.constant.yearsData,
            spanGaps: false,
          },
        ],
      },
    });
  }

  onOpenNewChart() {
    this.lineChart.destroy();

    this.lineChartMethod();
  }
}
