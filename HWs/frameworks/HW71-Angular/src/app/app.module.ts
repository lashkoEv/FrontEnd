import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { BurgersComponent } from './components/burgers/burgers.component';
import { TacosComponent } from './components/tacos/tacos.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from './components/product/product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { AdminPannelComponent } from './components/admin-pannel/admin-pannel.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BurgersComponent,
    TacosComponent,
    PizzasComponent,
    ProductComponent,
    ProductInfoComponent,
    AuthorizationComponent,
    AddProductFormComponent,
    AdminPannelComponent,
    AddUserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
