import { Router } from "express"
import Review from "./model.js"
import Drone from "../drones/model.js"
export const reviewsRoute = Router()

//Questa rotta gestisce la richiesta GET per ottenere tutti i droni.
reviewsRoute.get("/drones/:droneid/reviews", async (req, res, next) => {

  try {

    //http://localhost:3001/blogs?title=tech&page=3

    //Utilizzo il metodo find() di Mongoose per trovare i blog nel database, eventualmente filtrati in base al titolo fornito nella query.
    let drone = await Drone.findById(req.params.droneid).populate({
      path:"reviews", 
    })
//  console.log(drones.length, page)
    res.send(drone.reviews)

  } catch (error) {
    next(error)
  }
})
/*
//Questa rotta gestisce la richiesta DELETE per eliminare un blog esistente in base all'ID.
blogRoute.delete("/:id", async (req, res, next) => {

  try {

    //Utilizzo il metodo deleteOne() di Mongoose per eliminare il blog nel database utilizzando l'ID fornito nella richiesta.
    await Blog.deleteOne({
      _id: req.params.id,
    })

    //Restituisce una risposta vuota con il codice di stato 204 (No Content) per indicare che l'eliminazione è avvenuta con successo.
    res.send(204)

  } catch (error) {
    next(error)
  }
})
*/

//Questa rotta gestisce la richiesta POST per creare un nuovo blog.
reviewsRoute.post("/drones/:droneid/reviews", async (req, res, next) => {

  try {

    let review = new Review({...req.body, drone:req.params.droneid});
    await review.save();

    await Drone.findByIdAndUpdate(req.params.droneid, {
      $push:{
        reviews:review._id
      }
    })

    res.send(review)

  } catch (error) {
    next(error)
  }
})

