const express=require('express');
const { userListControlar } = require('../../controlar/useSideControlar');
const postList=express.Router();
postList.get('/userList',userListControlar);
module.exports={postList}