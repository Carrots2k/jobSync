import { Component, OnInit } from '@angular/core';
import { LinechartComponent } from '../linechart/linechart.component';
import { BarchartComponent } from '../barchart/barchart.component';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [LinechartComponent, BarchartComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements OnInit {
  curentYeaData: number[] = [];
  lastYearData: number[] = []

  options: any;

  ngOnInit(): void {
    this.loadData();
  
    console.log('this year',this.curentYeaData);
    console.log('last year',this.lastYearData);
  }

  loadData(): void{
    this.curentYeaData = [65, 59, 80, 81, 56, 55, 40, 89, 23, 77, 94, 44];
    this.lastYearData = [28, 48, 33, 19, 86, 27, 90, 55, 88, 23, 90, 66];
  }

}
