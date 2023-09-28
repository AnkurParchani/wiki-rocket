import React from "react";

export default function NotFound({ searchTerm }) {
  return (
    <>
      <h1 className="text-gray-700 mt-10 font-semibold text-xl text-center">
        Sorry... We couldn&apos;t find anything for &quot;
        <span className="text-red-500">{searchTerm}</span>&quot;
      </h1>
      <p className="text-black capitalize mt-10 text-center">
        Please search for different thing
      </p>
    </>
  );
}
