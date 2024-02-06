import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrl: './species.component.css',
})
export class SpeciesComponent {
  private items: any;

  constructor(private dataService: DataService) {
    dataService.getSpeciesContact().subscribe((data: any) => {
      this.items = data.results;
    });
  }

  getItems() {
    return this.items;
  }
}
