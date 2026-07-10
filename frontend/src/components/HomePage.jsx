import React from "react";

export default function HomePage({ users, setUsers }) {
  return (
    <main>
      <section className="flex flex-col items-center text-white text-xl bg-gray-900 w-[60%] mx-auto py-4 rounded-xl outline-white outline">
        <h2 className="text-2xl font-bold">A small app to manage users.</h2>
        <h3>Head to add user to create, or users to browse.</h3>
      </section>
    </main>
  );
}
