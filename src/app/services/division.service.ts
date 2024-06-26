import { Injectable } from '@angular/core';
import { divisionModels } from '../models/divisionsModels';
import { divisionModelsData } from '../data/divistionsData';
import { divisionModel } from '../models/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor() { }

  getDivisions(): divisionModel[]{
    return divisionModelsData.divisions;
  }
}
