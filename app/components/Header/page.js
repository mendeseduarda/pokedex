'use client';
import styled from "styled-components";
import Image from "next/image";
import Logo from "../../../public/pokemon-logo-8.png"
import Search from "../Search/input";

const Container = styled.div`
  display: flex;
  background-color: #DC0A2D;
  height: 150px;
  width: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
 
`;

export const Header = () => {
  return (
    <Container>
      <InnerContainer>
        <Image src={Logo} width={200} height={150} alt="logo do site" />
        <Search />
      </InnerContainer>
    </Container>
  );
};

export default Header;
