import mongoose, { Schema, models } from "mongoose";
const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    originalPrice: {
      type: String,
      required: true,
    },
    durdiscountPrice: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    ratings: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    stock: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const product = models.product || mongoose.model("product", productSchema);
export default product;
