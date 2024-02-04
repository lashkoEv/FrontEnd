import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { BurgersComponent } from './components/burgers/burgers.component';
import { TacosComponent } from './components/tacos/tacos.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AdminPannelComponent as AdminPanelComponent } from './components/admin-pannel/admin-pannel.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'authorize',
    component: AuthorizationComponent,
  },
  {
    path: 'admin',
    component: AdminPanelComponent,
  },
  {
    path: 'burgers',
    component: BurgersComponent,
  },
  {
    path: 'tacos',
    component: TacosComponent,
  },
  {
    path: 'pizzas',
    component: PizzasComponent,
  },
  {
    path: ':id',
    component: ProductInfoComponent,
  },
  {
    path: 'burgers/:id',
    component: ProductInfoComponent,
  },
  {
    path: 'tacos/:id',
    component: ProductInfoComponent,
  },
  {
    path: 'pizzas/:id',
    component: ProductInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
