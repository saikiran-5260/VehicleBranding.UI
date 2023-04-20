import { Component } from '@angular/core';
import { VehicleDetails } from './models/vehicle-details';
import { VehicleDetailsService } from './services/vehicle-details.service';
import { VehicleModel } from './models/vehicle-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'VehicleBranding.UI';

  // vehicleDetail: any[] = [];

  // constructor(private vehicleDetailsService: VehicleDetailsService) {}

  // ngOnInit(): void {
  //   this.vehicleDetailsService
  //     .getVehicleDetails()
  //     .subscribe((result: VehicleDetails[]) => (this.vehicleDetail = result));
  // }
}
