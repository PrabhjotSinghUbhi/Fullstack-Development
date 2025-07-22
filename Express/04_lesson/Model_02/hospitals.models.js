import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true,
    },
    pinCode: {
        type: String
    }
}, { timestamps: true })

export const hospital = mongoose.model("Hospital", hospitalSchema)