import React from "react";
import { Link } from "react-router";

const linkClasses = [
  "border-2",
  "border-white",
  "rounded-2xl",
  "p-2",
  "cursor-hover",
  "hover:bg-gray-800",
  "transition-all",
  "duration-100",
  "shadow-white",
  "shadow-md/30",
  "hover:shadow-gray-300",
];
export default function NavBar() {
  return (
    <nav className="bg-black py-4 mb-4 flex justify-between items-center">
      <h1 className="font-bold text-3xl ml-2 text-white">User Management</h1>
      <div className="flex justify-end gap-4 text-white mr-2">
        <Link className={linkClasses.join(" ")} to={"/"}>
          Home
        </Link>
        <Link className={linkClasses.join(" ")} to={"/users"}>
          Users
        </Link>
        <Link className={linkClasses.join(" ")} to={"/add-user"}>
          Add User
        </Link>
      </div>
    </nav>
  );
}
