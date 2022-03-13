import express from "express"
import { Pokemon } from "../models/Pokemon.js"

//show all pokemon
const index = async (req, res) => {
  try{
    const PAGE_SIZE = 3;
    const page = parseInt(req.query.page || '0')
    const totalPages = await Pokemon.countDocuments({})
    const pokemons = await Pokemon.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page)
    res.status(200).json({
      totalPages: Math.ceil(totalPages/PAGE_SIZE),
      pokemons
    })
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

//create new pokemon
const create = async (req, res) => {
  try{
    const pokemon = await Pokemon.create(req.body)
    res.status(201).json(pokemon)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

//view pokemon details
const details = async (req, res) => {
  try {
    const pokemon = await Pokemon.findById(req.params.id)
    res.status(200).json(pokemon)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

//delete pokemon
const deletePokemon = async (req, res) => {
  try{
    const pokemon = await Pokemon.findByIdAndDelete(req.params.id);
    res.status(200).json(pokemon);
  } catch (err){
    console.log(err)
    res.status(500).json(err)
  }
  
}

//update pokemon
const update = async (req, res) => {
  try{
    const pokemon = await Pokemon.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(pokemon)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index,
  deletePokemon as delete,
  create,
  update,
  details
}