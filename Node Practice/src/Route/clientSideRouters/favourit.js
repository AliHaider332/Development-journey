const express=require('express');


const { favouritList } = require('../../controlar/useSideControlar');

const favourit=express.Router();

favourit.use('/favourit',favouritList);

module.exports={favourit};