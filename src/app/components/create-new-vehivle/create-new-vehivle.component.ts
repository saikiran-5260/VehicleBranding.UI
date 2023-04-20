import { Component } from '@angular/core';
import { VehicleModel } from 'src/app/models/vehicle-model';

@Component({
  selector: 'app-create-new-vehivle',
  templateUrl: './create-new-vehivle.component.html',
  styleUrls: ['./create-new-vehivle.component.css'],
})
export class CreateNewVehivleComponent {
  vehicles: VehicleModel[] = [];
  vehicleToEdit?: VehicleModel;
  constructor() {}
  ngOnInit(): void {}

  updateVehicleList(vehicles: VehicleModel[]) {
    this.vehicles = vehicles;
  }
  initNewVehicle() {
    this.vehicleToEdit = new VehicleModel();
  }
}
