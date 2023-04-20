import { Component, Input } from '@angular/core';
import { VehicleModel } from 'src/app/models/vehicle-model';
import { VehicleDetailsByIdService } from 'src/app/services/vehicle-details-by-id.service';

@Component({
  selector: 'app-vehicle-details-by-id',
  templateUrl: './vehicle-details-by-id.component.html',
  styleUrls: ['./vehicle-details-by-id.component.css'],
})
export class VehicleDetailsByIdComponent {
  vehicleDetailById: VehicleModel[] = [];
  vehicleToEdit?: VehicleModel;
  vehicleId!: number;
  enableVechileEdit: boolean;
  @Input() vehicle?: VehicleModel;

  constructor(private vehicleDetailsService: VehicleDetailsByIdService) {
    this.enableVechileEdit = false;
  }

  ngOnInit(): void {
    // this.vehicleDetailsService
    //   .getVehicleDetailsById()
    //   .subscribe((result: VehicleModel[]) => (this.vehicleDetailById = result));
  }
  getById(vehicleId: number) {
    this.vehicleDetailsService
      .getVehicleDetailsById(this.vehicleId)
      .subscribe((result: VehicleModel[]) => (this.vehicleDetailById = result));
  }
  updateVehicle(vehicle: VehicleModel) {
    this.enableVechileEdit = true;
    this.vehicleToEdit = vehicle;
  }
}
