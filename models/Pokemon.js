import mongoose from "mongoose";

const Schema = mongoose.Schema

const pokemonSchema = new Schema (
{
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
},
  {timestamps: true}
)

const Pokemon = mongoose.model('Pokemon', pokemonSchema)

export {
  Pokemon
}