'use client'
import styled from "styled-components";
import MockImage from "../../../public/pokemon.svg"
import Image from "next/image";
import Chip from "../chips/page";


const Container = styled.div`
  display: flex;
  flex-direction:column;
  padding: 4px 16px 16px 16px;
  box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
  width: 200px;
  height: 300px;
  margin: 5px;
  position: relative;

 span{
    position: absolute;
    background-color: #EFEFEF;
    height: 150px;
    width: 230px;
    bottom: 0px;
    left: 0px;
    border-radius: 8px;
    z-index: -1;
  }

  p{
    aling-self: flex-end;
    font-size: 10px;
  }

  Image{
    aling-self: center;
  }

  h6{
    aling-self:center;
    font-size:25px;
    margin-top: 12px;
  }
`;

const ChipContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
`;

const Card = (name) =>{
    return(
        <Container>
        <p>#06</p>
        <Image src={MockImage} alt= "imagem de um pokemon" width="140" height="140"/>
        <ChipContainer>
            <Chip/>
        </ChipContainer>
        <h6>{name}</h6>
        <span />
       
      </Container>
    )
}


export default Card; 