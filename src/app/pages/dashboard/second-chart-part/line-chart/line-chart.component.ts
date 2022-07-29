import {
  AfterViewInit,
  OnInit,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit, AfterViewInit {
  @ViewChild('lineCanvas') lineCanvas!: ElementRef;
  @ViewChild('lineCanvas') lineCanvas2!: ElementRef;
  lineChart: any;
  isMonth = true;

  months = ['January', 'February', 'March', 'April', 'May'];
  monthsData = [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15];
  yearsData = [5, 16, 13, 40, 20, 25, 10, 30, 33, 35, 10, 15];
  years = ['2001', '2002', '2003', '2004', '2005'];
  constructor() {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.lineChartMethod();
  }

  lineChartMethod() {
    console.log(this.isMonth);

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.isMonth ? this.months : this.years,
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
            data: this.isMonth ? this.monthsData : this.yearsData,
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
