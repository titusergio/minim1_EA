import {Router} from 'express';

import {getEventos, createEvento, updateEvento , deleteEvento, getEvento} from '../controllers/evento';

const router = Router();

router.get('/', getEventos);
router.get('/:id',getEvento)
router.post('/', createEvento);
router.put('/:id', updateEvento);
router.delete('/:id', deleteEvento);


export default router;