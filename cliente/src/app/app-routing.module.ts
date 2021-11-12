import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  EventosComponent} from "./components/eventos/eventos.component";
import { PersonasComponent } from "./components/personas/personas.component";

const routes: Routes = [
  {
    path:'',
    redirectTo: 'eventos',
    pathMatch: 'full'
  },
  {
  path: 'personas',
  component: PersonasComponent
  },

  {
  path: 'eventos',
  component: EventosComponent
  }   
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
