const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dataSchema = Schema(
  {
    cin: { 
      type: String,
      required: true,
    },
    phone: { 
      type: String,
      required: true,
    },
    country: { 
      type: String,
      required: true,
    },
    city: { 
      type: String,
      required: true,
    },
    adresse: { 
      type: String,
      required: true,
    },
    postal: { 
      type: String,
      required: true,
    },
    solde: { 
      type: String,
      required: true,
    },
    born_date: {
      type: String,
      required: true,
    },
    image: { 
      type: String,
      required: true,
    },
    id_client:  [{
        type: Schema.Types.ObjectId,
        required: true,
        ref:'client'
      }],
  },
  { timestamps: true }
);

module.exports = data = mongoose.model("data", dataSchema);
