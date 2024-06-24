import { Component } from '@angular/core';
import { LivestatsComponent } from '../../comps/livestats/livestats.component';
import { AllstatscardsComponent } from '../../comps/allstatscards/allstatscards.component';
import { ChartsComponent } from '../../comps/charts/charts.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LivestatsComponent, AllstatscardsComponent, ChartsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
