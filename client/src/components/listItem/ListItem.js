import React from "react";
import deleteIconSrc from "../../assets/delete.svg";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

export default function ListItem({ firstname, lastname }) {
  return (
    <Container>
      <p>
        {firstname} {lastname}
      </p>
      <button>
        <img src={deleteIconSrc} alt="Trash can" />
      </button>
    </Container>
  );
}

//Styling

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7em;
  border-radius: 30px;
  margin: 5px;
  background-color: #ffffff;
  color: #141313;
  box-shadow: 2px 2px 6px 0px lightgrey;
  margin: 1em 1.5em;

  button {
    margin-right: 0.5em;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    color: grey;
    background-color: Transparent;
  }
  p {
    padding-left: 0.7em;
  }
`;

ListItem.propTypes = {
  text: PropTypes.string,
  firstname: PropTypes.string,
  lastname: PropTypes.string,
};
