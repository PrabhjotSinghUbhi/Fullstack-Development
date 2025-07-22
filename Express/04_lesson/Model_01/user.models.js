import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })
// timestamps adds two fields: createdAt and updatedAt

export const User = mongoose.model("User", userSchema)