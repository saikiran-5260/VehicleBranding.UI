import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleModel } from 'src/app/models/vehicle-model';
import { CreateVehicleServiceService } from 'src/app/services/create-vehicle-service.service';

@Component({
  selector: 'app-edit-vehicle',
  templateUrl: './edit-vehicle.component.html',
  styleUrls: ['./edit-vehicle.component.css'],
})
export class EditVehicleComponent implements OnInit {
  @Input() vehicle?: VehicleModel;
  @Input() Id!: number;
  @Output() updatedVehicle = new EventEmitter<VehicleModel[]>();
  constructor(
    private createVehicleService: CreateVehicleServiceService,
    private route: Router
  ) {
    console.log('asdhsafd');
  }

  ngOnInit() {
    console.log('init');
    console.log(this.vehicle);
    console.log(this.Id);
  }

  updateVehicle(vehicle: VehicleModel) {
    // this.route.navigateByUrl('/updat-vehicle');
    this.createVehicleService
      .updateVehicle(vehicle, this.Id)
      .subscribe((vehicles: VehicleModel[]) =>
        this.updatedVehicle.emit(vehicles)
      );
  }
  deleteVehicle(vehicle: VehicleModel) {
    this.createVehicleService
      .deleteVehicle(vehicle, this.Id)
      .subscribe((vehicles: VehicleModel[]) =>
        this.updatedVehicle.emit(vehicles)
      );
  }
  createVehicle(vehicle: VehicleModel) {
    this.createVehicleService
      .createVehicle(vehicle)
      .subscribe((vehicles: VehicleModel[]) =>
        this.updatedVehicle.emit(vehicles)
      );
  }
}
