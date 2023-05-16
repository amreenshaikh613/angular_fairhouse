import { Component, Input, OnInit } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { ActivatedRoute } from '@angular/router';
import { housingLocationList } from '../housing-list/housing-list';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HousingListService } from '../housing-list.service';



@Component({
  selector: 'app-housing-details',
  templateUrl: './housing-details.component.html',
  styleUrls: ['./housing-details.component.css']
})
export class HousingDetailsComponent implements OnInit {

  selectedLocation: HousingLocation | undefined;
  locationName : String | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(private route: ActivatedRoute,private housingService: HousingListService) { 

  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  ngOnInit() {
    
    const routeParams = this.route.snapshot.paramMap;
    this.locationName  = String(routeParams.get('selectedLocationName'));
    this.housingService.getHousingLocationByName(this.locationName).then(recievedLoc => {
      this.selectedLocation = recievedLoc;
    });
   
  }
}
