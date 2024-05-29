import { Router } from "express"
import Drone from "./model.js"
import q2m from "query-to-mongo"
export const droneRoute = Router()

droneRoute.get("/", async (req, res, next) => {

  try {

    const page = req.query.page || 1

    let drones = await Drone.find(req.query.title ? {title: {$regex: req.query.title}} : {})

      .limit(20)
      .skip(20 * (page - 1))

    console.log(drones.length, page)
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

