import { Component } from '@angular/core';
import { ResourceService } from '../services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent {
  public resources:any = [];

  constructor(
    public resourcesService:ResourceService
  ) {
    this.resourcesService.getContact().subscribe(data => {
      this.resources = data;
    })
  }
}
