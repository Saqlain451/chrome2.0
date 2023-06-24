import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    link : {
        type : String,
        required : true,
    },
    icon : {
        type : String,
        required : true,
    },
    type : {
        type : String,
        required : true
    }
})


const bookmark  = new mongoose.model("bookmark", bookmarkSchema);
export default bookmark;