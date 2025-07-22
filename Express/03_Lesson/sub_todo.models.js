import mongoose from "mongoose";

const subTodo = mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timeStamp: true })

export const SubTodo = mongoose.model("SubTodo", subTodo)