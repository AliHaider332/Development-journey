import express from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const fileRoutes = express.Router();
fileRoutes.get('/', (req, res) => {
  res.render('abc');
});
const upload = multer({
  storage,
  limits: { fileSize: 500 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Only image files allowed'), false);
    }
    cb(null, true);
  },
}).single('profile');

fileRoutes.post('/handleSubmit', (req, res) => {

  upload(req,res,(err)=>{})





  console.log(req.file);
  res.send('Upload successful');
});

export default fileRoutes;
