import React, { useState } from "react";
import styled from "@emotion/styled";
import logoSrc from "../../assets/logo.svg";
import MenuIconSrc from "../../assets/menu.svg";
import Menu from "../menu/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <MenuButton>
        <img
          open={open}
          onClick={() => setOpen(!open)}
          src={MenuIconSrc}
          alt="Menu icon"
        />
      </MenuButton>
      <Menu open={open} />
      <Logo src={logoSrc} alt="Marry me logo" />
    </Container>
  );
};

export default Header;

//Styling
const Container = styled.section`
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

  img {
    position: ${({ open }) => (open ? "fixed" : "relative")};
    fill: ${({ open }) => (open ? "#383636" : "#fff")};
    z-index: 50;
  }
`;

const Logo = styled.img`
  margin: auto;
`;
