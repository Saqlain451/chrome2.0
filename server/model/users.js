import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    cpass: {
        type: String,
        required: true,
    }
})

const users = new mongoose.model("user", userSchema);
export default users;