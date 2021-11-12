import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Evento } from "../models/evento.model";

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  URL_API = 'http://localhost:4000/eventos'

  selectedEvento: Evento = new Evento();
  eventos! : Evento[];
  personaId! : string[];

  


  constructor(private http:HttpClient) {}

    getEventos() {
      return this.http.get<Evento[]>(this.URL_API);
      
    }

    

    createEvento(evento: Evento){
      return this.http.post(this.URL_API,evento);
    }

    deleteEvento(_id: string) {
      return this.http.delete(`${this.URL_API}/${_id}`);
      
    }

    //lo pongo por separado porque si pongo en el input type="hidden" de nombre "_id" me da conflicto al hacer un post
    updateSubject(evento: Evento, id: String){
      
      return this.http.put(`${this.URL_API}/${id}`,evento);

    }

    getEvento(id:String){

      return this.http.get<Evento>(`${this.URL_API}/${id}`);
    }

}
