import mongoose from 'mongoose'

//2-require mongoose schema
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
})

const User = mongoose.model('User', userSchema)
export default User;