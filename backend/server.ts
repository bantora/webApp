const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

import { getPokemonList } from "./src/getPokemon";

app.get('/pokemon', async (req:any,res:any)=> {
    console.log(getPokemonList);
   res.json(getPokemonList).status(200);
})

// const PokemonModel = require('./models/PokemonData');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const con = mongoose.connection;
con.once('open', () => {
  console.log('Connected to mongoDb successfully');
});



const PORT = process.env.PORT || 5550;
app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});