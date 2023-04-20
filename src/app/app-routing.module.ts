import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleDetailsComponent } from './components/vehicle-details/vehicle-details.component';
import { CreateNewVehivleComponent } from './components/create-new-vehivle/create-new-vehivle.component';
import { VehicleDetailsByIdComponent } from './components/vehicle-details-by-id/vehicle-details-by-id.component';
import { VehicleDetailsByChassisNumberComponent } from './components/vehicle-details-by-chassis-number/vehicle-details-by-chassis-number.component';
import { EditVehicleComponent } from './components/edit-vehicle/edit-vehicle.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationformComponent } from './components/registrationform/registrationform.component';
import { VehiclebrandingComponent } from './components/vehiclebranding/vehiclebranding.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationformComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'vehiclebranding', component: VehiclebrandingComponent },
  { path: 'vehicle-details', component: VehicleDetailsComponent },
  { path: 'vehicle-details-by-id', component: VehicleDetailsByIdComponent },
  {
    path: 'vehicle-details-by-chassisNumber',
    component: VehicleDetailsByChassisNumberComponent,
  },
  { path: 'create-vehicle', component: CreateNewVehivleComponent },
  { path: 'update-vehicle', component: EditVehicleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
