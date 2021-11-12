import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {  NgForm } from "@angular/forms";

import { EventosService } from "../../services/eventos.service";
import { PersonasService } from "../../services/personas.service";
import { Evento } from "../../models/evento.model";

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  constructor(public eventoService: EventosService, private router:Router, public personaService: PersonasService ) { }

  newEvento: Evento = new Evento();

  evento!:Evento;


  ngOnInit(): void {
    this.getEventos();
  }

  getEventos(){
    this.eventoService.getEventos().subscribe(
      res => {this.eventoService.eventos=res},
      err => console.error(err)
    )
  }

  routing(id:string){

    this.getEvento(id);
    
    this.router.navigate(['/personas']);

  }

  getEvento(id:string){
    this.eventoService.getEvento(id).subscribe(
      res => {
        this.personaService.evento=res;
      } ,
      err => console.error(err)
    )
    
  }

  

  addEvento(form:NgForm){
        
    this.eventoService.createEvento(form.value).subscribe(
      res => {
        this.getEventos();
        form.reset();
      },
      err => console.error(err)

    )
    }

    editEvento(evento:Evento){
      this.eventoService.selectedEvento=evento;
    }

    deleteEvento(id:string){
      this.eventoService.deleteEvento(id).subscribe(
        res => this.getEventos(),
        err => console.error(err)
      );
    }

}
