import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    diagnosedWith: {
        disease: String,
        required: String
    },
    address: {
        type: String,
        required: true
    },
    age: Number,
    bloodGroup: {
        type: String,
        enums: [
            "A+", "A-", "B+", "B-", "AB+", "O+", "O-", "GOLDEN RH"
        ],
        default: "O-"
    },
    gender: {
        type: String,
        enums: ["MALE", "FEMALE", "Prefer not to say"],
        default: "FEMALE"
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    },
    doctorAssigned: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    }
}, { timestamps: true })

export const patient = mongoose.model("Patient", patientSchema)