import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
import { getUsers } from "./helpers";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers(setUsers);
    if (typeof users === Error) console.error(users);
  }, []);

  return (
    <main className="bg-gray-800 h-screen">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<HomePage setUsers={setUsers} users={users} />}
        />
        <Route
          path="/users"
          element={<Users setUsers={setUsers} users={users} />}
        />
        <Route
          path="/add-user"
          element={<AddUser setUsers={setUsers} users={users} />}
        />
      </Routes>
    </main>
  );
}
