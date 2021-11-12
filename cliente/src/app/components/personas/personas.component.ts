import { Component, OnInit } from '@angular/core';
import {  NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { PersonasService } from "../../services/personas.service";
import { Persona } from "../../models/persona.model";

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  constructor(public personaService: PersonasService, private router:Router) { }

 
  
  

    ngOnInit(): void {
    
    this.getPersonas();
    
    
  
  }


  getPersonas(){
    this.personaService.getPersonas().subscribe(
      res => {
        this.personaService.personas = res;
        

      } ,
      err => console.error(err)
    )

  }

  prueba(){
    console.log(this.personaService.evento);
    console.log(this.personaService.personas);
  }
  
}
