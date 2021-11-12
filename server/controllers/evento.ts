import { Response, Request, Router } from 'express';
import mongoose from 'mongoose';

import {EventoI, EventoModel} from '../models/evento';

const router = Router();

export const getEventos = async (req:Request, res:Response) => { 
    try {
        const eventos:EventoI[] = await EventoModel.find();               
        res.status(200).json(eventos);
        
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}

export const getEvento = async (req:Request, res:Response) => { 
    
    const { id } = req.params;

    try {
        const evento = await EventoModel.findById(id);
        
        res.status(200).json(evento);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
}



export const createEvento = async (req:Request, res:Response) => {

    const newEvento:EventoI = req.body;

    const newPostEvento = new EventoModel(newEvento);

    try {
        await newPostEvento.save();

        res.status(201).json(newPostEvento );
    } catch (error:any) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvento = async (req:Request, res:Response) => {
    const { id } = req.params;
    const updatedEvento = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No hay eventos con la id: ${id}`);

    await EventoModel.findByIdAndUpdate(id, updatedEvento, { new: true });

    res.json(updatedEvento);
}

export const deleteEvento = async (req:Request, res:Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No hay eventos con esa id: ${id}`);

    await EventoModel.findByIdAndRemove(id);

    res.json({ message: "Evento eliminado correctamente" });
}






export default router;