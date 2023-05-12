import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { ActivatedRoute } from '@angular/router';
import { housingLocationList } from '../housing-list/housing-list';


@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {

  selectedLocation: HousingLocation | undefined;
  locationName : String | undefined;
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    this.locationName  = String(routeParams.get('selectedLocationName'));
    this.selectedLocation = housingLocationList.find(selectedLocation => selectedLocation.name === this.locationName);
   
  }
}
