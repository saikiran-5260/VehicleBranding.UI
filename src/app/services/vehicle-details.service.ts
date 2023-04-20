import { Injectable } from '@angular/core';
import { VehicleDetails } from '../models/vehicle-details';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VehicleDetailsService {
  private url = 'GetDeatilsOfVehicles';
  constructor(private http: HttpClient) {}

  public getVehicleDetails(): Observable<VehicleDetails[]> {
    // let vehicleDetail = new VehicleDetails();
    // vehicleDetail.VehicleId = 1;
    // vehicleDetail.VehicleName = 'Kia';
    // vehicleDetail.Chassis_Number = 'HSKK8239KJHKS832';
    // vehicleDetail.Engine = 'Four Cylinder';
    // vehicleDetail.FuelCapacity = 45;
    // vehicleDetail.FuelReserveCapacity = 4;
    // vehicleDetail.MileagePerLit = 19;
    // vehicleDetail.CreatedOn = new Date(2023, 0o4, 0o17, 17, 23, 42, 11);
    // vehicleDetail.VehicleTypeName = 'Four Wheeler';
    // vehicleDetail.CreatedBy = 'Kia Officials';
    // vehicleDetail.ColorName = 'Blue';
    // vehicleDetail.TransmissionName = 'Petrol';

    return this.http.get<VehicleDetails[]>(`${environment.apiUrl}/${this.url}`);
  }
}
