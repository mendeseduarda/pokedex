"use client";

import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Image from "next/image";
import Chip from "../chips/page";
import {getPokemonInfo} from "@/app/api/pokemoninfo";
import {ChipContainer, Container} from "./style";

const Card = ({name}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getPokemonInfo(name);
                setData(result[0]);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [name]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!data) return null;

    return (
        <Container>
            <p>#{data.number}</p>
            <Image src={data.sprite} alt={`imagem de ${name}`} width="140" height="140"/>
            <ChipContainer>
                {data.types.map((type) => (
                    <Chip key={type} type={type}/>
                ))}
            </ChipContainer>
            <h6>{name}</h6>
            <span/>
        </Container>
    );
};

Card.propTypes = {
    name: PropTypes.string.isRequired,
};

export default Card;