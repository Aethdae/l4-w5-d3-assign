import React, { useState } from "react";
import { USERS_URL, getUsers } from "../helpers";
import UserCard from "./UserCard";

export default function AddUser({ users, setUsers }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [error, setError] = useState("");
  const [createdUser, setCreatedUser] = useState({});

  async function onSubmitForm(e) {
    setError("");
    setCreatedUser({});
    e.preventDefault();
    try {
      const userStr = JSON.stringify({
        first_name: first,
        last_name: last,
      });
      const options = {
        headers: { "Content-Type": "application/json" },
        body: userStr,
        method: "POST",
      };
      const res = await fetch(USERS_URL, options);
      const { user } = await res.json();
      if (user) {
        setCreatedUser(user);
        console.log(user);
      } else {
        setError("Failed to create user.");
      }
    } catch (error) {
      console.error(error);
      setError("Failed to create user.");
    } finally {
      getUsers(setUsers);
    }
  }
  return (
    <section className="flex flex-col gap-4">
      <form
        className="text-white flex flex-col gap-2 items-center"
        onSubmit={(e) => onSubmitForm(e)}
      >
        <label className="flex gap-2">
          First name:
          <input
            className="bg-gray-200 rounded-md border-2 border-black text-black"
            type="text"
            name="firstName"
            id="firstName"
            value={first}
            onChange={(e) => {
              setFirst(e.target.value);
            }}
          />
        </label>
        <label className="flex gap-2">
          Last name:
          <input
            className="bg-gray-200 rounded-md border-2 border-black text-black"
            type="text"
            name="lastName"
            id="lastName"
            value={last}
            onChange={(e) => {
              setLast(e.target.value);
            }}
          />
        </label>
        <button className="bg-white text-black border-2 border-black rounded-2xl px-6 py-2">
          Submit
        </button>
      </form>
      {error && (
        <div className="text-red-900 font-bold text-2xl px-8 py-4 mx-auto justify-around flex bg-gray-100 border-4 rounded-md border-black">
          <p>{error}</p>
        </div>
      )}
      {createdUser?.first_name && (
        <div className="flex flex-col items-center bg-black rounded-2xl w-60 mx-auto h-40 justify-around">
          <p className="text-2xl text-green-400 font-bold">Created!</p>
          <UserCard user={createdUser} />
        </div>
      )}
    </section>
  );
}
