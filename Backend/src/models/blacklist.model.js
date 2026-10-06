const mongoose = require('mongoose')

const blackListTokenSchema = new mongoose.Schema({
    token:{
        type:String,
        required: [true, "token is required to be added in backlist"]
    }
    
},{
    timestamps:true
})

const tokenBlacklListModel  = mongoose.model("blackListTokens",blackListTokenSchema)

module.exports = tokenBlacklListModel