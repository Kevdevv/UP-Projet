const mongoose = require("mongoose")

const CoachSchema = new mongoose.Schema({
    discipline : {
        type : String, 
        default: "musculation",
        },
    bio : {type : String, default : "No description for this coach"},
    user : {type : mongoose.Schema.Types.ObjectId, ref : "User"}    
})

const Coach = new mongoose.model("Coach", CoachSchema)

module.exports = Coach