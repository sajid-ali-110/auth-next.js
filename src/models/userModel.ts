import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "please provide a usrname"],
        unique: [true, "username is already taken"],
    },
    email:{
        type: String,
        required: [true, "please provide a usrname"],
        unique: [true, "email is already registered"],
    },
    password:{
        type: String,
        required: [true, "choose a password"],
    },
     isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    VerifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User