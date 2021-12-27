const express = require("express")
const router = express.Router()
const catModel = require("../models/Cats")

router.get("/",async (req,res)=>{
    const cats = await catModel.find()
    try{
        res.send(cats)
    }catch (err){
        res.send(err)
    }
})

router.post("/",async (req,res)=>{
    const newCat = new catModel(req.body)
    try{
        newCat.save()
    }catch (err){
        res.send(err)
    }
})
module.exports = router