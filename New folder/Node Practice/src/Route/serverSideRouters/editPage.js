const express=require('express');
const { editControlar } = require('../../controlar/hostSideControlar');
const editPage=express.Router();
editPage.get('/edit-page/:id',editControlar)

module.exports={editPage}