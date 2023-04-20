import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceTsService } from 'src/app/services/auth.service.ts.service';

@Component({
  selector: 'app-vehiclebranding',
  templateUrl: './vehiclebranding.component.html',
  styleUrls: ['./vehiclebranding.component.css'],
})
export class VehiclebrandingComponent {
  constructor(private auth: AuthServiceTsService, private route: Router) {}
  logout() {
    this.auth.removeToken();
    this.route.navigateByUrl('/login');
  }
}
