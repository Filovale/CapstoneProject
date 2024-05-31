import { Router } from "express"
import User from "./model.js"
export const userRoute = Router()
import bcrypt from "bcrypt";
import { generateJWT } from "../../auth/index.js";


//Questa rotta gestisce la richiesta GET per ottenere tutti gli autori.
userRoute.get("/", async (req, res, next) => {

  try {

    const page = req.query.page || 1

    //Utilizzo il metodo find() di Mongoose per trovare tutti gli autori nel database.
    let users = await User.find()

      //Applico la paginazione limitando il risultato a 20 autori per pagina e saltando gli autori delle pagine precedenti.
      .limit(20)
      .skip(20 * (page - 1))

    res.send(users)

  } catch (error) {
    next(error)
  }
})

//Questa rotta gestisce la richiesta GET per ottenere un autore specifico in base all'ID.
userRoute.get("/:id", async (req, res, next) => {

  try {

    //Utilizzo il metodo findById() di Mongoose per trovare l'autore nel database utilizzando l'ID fornito nella richiesta.
    let user = await User.findById(req.params.id)

    res.send(user)

  } catch (error) {
    next(error)
  }
})


userRoute.post("/", async (req, res, next) => {

  try {

    let password = bcrypt.hashSync(req.body.password, 10);
    let user = await User.create({...req.body, password})
    res.send(user)

  } catch (error) {
    next(error)
  }
})

userRoute.post("/login", async (req, res, next) => {

  try {

    let email = req.body.email;
    let password = req.body.password;
    let user = await User.findOne({
      email
    })

    let validate = (bcrypt.compareSync(password, user.password))
    if (validate) {
      res.send({
        token: await generateJWT({
          id: user._id ,
          email: user.email
        })
      })
    } else {
      res.status(400).send({
        message: "Wrong password"
      })
    }
    res.send({validate});

  } catch (error) {
    next(error)
  }
})