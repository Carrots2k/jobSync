import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { CommonModule } from '@angular/common';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { ProgressBarModule } from 'primeng/progressbar';
import { jobsModels } from '../../models/jobs';
import { JobsService } from '../../services/jobs.service';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-jobstable',
  standalone: true,
  imports: [TableModule, TagModule, ButtonModule,IconFieldModule, InputIconModule, 
    CommonModule, MultiSelectModule, InputTextModule, DropdownModule, SliderModule, ProgressBarModule ],
  templateUrl: './jobstable.component.html',
  styleUrl: './jobstable.component.css'
})
export class JobstableComponent implements OnInit{

  jobs: jobsModels[] = [];
  selectedJob: jobsModels[] = [];
  statuses: any[] = [];
  loading: boolean = true;

  activityValues: number[] = [0, 100];
  searchValue: string | undefined;

  constructor(private jobService: JobsService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    this.jobs = this.jobService.getJobs();
    this.loading = false; // Assuming data loading is complete when ngOnInit completes
  }

  clear(table: Table) {
    table.clear();
    this.searchValue = ''
  }

  getSeverity(status: string): string | null {
    switch (status) {
      case 'Error':
        return 'danger';

      case 'Completed':
        return 'success';

      case 'In queue':
        return 'info';

      case 'In progress': // Corrected spelling
        return 'warning';

      case 'renewal': // Corrected case
        return null;

      default:
        return null;
    }
  }

}
