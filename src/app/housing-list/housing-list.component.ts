import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HousingListService } from '../housing-list.service';
import { HousingLocation } from '../housing-location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
export class HousingListComponent implements OnInit {

  private locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor(private housingListService: HousingListService,private router: Router)
   {
   }

   getHousingLocationList()
   {
     return this.locationList;
   }

  ngOnInit(): void {
    this.locationList = this.housingListService.getHousingLocationList();
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;

    this.results = this.locationList.filter((location: any) => location.city.toLowerCase().includes(searchText.toLowerCase()));
  }

  selectHousingLocation(location: HousingLocation) {
    // this.locationSelectedEvent.emit(location);
    // this.router.navigate(['/housingDetails', { selectedLocationName : location.name}]);
    this.router.navigateByUrl("/housingDetails/locationName/ { locationName : location.name}");
  }
}
