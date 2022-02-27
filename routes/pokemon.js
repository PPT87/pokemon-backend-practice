import express from "express";
import { Router } from "express";

import * as pokemonCtrl from '../controllers/pokemon.js'

const router = Router()

//localhost:6001/pokemon ==> get all pokemon
router.get('/', pokemonCtrl.index)

//localhost:6001/pokemon ==> create a pokemon
router.post('/', pokemonCtrl.create)

//localhost:6001/pokemon/:id ==> view a specific pokemon details
router.get('/:id', pokemonCtrl.details)

//localhost:6001/pokemon/:id ==> delete a specific pokemon
router.delete('/:id', pokemonCtrl.delete)

//localhost:6001/pokemon/:id ==> update a specific pokemon
router.put('/:id', pokemonCtrl.update)


export {
  router
}