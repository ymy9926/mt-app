import mongoose from 'mongoose'

let UserSchema = new mongoose.Schema({
    username: String,
    // {
    //     type: String,
    //     required: true,
    //     unique: true
    // }

    password: String,
    // {
    //     type: String,
    //     required: true
    // },
    email: String
    // {
    //     type: String,
    //     required: true
    // }
})

export default mongoose.model('User', UserSchema)