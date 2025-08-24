const express=require('express');
const directotry=require('../controlar/404')
const Page404=express.Router();
Page404.use('/',directotry.throw404);
module.exports={Page404};