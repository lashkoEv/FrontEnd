import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrl: './vehicles.component.css',
})
export class VehiclesComponent {
  private items: any;

  constructor(private dataService: DataService) {
    dataService.getVehiclesContact().subscribe((data: any) => {
      this.items = data.results;
    });
  }

  getItems() {
    return this.items;
  }
}
