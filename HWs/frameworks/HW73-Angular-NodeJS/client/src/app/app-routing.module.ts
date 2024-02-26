import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {
    component: QuizzesComponent,
    path: 'quizzes',
  },

  {
    component: QuizzesComponent,
    path: 'quizzes/front-end',
  },

  {
    component: QuizzesComponent,
    path: 'quizzes/back-end',
  },

  {
    component: QuizzesComponent,
    path: 'quizzes/qa',
  },

  {
    component: ResourcesComponent,
    path: 'resources',
  },

  {
    component: ResourcesComponent,
    path: 'resources/all',
  },

  {
    component: ResourcesComponent,
    path: 'resources/front-end',
  },

  {
    component: ResourcesComponent,
    path: 'resources/back-end',
  },

  {
    component: ResourcesComponent,
    path: 'resources/qa',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
