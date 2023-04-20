import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleModel } from 'src/app/models/vehicle-model';
import { VehicleDetailsByChassisNumberService } from 'src/app/services/vehicle-details-by-chassis-number.service';
import { VehicleDetailsByIdService } from 'src/app/services/vehicle-details-by-id.service';

@Component({
  selector: 'app-vehicle-details-by-chassis-number',
  templateUrl: './vehicle-details-by-chassis-number.component.html',
  styleUrls: ['./vehicle-details-by-chassis-number.component.css'],
})
export class VehicleDetailsByChassisNumberComponent {
  vehicleDetailByChassisNum: VehicleModel[] = [];
  chassiNum!: string;
  vehicleToEdit?: VehicleModel;

  constructor(
    private vehicleDetailsByChassisNum: VehicleDetailsByChassisNumberService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // this.vehicleDetailsByChassisNum
    //   .getVehicleDetailsByChassisNum()
    //   .subscribe(
    //     (result: VehicleModel[]) => (this.vehicleDetailByChassisNum = result)
    //   );
  }
  getByChassisNum(chassiNum: string) {
    this.vehicleDetailsByChassisNum
      .getVehicleDetailsByChassisNum(chassiNum)
      .subscribe(
        (result: VehicleModel[]) => (this.vehicleDetailByChassisNum = result)
      );
  }
  // create() {
  //   // let loginDTO = {
  //   //   id: ,
  //   //   name:,
  //   // }
  //   this.vehicleDetailsByChassisNum
  //     .getVehicleDetailsByChassisNumById(this.inputfiled)
  //     .subscribe((result: any) => (this.vehicleDetailByChassisNum = result));
  // }
  updateVehicle(vehicle: VehicleModel) {
    this.vehicleToEdit = vehicle;
  }
}
