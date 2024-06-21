import { Component } from '@angular/core';
import { LivestatsComponent } from '../livestats/livestats.component';
import { AllstatscardsComponent } from '../allstatscards/allstatscards.component';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LivestatsComponent, AllstatscardsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
