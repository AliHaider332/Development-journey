import shortid from 'shortid';
import { url } from '../models/URL_DB_Setup.js';

export const forntPageRender = async (req, res) => {
  const urls = await url.find({ createby: req.user._id });
  res.render('frontPage', { shortUrl: null, urls });
};
export const AddURL = async (req, res) => {
  try {
    const { URL } = req.body;

    if (!URL) {
      const urls = await url.find({ createby: req.user._id });
      return res.render('frontPage', {
        shortUrl: null,
        error: 'Please enter a valid URL',
        urls,
      });
    }

    const shortID = shortid.generate();

    await url.create({
      originalURL: URL,
      shortID,
      createdBy: req.user._id,
    });

    const urls = await url.find({ createdBy: req.user._id });

    res.render('frontPage', {
      shortUrl: `http://localhost:3000/${shortID}`,
      error: null,
      urls,
    });
  } catch (error) {
    console.error(error);
    const urls = await url.find({ createby: req.user._id });
    res.render('frontPage', {
      shortUrl: null,
      error: 'Something went wrong. Please try again.',
      urls,
    });
  }
};

export const renderToURL = async (req, res) => {
  try {
    const { id } = req.params;

    const entry = await url.findOne({ shortID: id });

    if (!entry) {
      return res.status(404).send('Short URL not found');
    }

    // Track impression (optional but recommended)
    entry.impressions.push({ date: new Date() });
    await entry.save();

    // Redirect to original URL
    res.redirect(entry.originalURL);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export const getURL_For_Admin = async (req, res) => {
  try {
    const data = await url.find().sort({ createdAt: -1 }).lean();

    if (!data || data.length === 0) {
      return res.render('admin', { data: [], message: 'No URLs found.' });
    }
    console.log(data);

    res.render('admin', { data });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};
