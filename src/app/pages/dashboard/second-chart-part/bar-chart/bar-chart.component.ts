import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Chart from 'chart.js/auto';
import { ConstantClass } from 'src/app/constants/constants';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit, AfterViewInit {
  @ViewChild('barCanvas') private barCanvas!: ElementRef;
  barChart: any;
  public constant;

  constructor() {
    this.constant = ConstantClass;
  }
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.barChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, this.constant.barChartConfig);
  }
}
