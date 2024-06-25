import { Injectable } from '@angular/core';
import { jobsModels } from '../models/jobs';
import { jobModelsData } from '../data/jobsModelData'

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  

  constructor() { }

  getJobs(): jobsModels[] {
    return jobModelsData;
  }
}
