import React from "react";
import styled from "@emotion/styled";
import logoSrc from "../../assets/logo.svg";
import MenuIconSrc from "../../assets/menu.svg";

const Header = () => {
  return (
    <Container>
      <MenuButton>
        <img src={MenuIconSrc} alt="Menu icon" />
      </MenuButton>
      <Logo src={logoSrc} alt="Marry me logo" />
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
  position: relative;
`;
const MenuButton = styled.button`
  justify-self: flex-start;
  padding: 0px 0px 0px 10px;
  outline: none;
  background-color: #a79292;
  border: none;
  position: absolute;
  left: 2 rem;
`;

const Logo = styled.img`
  margin: auto;
`;
