import styled from "@emotion/styled";
import React from "react";
import PropTypes from "prop-types";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.5;
`;

const Container = styled.div`
  padding: 10px;
  position: fixed;
  top: 15%;
  bottom: 5%;
  left: 5%;
  right: 5%;
  background-color: #cebebe;
  z-index: 2;
  border-radius: 15px;
`;

function Modal({ children }) {
  return (
    <>
      <Backdrop />
      <Container>{children}</Container>
    </>
  );
}

export default Modal;

Modal.propTypes = { children: PropTypes.node };
