import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingListService {

  url = 'http://localhost:3000/locations';
  constructor() { }

  async getHousingLocationByName(selectedLocationName: String): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${selectedLocationName}`);
    return await data.json() ?? {};
  }

  async getHousingLocationList(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application recieved: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
