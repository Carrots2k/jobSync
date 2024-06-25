import { Injectable } from '@angular/core';
import { divisionModels } from '../models/divisions';
import { divisionModelsData } from '../data/divistionsData';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }

  getDivisions(): divisionModels {
    return divisionModelsData;
  }
}
