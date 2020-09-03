const mongoose = require('mongoose')

const ProductSchema =  new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    trim: true,
  },
  category: String,
  image: String,
  price: Number,
  brand: String,
  rating: Number,
  numReviews: Number,

})

export const Product = mongoose.model("Product", ProductSchema)

