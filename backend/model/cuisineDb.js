const mongoose = require ("mongoose");

mongoose.connect("mongodb://ptpm:468@ac-fivp7gi-shard-00-00.0jw4qon.mongodb.net:27017,ac-fivp7gi-shard-00-01.0jw4qon.mongodb.net:27017,ac-fivp7gi-shard-00-02.0jw4qon.mongodb.net:27017/cuisinemstdb?ssl=true&replicaSet=atlas-5v8bl4-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(()=>{
    console.log("db connected")
})
.catch(err=>console.log(err))

let Schema = mongoose.Schema;

const cuisineSchema = new Schema({
    cuisinename:String,
    duration:String,
    noserving:Number,
    imageUrl:String
});
var cuisineModel = mongoose.model("recipe",cuisineSchema);
module.exports = cuisineModel;