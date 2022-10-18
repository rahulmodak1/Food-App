const mongoose = require('mongoose'); 
const cartSchema = mongoose.Schema({
    name : {
        required : true ,
        type : String
    } ,
    image : {
        required : true ,
        type : String
    } ,
    price : {
        required : true ,
        type : String
    },
    description : {
        required : true ,
        type : String
    }
})
module.exports =mongoose.model('cartItem' , cartSchema)
