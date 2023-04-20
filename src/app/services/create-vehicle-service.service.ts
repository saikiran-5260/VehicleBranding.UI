import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModel } from '../models/vehicle-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CreateVehicleServiceService {
  private posturl = 'PostVehicleModel';
  private puturl = 'PutVehicle';
  private deleteurl = 'DeleteVehicle';
  constructor(private http: HttpClient) {}

  public createVehicle(vehicle: VehicleModel): Observable<VehicleModel[]> {
    return this.http.post<VehicleModel[]>(
      `${environment.apiUrl}/${this.posturl}`,
      vehicle
    );
  }
  public updateVehicle(
    vehicle: VehicleModel,
    Id: number
  ): Observable<VehicleModel[]> {
    return this.http.put<VehicleModel[]>(
      `${environment.apiUrl}/${this.puturl}/${Id}`,
      vehicle
    );
  }
  public deleteVehicle(
    vehicle: VehicleModel,
    Id: number
  ): Observable<VehicleModel[]> {
    return this.http.delete<VehicleModel[]>(
      `${environment.apiUrl}/${this.deleteurl}/${Id}`
    );
  }
}
