import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        lowercase: true,
    }
}, {
    timestamp: true
}) // creating a schema.

export const User = mongoose.model("User", userSchema) // model asks for two parameters , "User" refers to the name to give in the mongoDB and on what basis do we want the model to make so that is the userSchema.

//! imp for interview: User will be converted into plural eg. Users in mongoDB. This is a Standard Practice in mongoDB.