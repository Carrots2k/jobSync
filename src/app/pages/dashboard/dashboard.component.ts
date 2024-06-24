import { Component } from '@angular/core';
import { LivestatsComponent } from '../../comps/livestats/livestats.component';
import { AllstatscardsComponent } from '../../comps/allstatscards/allstatscards.component';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LivestatsComponent, AllstatscardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
