import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PeopleComponent } from './components/people/people.component';
import { PlanetsComponent } from './components/planets/planets.component';
import { FilmsComponent } from './components/films/films.component';
import { SpeciesComponent } from './components/species/species.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { StarshipsComponent } from './components/starships/starships.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PeopleComponent,
    PlanetsComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesComponent,
    StarshipsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
