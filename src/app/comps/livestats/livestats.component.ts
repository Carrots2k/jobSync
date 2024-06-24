import { Component } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-livestats',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './livestats.component.html',
  styleUrl: './livestats.component.css'
})
export class LivestatsComponent {

}
