import React from "react";
import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/add-user"}>Add User</Link>
      </div>
    </nav>
  );
}
