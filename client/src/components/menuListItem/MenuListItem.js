import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuListItem = ({ to, text, icon, description }) => {
  return (
    <Container>
      <Link to={to}>
        <img src={icon} alt={description} />
        {text}
      </Link>
    </Container>
  );
};

export default MenuListItem;

//styling
const Container = styled.li`
  margin-top: 2em;
  list-style-type: none;
  a {
    display: flex;
    padding-top: 2rem;
    padding-left: 0.5rem;
    max-width: 90%;
    align-items: center;
    text-decoration: none;
    color: var(--font-color-dark);
    cursor: pointer;
  }

  img {
    padding-right: 0.5em;
  }
`;

MenuListItem.propTypes = {
  to: PropTypes.any,
  text: PropTypes.string,
  icon: PropTypes.any,
  description: PropTypes.string,
};
