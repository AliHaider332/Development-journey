import express from 'express';
import shortid from 'shortid';
import { user } from '../models/mongoDB.js';

const route = express.Router();

route.get('/', async (req, res) => {
  res.render('urlShortner', {
    actionRoute: '/getShortURL',
    managedUrl: null,
    allUrls: null,
  });
});

// Use POST for creating a short URL

route.get('/', async (req, res) => {
  res.render('urlShortner', {
    actionRoute: '/getShortURL',
    managedUrl: null,
    allUrls: null,
  });
});

// Create short URL
route.post('/getShortURL', async (req, res) => {
  try {
    const { originalURL } = req.body;

    if (!originalURL) {
      return res.render('urlShortner', {
        actionRoute: '/getShortURL',
        managedUrl: 'Original URL is required',
        allUrls: null,
      });
    }

    const shortID = shortid.generate();

    await user.create({
      original_URL: originalURL,
      shortID,
    });

    const shortURL = `http://localhost:9000/${shortID}`;
    const data = await user.find();
    console.log(data);

    res.render('urlShortner', {
      actionRoute: '/getShortURL',
      managedUrl: shortURL,
      allUrls: data,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

route.get('/:id', async (req, res) => {
  const { id } = req.params;
  const urlDoc = await user.findOne({ shortID: id });
  if (!urlDoc) return res.status(404).json({ message: 'URL not found' });
  urlDoc.impressions.push({ time: Date.now() });
  await urlDoc.save();
  res.redirect(urlDoc.original_URL);
});

export default route;
