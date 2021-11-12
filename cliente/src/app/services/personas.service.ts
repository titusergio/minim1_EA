import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Persona } from "../models/persona.model";
import { Evento } from "../models/evento.model";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  URL_API = 'http://localhost:4000/personas'

  personas!: Persona[];
  evento!: Evento;

  constructor(private http:HttpClient) { }


  getPersonas() {
    return this.http.get<Persona[]>(this.URL_API);
    
  }

  createStudent(persona: Persona){
    return this.http.post(this.URL_API,persona);
  }
}
