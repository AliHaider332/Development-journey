import express from 'express';
import {
  AddURL,
  forntPageRender,
  getURL_For_Admin,
  renderToURL,
} from '../controllers/handleUrlShortner.js';
import { checkAuthoried } from '../middleware/checkLogin.js';
const router = express.Router();
router.get('/', checkAuthoried(['normal']), forntPageRender);
router.post('/shorten', checkAuthoried(['normal']), AddURL);
router.get('/admin', checkAuthoried(['admin']), getURL_For_Admin);
router.get('/:id', checkAuthoried(['normal']), renderToURL);


export default router;
