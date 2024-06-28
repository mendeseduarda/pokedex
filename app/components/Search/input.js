'use client'

import Image from "next/image";
import styled from "styled-components"
import SearchImage from"../../../public/search.svg"


const Container = styled.div`
  position: relative;

  span{
    position: absolute;
    left:5px;
    top:5px;
  }

  input{
    background: white;
    border: 0;
    width: 500px;
    height: 32px;
    display: flex;
    aling-items: center;
    padding: 8px 16px 8px 36px;
    border-radius: 16px;
    font-size:  12px;
    line-height: 16px;
    box-shadow: inset 0px 1px 3px 1px rgba(0,0,0.25);

    &:focus {
        outline: none;
    }

  }
`;
export const Search =() => {
 return(
    <Container>
     <span>
     <Image src={SearchImage} alt ="imagem lupa"/>
     </span>
     <input type="text" placeholder='Digite o numero que quer buscar'/>
    </Container>
 )
}

export default Search;