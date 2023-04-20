import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { VehicleDetailsByIdComponent } from './components/vehicle-details-by-id/vehicle-details-by-id.component';
import { VehicleDetailsByChassisNumberComponent } from './components/vehicle-details-by-chassis-number/vehicle-details-by-chassis-number.component';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNewVehivleComponent } from './components/create-new-vehivle/create-new-vehivle.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationformComponent } from './components/registrationform/registrationform.component';
import { LoginComponent } from './components/login/login.component';
import { VehiclebrandingComponent } from './components/vehiclebranding/vehiclebranding.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleDetailsComponent,
    VehicleDetailsByIdComponent,
    VehicleDetailsByChassisNumberComponent,
    EditVehicleComponent,
    CreateNewVehivleComponent,
    RegistrationformComponent,
    LoginComponent,
    VehiclebrandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
