const express=require('express');
const { postDetail } = require('../../controlar/useSideControlar');
const detailPage=express.Router();

detailPage.get('/userList/:id',postDetail);

module.exports={detailPage};