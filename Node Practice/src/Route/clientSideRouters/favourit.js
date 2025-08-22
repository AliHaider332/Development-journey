const express=require('express');


const { favouritList1, favouritList2} = require('../../controlar/useSideControlar');

const favourit=express.Router();

favourit.post('/favourit',favouritList1);
favourit.get('/favourit',favouritList2);

module.exports={favourit};