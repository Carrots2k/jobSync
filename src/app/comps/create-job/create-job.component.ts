import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-create-job',
  standalone: true,
  imports: [InputTextModule, InputTextModule, MultiSelectModule, CommonModule ],
  templateUrl: './create-job.component.html',
  styleUrl: './create-job.component.css'
})
export class CreateJobComponent {
  
}
