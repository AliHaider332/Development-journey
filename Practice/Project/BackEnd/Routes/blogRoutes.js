import express from 'express';
import { checkAuthorize } from '../Middlewares/Authorization.js';
import { getAllBlogs, getSingleBlog } from '../Controllers/BlogHandler.js';
const blogRoutes = express.Router();
blogRoutes.get('/allBlogs', checkAuthorize, getAllBlogs);
blogRoutes.get('/singleBlog/:id', checkAuthorize, getSingleBlog);
export default blogRoutes;
