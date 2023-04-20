import { Component } from '@angular/core';
import { VehicleDetails } from 'src/app/models/vehicle-details';
import { VehicleDetailsService } from 'src/app/services/vehicle-details.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css'],
})
export class VehicleDetailsComponent {
  vehicleDetail: any[] = [];

  constructor(private vehicleDetailsService: VehicleDetailsService) {}

  ngOnInit(): void {
    // this.vehicleDetailsService
    //   .getVehicleDetails()
    //   .subscribe((result: VehicleDetails[]) => (this.vehicleDetail = result));
  }
  getDetails() {
    this.vehicleDetailsService
      .getVehicleDetails()
      .subscribe((result: VehicleDetails[]) => (this.vehicleDetail = result));
  }
}
