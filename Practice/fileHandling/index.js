import express from 'express';
import ejs from 'ejs';
import fileRoutes from './routes/handleUplaodsRoutes.js';
const app = express();

app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(fileRoutes);
app.listen(3000, () => {
  console.log('Server is running at 3000 Port');
});
