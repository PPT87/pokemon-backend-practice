import express from "express"
import { Pokemon } from "../models/Pokemon.js"

//show all pokemon
const index = async (req, res) => {
  Pokemon.find({})
  .then(pokemons => res.status(200).json(pokemons))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
}

//create new pokemon
const create = async (req, res) => {
  Pokemon.create(req.body)
  .then(pokemon=>res.status(201).json(pokemon))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
}

//view pokemon details
const details = async (req, res) => {
  Pokemon.findById(req.params.id)
  .then(pokemon=>res.status(200).json(pokemon))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
}

//delete pokemon
const deletePokemon = async (req, res) => {
  Pokemon.findByIdAndDelete(req.params.id)
  .then(pokemon=>res.status(204).json(pokemon))
  .catch(err=>{
    console.log(err)
    res.status(500).json(err)
  })
}

//update pokemon
const update = async (req, res) => {
  Pokemon.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((pokemon) => res.status(204).json(pokemon))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

export {
  index,
  deletePokemon as delete,
  create,
  update,
  details
}