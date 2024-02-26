import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.scss',
})
export class ResourcesComponent implements OnInit {
  private toShow: any[] = [];

  private topics: any[] = [
    {
      label: 'All',
      url: '/resources/all',
    },
    {
      label: 'Front-End',
      url: '/resources/front-end',
    },
    {
      label: 'Back-End',
      url: '/resources/back-end',
    },
    {
      label: 'QA',
      url: '/resources/qa',
    },
  ];

  constructor(public resources: ResourceService) {}

  ngOnInit(): void {
    switch (this.resources.currentTopic) {
      case 'all':
        this.resources.getResourcesAll().subscribe((data) => {
          this.toShow = data;
        });
        break;
      case 'front-end':
        this.resources.getResourcesFront().subscribe((data) => {
          this.toShow = data;
        });
        break;
      case 'back-end':
        this.resources.getResourcesBack().subscribe((data) => {
          this.toShow = data;
        });
        break;
      case 'qa':
        this.resources.getResourcesQA().subscribe((data) => {
          this.toShow = data;
        });
        break;
      default:
        break;
    }
  }

  getTopics() {
    return this.topics;
  }

  getData() {
    return this.toShow;
  }

  onClickHandler(link: string) {
    switch (link.trim().toLowerCase()) {
      case 'all':
        this.resources.getResourcesAll();
        break;
      case 'front-end':
        this.resources.getResourcesFront();
        break;
      case 'back-end':
        this.resources.getResourcesBack();
        break;
      case 'qa':
        this.resources.getResourcesQA();
        break;
      default:
        break;
    }
  }
}
