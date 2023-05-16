import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { HousingDetailsComponent } from './housing-details/housing-details.component';
import { routing } from './app-routing-module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HousingDetailsComponent,
   
  ],
  imports: [
    BrowserModule,
    routing,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
