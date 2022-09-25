const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  user: {
    password: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    accounts: [
      {
        shopname: {
          type: String,
          required: false,
        },
        address: {
          type: String,
          required: false,
        },
        pincode: {
          type: Number,
          required: false,
        },
        contact: {
          type: Number,
          required: false,
        },
        pay: {
          type: Number,
          required: false,
          default: 0,
        },
        receive: {
          type: Number,
          required: false,
          default: 0,
        },
        
      }
    ]
  }
});

const USER = mongoose.model('user-entry', user_schema);

module.exports = USER;