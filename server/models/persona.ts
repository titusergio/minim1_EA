import { Schema, model, Document} from 'mongoose';



// 1. Create an interface representing a document in MongoDB.
 export interface PersonaI extends Document {                                                                     //interface o clase??
    nombre: string,
    edad: number
         
    };
  

  // 2. Create a Schema corresponding to the document interface.
const PersonaSchema = new Schema<PersonaI>({
    nombre: { type: String, required: true },
    edad: { type: Number, required: true }
    
  });


// 3. Create a Model.
export const PersonaModel = model<PersonaI>('personas', PersonaSchema);  