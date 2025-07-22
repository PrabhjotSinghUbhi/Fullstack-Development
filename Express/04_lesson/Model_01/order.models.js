import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    orderPrice: {
        type: Number,
        orderPrice: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    orderItems: {
        type: [orderItemSchema]
    },
    address: {
        type: string,
        required: true
    },
    status: {
        type: String,
        enums: [
            "PENDING",
            "CANCELED",
            "DELIVERED"
        ],
        default: "PENDING"
    }
}, { timestamps: true })

export const order = mongoose.model("Order", orderSchema)