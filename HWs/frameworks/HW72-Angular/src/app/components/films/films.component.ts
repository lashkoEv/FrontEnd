import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrl: './films.component.css',
})
export class FilmsComponent {
  private items: any;

  constructor(private dataService: DataService) {
    dataService.getFilmsContact().subscribe((data: any) => {
      this.items = data.results;
    });
  }

  getItems() {
    return this.items;
  }
}
