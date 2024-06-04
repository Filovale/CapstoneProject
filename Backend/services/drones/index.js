import { Router } from "express"
import Drone from "./model.js"
import q2m from "query-to-mongo"
import Review from "../reviews/model.js"
import { authMiddleware } from "../../auth/middleware.js"
export const droneRoute = Router()

droneRoute.get("/", async (req, res, next) => {

  try {

    const page = req.query.page || 1

    let drones = await Drone.find(req.query.title ? {title: {$regex: req.query.title}} : {})

      .limit(20)
      .skip(20 * (page - 1))

    res.send(drones)

  } catch (error) {
    next(error)
  }
})

//Questa rotta gestisce la richiesta GET per ottenere un blog specifico in base all'ID.
droneRoute.get("/:id", async (req, res, next) => {

  try {

    //Utilizzo il metodo findById() di Mongoose per trovare il blog nel database utilizzando l'ID fornito nella richiesta
    let drone = await Drone.findById(req.params.id)
    res.send(drone)

  } catch (error) {
    next(error)
  }
})

droneRoute.get("/:id/reviews", async (req, res, next) => {

  try {

    let drone = await Drone.findById(req.params.id).populate({
      path:"reviews", 
    })
    res.send(drone.reviews)

  } catch (error) {
    next(error)
  }
})

droneRoute.post("/:id/reviews", authMiddleware, async (req, res, next) => {

  try {

    let review = new Review({
      ...req.body, 
      drone:req.params.id,
      date:new Date(req.body.date),
      author:req.user.name + " " + req.user.lastName,
    });
    await review.save();
    console.log(review)

    await Drone.findByIdAndUpdate(req.params.id, {
      $push:{
        reviews:review._id
      }
    })

    res.send(review)

  } catch (error) {
    next(error)
  }
})
