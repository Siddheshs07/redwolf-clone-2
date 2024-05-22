import mongoose, { Document, Schema } from "mongoose";

export interface Product extends Document {
  id: number;
  name: string;
  price: number;
  image: string;
  brandName: string;
  category: string;
  description: string;
  gender: string;
  folded: string;
  productSize: string;
  quantity: number;
  isFeatured: boolean;
}

const ProductSchema: Schema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  finalPrice: {
    type: Number,
    required: true,
  },
  strickPrice: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  productSize: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    required: true,
  },
});

const Product =
  mongoose.models.Product || mongoose.model<Product>("Product", ProductSchema);

export default Product;

export function getallProducts() {
  console.log(Product);
  return Product;
}
