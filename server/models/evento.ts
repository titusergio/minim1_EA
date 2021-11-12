import { Schema, model, Document, ObjectId} from 'mongoose';



// 1. Create an interface representing a document in MongoDB.
 export interface EventoI extends Document {                                                                     //interface o clase??
    nombre: string,
    fecha: string,
    descripcion: string,                                                                                                  //nose pq no me deja ponerle date, me da conflicto pf
    cordenadas: number,
    personas: Array<ObjectId>       
    };
  
    


  // 2. Create a Schema corresponding to the document interface.
const EventoSchema = new Schema<EventoI>({
    nombre: { type: String, required: true },
    fecha: { type: String, required: true },
    descripcion: { type: String, required: true },
    cordenadas: { type: Number, required: true },
    personas:[{type: Schema.Types.ObjectId, ref:'PersonaI',required:false}]

    
  });


// 3. Create a Model.
export const EventoModel = model<EventoI>('eventos', EventoSchema);  