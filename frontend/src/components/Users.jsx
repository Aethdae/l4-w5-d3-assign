import React, { useEffect } from "react";
import UserCard from "./UserCard";
import { getUsers } from "../helpers";

export default function Users({ users, setUsers }) {
  return (
    <section>
      <ul className="grid grid-cols-2 gap-4 max-w-[80%] mx-auto">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </ul>
    </section>
  );
}
