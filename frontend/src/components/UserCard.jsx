import React from "react";

export default function UserCard({ user }) {
  return (
    <article className="flex flex-col items-center gap-2 px-4 bg-amber-800 text-white border-2 border-amber-950 shadow-md/40 shadow-black transition-all duration-100 hover:bg-amber-600 hover:border-amber-700 hover:shadow-white">
      <p>
        <span className="text-xl font-bold">Name</span>: {user["first_name"]}{" "}
        {user["last_name"]}
      </p>
      <p>
        <span className="text-xl font-bold">ID</span>: {user.id}
      </p>
    </article>
  );
}
