export const SERVERURL = "http://127.0.0.1:5000";
export const USERS_URL = SERVERURL + "/api/users";

export async function getUsers(setUsers) {
  try {
    const res = await fetch(USERS_URL);
    const { users } = await res.json();
    console.log(users);
    setUsers(users);
  } catch (error) {
    return Error("Failed to get users.");
  }
}
