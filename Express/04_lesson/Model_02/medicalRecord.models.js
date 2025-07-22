import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({},{timestamps:true})

export const record = mongoose.model("MedicalRecord",recordSchema)