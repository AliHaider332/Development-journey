import express from 'express';
import { deleteById, getById, getController, postCntroller, update } from '../Controller/crudController.js';

const router = express.Router();

router
  .route('/api/getUser')
  .get(getController)
  .post(postCntroller);



router
  .route('/api/getUser/:id')
  .get(getById)
  .delete(deleteById);

router.patch('/api/getUser/:id/:change/:value', update);

export default router;
