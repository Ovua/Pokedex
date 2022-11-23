import React, { useState, useRef } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Divider
} from "@mui/material";
import axios from "axios";
import { PokemonResult } from "./PokemonCard";
import PokemonLogo from "../assets/pokelg.gif";
import "./PokemonSearch.css"

export const PokemonSearch: React.FC = () => {
  const pokemonNameEntered = useRef(null);
  const [pokemon, setPokemon] = useState(null);
  const [err, setErr] = useState('');

  const onSearchClick = () => {
    const pokemonSearch = pokemonNameEntered.current.value;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonSearch.toLowerCase()}`)
      .then(res => {
        let newPokemon = {
        name: res.data.name,
        Abilities: res.data.abilities.length,
        Experience: res.data.base_experience,
        image: res.data.sprites.front_default,
        hp: res.data.stats[0].base_stat,
        attack: res.data.stats[1].base_stat,
        defense: res.data.stats[2].base_stat,
        spacialDefense: res.data.stats[4].base_stat,
        speed: res.data.stats[5].base_stat,
        type: res.data.types[0].type.name,
        };
        setPokemon(newPokemon);
      }).catch(function(error) {
          setErr('This Pokémon Does Not Exist')
    })
  };



  const onClearClicked = () => {
    setPokemon(null);
    setErr(null);
    pokemonNameEntered.current.value = "";
  };


  return (
    <Container maxWidth="sm">
      <Paper
        style={{ marginTop: "2rem", padding: "2rem", textAlign: "center" }}
      >
        <img src={PokemonLogo} alt="PokemonLogo" width="250px"></img>
        <h3 className='SearchEngine'>The Pokedex</h3>
        <Divider style={{ margin: "2rem" }}></Divider>

        <TextField inputRef={pokemonNameEntered} placeholder="Bulbasaur" />
        <br />
        <Button 
          color="primary"
          variant="contained"
          style={{ marginTop: "1rem", marginBottom: "1em" }}
          onClick={onSearchClick} 
        >
          Search
        </Button>
        <Button
          color="primary"
          variant="outlined"
          style={{ marginTop: "1.2rem", marginBottom: "1.2rem", marginLeft: "0.2rem" }}
          onClick={onClearClicked}
        >
          Clear
        </Button>
        <Divider style={{ margin: "20px" }}></Divider>
  
        {pokemon ? (
          <PokemonResult
            name={pokemon.name}
            Abilities={pokemon.Abilities}
            Experience={pokemon.Experience}
            image={pokemon.image}
            hp={pokemon.hp}
            attack={pokemon.attack}
            defense={pokemon.defense}
            speed={pokemon.speed}
            type={pokemon.type}
          ></PokemonResult>
        ) : (
          <Typography>{err}</Typography>
        )}
      </Paper>
    </Container>
  );
};
