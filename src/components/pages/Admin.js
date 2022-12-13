import React from "react";
import Heading from "../layout/Heading";
import AuthContext from "../../context/AuthContext";
import Login from "./Login";
import { useContext } from "react";

export default function Admin() {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <Login />;
  } else {
    return (
      <div>
        <Heading title='Admin' />
      </div>
    );
  }
}
