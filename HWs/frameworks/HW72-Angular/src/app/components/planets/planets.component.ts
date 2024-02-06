import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.css',
})
export class PlanetsComponent {
  private items: any;

  constructor(private dataService: DataService) {
    dataService.getPlanetsContact().subscribe((data: any) => {
      this.items = data.results;
    });
  }

  getItems() {
    return this.items;
  }
}
