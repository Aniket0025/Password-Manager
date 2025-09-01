import mongoose from "mongoose";
const passwordSchema = new mongoose.Schema({

    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    title: {
        type: String,
        require: true
    },
    dedc: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
}, { timestamps: true })

export default mongoose.model("password", passwordSchema)