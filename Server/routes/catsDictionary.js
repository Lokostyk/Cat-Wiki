const express = require("express")
const router = express.Router()
const catModel = require("../models/Cats")

router.get("/",async (req,res)=>{
    try{
        const cats = await catModel.find()
        console.log("bob")
        res.send(cats)
    }catch (err){
        res.send(err)
    }
})
router.post("/",async (req,res)=>{
    console.log(req.body)
    const newCat = new catModel(req.body)
    try{
        newCat.save()
        console.log(newCat)
    }catch (err){
        res.send(err)
    }
})
module.exports = router