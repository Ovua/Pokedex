import React from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { Pokemon } from "../types/types";
import "./PokemonCard.css";

export const PokemonResult = ({
  name,
  Abilities,
  Experience,
  image,
  hp,
  attack,
  defense,
  speed,
}: Pokemon) => {
  return (
    <Card className="card">
      <CardContent className='CardContent'>
        <img src={image} alt="PokemonSprite" width="200px"></img>
        <Typography className="name" variant="h4">{name}</Typography>
        <Typography>Abilities: {Abilities}</Typography>
        <Typography>Experience: {Experience}</Typography>
      <div className="abilitiesCont">
        <Typography>hp: {hp}</Typography>
        <Typography>attack: {attack}</Typography>
        <Typography>defense: {defense}</Typography>
        <Typography>speed: {speed}</Typography>
      </div>
      </CardContent>
    </Card>
  );
};
