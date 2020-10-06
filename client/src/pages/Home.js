import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      Home (in Arbeit)
      <Link to="/todos">ToDo Liste</Link>
    </div>
  );
}
