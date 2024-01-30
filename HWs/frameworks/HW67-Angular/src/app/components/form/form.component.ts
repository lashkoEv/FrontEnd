import { Component } from '@angular/core';
import { FormService } from '../../services/form.service';
import { PostService } from '../../services/post-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  constructor(
    private formService: FormService,
    private postService: PostService
  ) {}

  getVisibility() {
    return this.formService.getVisibility();
  }

  onSubmitHandler(data) {
    this.postService.add(data.title);
    this.formService.changeVisibility();
  }
}
