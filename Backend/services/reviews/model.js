import { Schema, model } from "mongoose"

const reviewsSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    drone: { type: Schema.Types.ObjectId, ref: "Drone", required: true }
  },
  { collection: "reviews" }
)

export default model("Review", reviewsSchema)
