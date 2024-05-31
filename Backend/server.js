import express from "express"
import endpoints from "express-list-endpoints"
import mongoose from "mongoose"
import { config } from "dotenv"
import cors from "cors"
import { droneRoute } from "./services/drones/index.js"
import { badRequestHandler, genericErrorHandler, notfoundHandler, unauthorizedHandler } from "./errorHandlers.js"
import { reviewsRoute } from "./services/reviews/index.js"
import { userRoute } from "./services/users/index.js"


config()

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors({origin:"http://localhost:3000"}))


app.use("/drones", droneRoute)
app.use("/users", userRoute)
app.use(reviewsRoute)
app.use(badRequestHandler)
app.use(unauthorizedHandler)
app.use(notfoundHandler)
app.use(genericErrorHandler)


const initServer = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URL)
    console.log("The server has successfully connected to mongodb.")
    app.listen(PORT, () => {
      console.log(
        "Server has started on port " +
        PORT +
        "!" +
        " \n The server has these endpoints: \n"
      )

      console.table(endpoints(app))
    })

  } catch (error) {
    
    console.log("CONNECTION FAILED! Error: ", error)
  }
}

initServer()
