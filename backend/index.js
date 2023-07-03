//1. importing
const express = require("express");
const cuisineModel = require("./model/cuisineDb");

//2. initialise
 const app = new express();

 //3.middleware
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());

 // api creation
 //to post data
app.post('/addcuisines',async (req,res)=>{
    console.log(req.body)
    var data = await cuisineModel(req.body);
    data.save();
    res.send({status:"data saved"})
})

//to view cuisines
app.get('/viewcuisines',async (req,res)=>{
    var data = await cuisineModel.find();
    res.json(data);
})

// to delete cuisines
app.delete('/deletecuisines/:id',async(req,res)=>{
console.log(req.params);
let id = req.params.id;
await cuisineModel.findByIdAndDelete(id);
res.json({status:"deleted"})
})

// to update
app.put('/edit/:id',async(req,res)=>{
    let id = req.params.id;
    try{
        var data = await cuisineModel.findByIdAndUpdate(id,req.body);
        res.json({status:"updated"})
    }
    catch(err){
        res.status(500).send(err)
    }
})


 //port
 app.listen(3008,()=>{
    console.log("app is running in port 3008")
 })