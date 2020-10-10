import React, { useState } from "react";
import { getGuests } from "../api/fetchGuests";
import Header from "../components/Header/Header";
import ItemsList from "../components/IitemsList/ItemsList";
import ListItem from "../components/listItem/ListItem";
import useAsync from "../hooks/useAsync";
import styled from "@emotion/styled";
import addNewIconSrc from "../assets/addNew.svg";
import AddListItem from "./AddListItem";
import PropTypes from "prop-types";
import bubbleSrc from "../assets/bubble.svg";
import bubble1Src from "../assets/bubble1.svg";

export default function GuestsPage({ onClick, onRefetch }) {
  const { data: guests, refetch } = useAsync(getGuests);

  const [showModal, setShowModal] = useState(false);
  const [guest, setGuest] = useState(null);

  const handleCloseClick = () => {
    setShowModal(false);
    setGuest(null);
  };

  return (
    <Container>
      <Header />
      {showModal && (
        <AddListItem
          handleCloseClick={handleCloseClick}
          onSetShowModal={setShowModal}
          guest={guest}
          onRefetch={refetch}
        />
      )}
      <h2>Gästeliste</h2>
      <ItemsList onClick={onClick} onRefetch={onRefetch}>
        {guests?.map((guest) => (
          <ListItem
            key={guest.id}
            firstname={guest.firstname}
            lastname={guest.lastname}
            guestId={guest.id}
            onRefetch={refetch}
          />
        ))}
      </ItemsList>
      <OpenButton onClick={() => setShowModal(true)}>
        <img src={addNewIconSrc} alt="Plus button" />
      </OpenButton>
    </Container>
  );
}

//styling
const Container = styled.div`
  background-image: url(${bubbleSrc}), url(${bubble1Src});
  background-repeat: no-repeat, no-repeat;
  background-position: 480% 30%, 100px 500px;
  background-size: auto, auto;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
  position: relative;
  height: 100%;

  div:first-child {
    position: sticky;
    top: 0;
  }
  h2 {
    text-align: center;
    margin-top: 0.5em;
  }
`;

const OpenButton = styled.button`
  align-self: flex-end;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  position: sticky;
  bottom: 0;
  padding: 1em;
`;

GuestsPage.propTypes = {
  onClick: PropTypes.func,
  onRefetch: PropTypes.func,
};
