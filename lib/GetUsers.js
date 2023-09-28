export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("failed to get users");

  const data = await res.json();
  return data;
};
