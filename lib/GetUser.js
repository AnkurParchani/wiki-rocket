export const getUser = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res.ok) throw new Error("failed to get seperate user");

  const data = await res.json();
  return data;
};
