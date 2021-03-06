import express from "express";
import { Router } from "express";

import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

//localhost:6001/api/pokemon ==> get all pokemon
router.get('/', pokemonCtrl.index)

//localhost:6001/api/pokemon ==> create a pokemon
router.post('/', pokemonCtrl.create)

//localhost:6001/api/pokemon/:id ==> view a specific pokemon details
router.get('/:id', pokemonCtrl.details)

//localhost:6001/api/pokemon/:id ==> delete a specific pokemon
router.delete('/:id', pokemonCtrl.delete)

//localhost:6001/api/pokemon/:id ==> update a specific pokemon
router.put('/:id', pokemonCtrl.update)


export {
  router
}