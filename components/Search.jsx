"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white w-80 px-2 rounded-md"
        placeholder="Search"
      />

      <button className="text-xl rounded-md p-1 bg-slate-300 ml-2 font-bold">
        🚀
      </button>
    </form>
  );
}
