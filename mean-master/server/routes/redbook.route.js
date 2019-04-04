const express = require('express');
const asyncHandler = require('express-async-handler');
const redbookCrl = require('../controllers/redbook.controller');

const router =  express.Router();
module.exports = router;

router.route('/add').post(asyncHandler(addRB));
router.route('/change_owner').post(asyncHandler(changeOwner));
router.route('/getdetail').post(asyncHandler(getDetail));




async function addRB(req,res){
    let result = await redbookCrl.addRB(req.body);
    res.json(result);
}

async function changeOwner(req,res){
    let result = await redbookCrl.change_owner(req.body);
    res.json(result);
}

async function getDetail(req,res){
    let result = await redbookCrl.getDetail(req.body);
    res.json(result);
}