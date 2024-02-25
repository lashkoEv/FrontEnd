import { Component } from '@angular/core';
import { ResourceService } from '../resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss'
})
export class ResourcesComponent {
  constructor(
    public resources:ResourceService
  ) {
    resources.getContact()
  }
}
