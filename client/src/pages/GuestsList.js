import React from "react";
import { getGuests } from "../api/fetchGuests";
import Header from "../components/Header/Header";
import ItemsList from "../components/IitemsList/ItemsList";
import ListItem from "../components/listItem/ListItem";
import useAsync from "../hooks/useAsync";
import styled from "@emotion/styled";
import addNewIconSrc from "../assets/addNew.svg";

export default function GuestsList() {
  const { data: guests } = useAsync(getGuests);

  return (
    <Container>
      <Header />
      <h2>Gästeliste</h2>
      <ItemsList>
        {guests?.map((guest) => (
          <ListItem
            key={guest.id}
            firstname={guest.firstname}
            lastname={guest.lastname}
          />
        ))}
      </ItemsList>
      <OpenButton>
        <img src={addNewIconSrc} alt="Plus button" />
      </OpenButton>
    </Container>
  );
}

//styling
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow: auto;
  position: relative;

  section {
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
