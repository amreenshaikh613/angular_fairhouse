import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HousingDetailsComponent } from "./housing-details/housing-details.component";
import { HousingListComponent } from "./housing-list/housing-list.component";

const appRoutes: Routes = [
    { path: '', component: HousingListComponent },
    { path: 'housingDetails/:selectedLocationName', component: HousingDetailsComponent },
];

export const routing= RouterModule.forRoot(appRoutes);
