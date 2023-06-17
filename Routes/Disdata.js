const express=require('express');
const { models } = require('mongoose');
const router=express.Router()

router.post('/fooditemdata', (req, res)=>{
    try {
        console.log(Food_itemdata);
    } catch (error) {
        console.error("Error");
        res.send('Server error')
    }

});
module.exports=router;