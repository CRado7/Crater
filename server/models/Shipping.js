const mongoose = require('mongoose');

const { Schema } = mongoose;

const shippingSchema = new Schema({
    address: {
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true
    },
    zip: {
      type: String,
      required: true,
      trim: true
    },
    country: {
      type: String,
      required: true,
      trim: true
    }
  });

const Shipping = mongoose.model('Shipping', shippingSchema);

module.exports = Shipping;