const mongoose=require("mongoose")

const nutritionSchema=
new mongoose.Schema({

food:String,

calories:Number

})

module.exports=
mongoose.model(
"Nutrition",
nutritionSchema
)