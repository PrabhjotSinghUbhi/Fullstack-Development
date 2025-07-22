import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    content: {
        type: String,
        required: true,
        completed: {
            type: Boolean,
            default: false
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        subTodo: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ]
    }//Arrays of sub Todos.
}, { timestamp: true })

export const Todo = mongoose.model("Todo", todoSchema)