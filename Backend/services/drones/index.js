import { Router } from "express"
import Drone from "./model.js"
import q2m from "query-to-mongo"
export const droneRoute = Router()

//Questa rotta gestisce la richiesta GET per ottenere tutti i droni.
droneRoute.get("/", async (req, res, next) => {

  try {

    //http://localhost:3001/blogs?title=tech&page=3

    const page = req.query.page || 1

    //Utilizzo il metodo find() di Mongoose per trovare i blog nel database, eventualmente filtrati in base al titolo fornito nella query.
    let drones = await Drone.find(req.query.title ? {title: {$regex: req.query.title}} : {})

      //Applico la paginazione limitando il risultato a 20 blog per pagina e saltando i blog delle pagine precedenti.
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

/*
//Questa rotta gestisce la richiesta PUT per aggiornare un blog esistente in base all'ID.
blogRoute.put("/:id", async (req, res, next) => {

  try {

    //Utilizzo il metodo findByIdAndUpdate() di Mongoose per trovare e aggiornare il blog nel database
    //utilizzando l'ID fornito nella richiesta e i dati forniti nel corpo della richiesta.
    let blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })

    res.send(blog)

  } catch (error) {
    next(error)
  }
})

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

//Questa rotta gestisce la richiesta POST per creare un nuovo blog.
blogRoute.post("/", async (req, res, next) => {

  try {

    //Utilizzo il metodo create() di Mongoose per creare un nuovo blog nel database utilizzando i dati forniti nel corpo della richiesta
    let blog = await Blog.create(req.body)
    res.send(blog)

  } catch (error) {
    next(error)
  }
})
*/
