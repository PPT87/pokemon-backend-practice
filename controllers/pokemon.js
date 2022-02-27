import { Pokemon } from "../models/Pokemon.js"

const index = async (req, res) => {
  try{
    await res.send('this is the pokemon main')
  } catch (error) {
    return res.status(500).json(error)
  }
}

const create = async (req, res) => {
  try{
    await res.send('creating new pokemon')
  } catch (error) {
    return res.status(500).json(error)
  }
}

const details = async (req, res) => {
  try{
    await res.send(`viewing pokemon ${req.params.id}`)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const deletePokemon = async (req, res) => {
  try{
    await res.send(`deleting pokemon ${req.params.id}`)
  } catch (error) {
    return res.status(500).json(error)
  }
}

const update = async (req, res) => {
  try{
    await res.send(`viewing pokemon ${req.params.id}`);
  } catch (error) {
    return res.status(500).json(error)
  }
}

export {
  index,
  deletePokemon as delete,
  create,
  update,
  details
}