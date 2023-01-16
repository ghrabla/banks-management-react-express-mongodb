const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const transactionSchema = Schema(
    {
        sender:{
            type: String,
            required: true
        },
        resaver:{
            type: String,
            required: true
        },
        amount:{
            type: Number,
            required: true
        },
        id_sender:{
            type: Schema.Types.ObjectId,
            required: true,
            ref : "client"
        },
        id_resaver:{
            type: Schema.Types.ObjectId,
            required: true,
            ref : "client"
        },
    },
    { timestamps: true }
);

module.exports = transaction = mongoose.model("transaction",transactionSchema);
