import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './components/tasks/tasks.component';
import { BrokenPlansComponent } from './components/broken-plans/broken-plans.component';

const routes: Routes = [
  {
    component: TasksComponent,
    path: '',
  },
  {
    component: BrokenPlansComponent,
    path: 'broken',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
