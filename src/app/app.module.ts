import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { MainComponent } from './main/main.component';
import {HeroDetailComponent} from './heroDetail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    MainComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]

    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },

    ])
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
