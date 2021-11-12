import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';

import {PersonaI, PersonaModel} from '../models/persona';

const router = Router();

export const getPersonas = async (req:Request, res:Response) => { 
    try {
        const persona:PersonaI[] = await PersonaModel.find();               
        res.status(200).json(persona);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}



export const createPerson = async (req:Request, res:Response) => {

    const newPersona:PersonaI = req.body;

    const newPostPerson = new PersonaModel(newPersona);

    try {
        await newPostPerson.save();

        res.status(201).json(newPostPerson );
    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}


export default router;