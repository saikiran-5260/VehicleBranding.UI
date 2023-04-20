import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleModel } from '../models/vehicle-model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class VehicleDetailsByChassisNumberService {
  private url = 'GetDeatilsOfVehiclesByChassisNum?chassisNum=';
  constructor(private http: HttpClient) {}

  public getVehicleDetailsByChassisNum(
    chassisNum: string
  ): Observable<VehicleModel[]> {
    return this.http.get<VehicleModel[]>(
      `${environment.apiUrl}/${this.url}${chassisNum}`
    );
  }
  // public getVehicleDetailsByChassisNumById(): // inputvalue: string
  // Observable<VehicleModel[]> {
  //   return this.http.get<VehicleModel[]>(
  //     `${environment.apiUrl}/${this.url}`
  //     // ?${inputvalue}
  //   );
  // }
}
