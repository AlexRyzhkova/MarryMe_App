import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const MenuList = ({ open, children }) => {
  return <Menu open={open}>{children}</Menu>;
};

export default MenuList;

//Styling
const Menu = styled.ul`
  margin-top: 0;
  list-style: none;
  display: flex;
  border-right: 1.5px solid black;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(-27%)" : "translateX(-130%)")};
  position: fixed;
  flex-flow: column nowrap;
  background-color: var(--menu-bg-color);
  top: 0;
  right: 0;
  height: 100%;
  width: 85%;
  z-index: 20;
`;

MenuList.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
};
