import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModel } from '../models/vehicle-model';
import { environment } from 'src/environments/environment.development';
import { VehicleDetails } from '../models/vehicle-details';

@Injectable({
  providedIn: 'root',
})
export class VehicleDetailsByIdService {
  private url = 'GetDeatilsOfVehiclesById?Id=';
  constructor(private http: HttpClient) {}

  public getVehicleDetailsById(vehicleId: number): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(
      `${environment.apiUrl}/${this.url}${vehicleId}`
    );
  }
  public updateVehicle(
    vehicle: VehicleModel,
    vehicleId: number
  ): Observable<VehicleModel[]> {
    return this.http.put<VehicleModel[]>(
      `${environment.apiUrl}/${this.url}/${vehicleId}`,
      vehicle
    );
  }
}
