import { Injectable } from '@angular/core';
import { housingLocationList } from './housing-list/housing-list';

@Injectable({
  providedIn: 'root'
})
export class HousingListService {

  constructor() { }

  getHousingLocationList() {
    return housingLocationList;
  }

}
