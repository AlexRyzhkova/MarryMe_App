import React from "react";
import styled from "@emotion/styled";
import logoSrc from "./logo.svg";
import menuSrc from "./menu.svg";

const Header = () => {
  return (
    <Container>
      <MenuButton>
        <img src={menuSrc} alt="Menu icon" />
      </MenuButton>
      <Logo src={logoSrc} alt="MarryMe logo" />
    </Container>
  );
};

export default Header;

//Styling
const Container = styled.div`
  background-color: #a79292;
  display: flex;
  padding: 5px;
  align-items: center;
`;
const MenuButton = styled.button`
  justify-self: flex-start;
  padding: 0px 0px 0px 10px;
  outline: none;
  background-color: #a79292;
  border: none;
`;

const Logo = styled.img`
  margin: auto;
`;
