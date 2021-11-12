import {Router} from 'express';

import { getPersonas, createPerson} from '../controllers/persona';

const router = Router();

router.get('/', getPersonas);
router.post('/', createPerson);



export default router;