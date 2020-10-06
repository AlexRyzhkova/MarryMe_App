import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      Home (in Arbeit)
      <ul>
        <li>
          <Link to="/todos">ToDo Liste</Link>
        </li>
        <li>
          <Link to="/account">Create Account</Link>
        </li>
      </ul>
    </div>
  );
}
