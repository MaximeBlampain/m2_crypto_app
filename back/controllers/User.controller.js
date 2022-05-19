const User = require('../models/User.model')

const { encrypt, decrypt } = require("../utils/crypt");

async function authenticate(req, res){
  const {
    EMAIL,
    PASSWORD,
  } = req.body

  const userToConnect = await User.findOne({
    where: {
      EMAIL: EMAIL,
    }
  })

  const isPasswordGood = decrypt(userToConnect?.PASSWORD ?? "") === PASSWORD


  if(!userToConnect || !isPasswordGood) return res.status(404).send("Email or Password incorrect")

  const user = {
    ...userToConnect.dataValues,
    PASSWORD: "",
  }
  return res.status(202).json(user)
}

async function findOne(req, res){
  const user = await User.findOne({
    where: {
      USER_ID: req.params.USER_ID
    }
  })

  if(!user) return res.status(404).send("User not found")
  
  
  const userToReturn = {
    ...user.dataValues,
    PASSWORD: "",
  }

  return res.status(200).send(userToReturn)
}

async function findAll(req, res){

  const users = await User.findAll();

  return res.status(200).json(users.map(user => {
    return {
      ...user.dataValues,
      PASSWORD: "",
    }
  }))
}

async function create(req, res){
  const {
    FIRSTNAME,
    LASTNAME = "",
    EMAIL,
    PASSWORD,
    LANGUAGE_KEY,
  } = req.body

  const newUser = await User.create({
    FIRSTNAME,
    LASTNAME,
    EMAIL,
    PASSWORD: encrypt(PASSWORD),
    LANGUAGE_KEY,
  })

  const user = {
    ...newUser.dataValues,
    PASSWORD: "",
  }
  

  return res.status(201).json(user)
}

async function edit(req, res) {
  const {
    USER_ID,
    fieldsToEdit,
  } = req.body

  const actualUser = await User.findOne({
    where: {
      USER_ID: USER_ID
    }
  })
  
  if(!actualUser) return res.status(404).send("User Not Found")

  Object.keys(fieldsToEdit).forEach(field => {
    actualUser.set({[field]: fieldsToEdit[field]})
  })
  
  await actualUser.save()

  const user = {
    ...actualUser.dataValues,
    PASSWORD: "",
  }

  return res.status(200).json(user)
}

async function remove(req, res){
  const { USER_ID } = req.body

  const userToDelete = await User.findOne({
    where: {
      USER_ID: USER_ID
    }
  })

  if(!userToDelete) return res.status(404).send("User Not Found")

  await userToDelete.destroy()

  return res.status(204).send("User deleted !")
}

module.exports = {
  findAll,
  findOne,
  create,
  edit,
  remove,
  authenticate,
}