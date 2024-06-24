import { Component } from '@angular/core';
import { JobstableComponent } from '../../comps/jobstable/jobstable.component';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobstableComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent {

}
