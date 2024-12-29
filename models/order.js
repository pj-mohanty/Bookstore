const mongoose = require("mongoose");

const order = new mongoose.Schema({
    user: {
        type: moongose.Type.ObjectId,
        ref: "user",
    },
    boot: {
        type: moongose.Type.ObjectId,
        ref: "books", 
    },
    status: {
        type: string,
       default: "Order Placed", 
       enum: ["Order Placed" , "Out for delivery, Delivered, Cancelled" ]
    }
},
{timestamps: true}
);
module.exports = mongoose.model("order", order);