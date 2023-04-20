export class VehicleModel {
  vehicleId?: number;
  vehicleName?: string;
  viN_Number = '';
  engine = '';
  fuelCapacity?: number;
  fuelReserveCapacity?: number;
  mileagePerLit?: number;
  createdOn?: string = new Date().toISOString();
  vehicleTypeName = '';
  seatCapacity?: number;
  createdBy = '';
  colorName = '';
  transmissionName = '';
}
//  public int VehicleId { get; set; }
//         public string VehicleName { get; set; }
//         public string VIN_Number { get; set; }
//         public string Engine { get; set; }
//         public int FuelCapacity { get; set; }
//         public int FuelReserveCapacity { get; set; }
//         public int MileagePerLit { get; set; }
//         public int SeatCapacity { get; set; }
//         public string VehicleTypeName { get; set; }
//         public string TransmissionName { get; set; }
//         public DateTime CreatedOn { get; set; }
//         public string CreatedBy { get; set; }
