import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrl: './starships.component.css',
})
export class StarshipsComponent {
  private items: any;

  constructor(private dataService: DataService) {
    dataService.getStarshipsContact().subscribe((data: any) => {
      this.items = data.results;
    });
  }

  getItems() {
    return this.items;
  }
}
