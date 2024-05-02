const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/paytmApp")
.then(()=> console.log("MongoDB connected"))
.catch((err)=> console.log("Mongo Error",err));

const userSchema = mongoose.Schema({
    
    username:{ 
    type: String,
    require:true,
    },

    firstname:{
    type: String,
    require:true,
    },

    lastname:{
        type: String,
    },
    email: {
    type: String,
    require: true,
    unique: true
    },
    
    password:{
    type: String,
    require: true,
    }
})

const User = mongoose.model("User" ,userSchema);

module.exports = {
    User
}

