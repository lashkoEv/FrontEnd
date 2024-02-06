import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css',
})
export class PeopleComponent {
  private items: any;

  constructor(private dataService: DataService) {
    dataService.getPeopleContact().subscribe((data: any) => {
      this.items = data.results;
    });
  }

  getItems() {
    return this.items;
  }
}
