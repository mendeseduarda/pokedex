"use client"; // Adicione esta linha no topo do arquivo

import { useState, useEffect } from "react";
import Image from "next/image";
import Chip from "../chips/page";
import { getPokemonInfo } from "@/app/api/pokemoninfo";
import { Container, ChipContainer } from "./style";

const Card = ({ name }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getPokemonInfo(name);
      setData(result);
    };

    fetchData();
  }, [name]);

  if (!data) return null;

  return (
    <Container>
      <p>#{data.number}</p>
      <Image src={data.sprite} alt="imagem de um pokemon" width="140" height="140" />
      <ChipContainer>
        {data.types.map((type, index) => (
          <Chip key={index} type={type} />
        ))}
      </ChipContainer>
      <h6>{name}</h6>
      <span />
    </Container>
  );
};

export default Card;
