import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { ResourcesComponent } from './resources/resources.component';
import { TableComponent } from './table/table.component';

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
    component: TableComponent,
    path: 'table',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
