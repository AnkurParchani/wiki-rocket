import { getWikiResults } from "@/lib/getWikiResults";
import ResultItem from "@/components/ResultItem";
import NotFound from "@/components/NotFound";

export default async function SearchResults({ params: { searchTerm } }) {
  const data = await getWikiResults(searchTerm);
  const results = data?.organic_results;

  return (
    <main className="mt-3 px-4 max-w-2xl mx-auto">
      {!results ? (
        <NotFound searchTerm={searchTerm} />
      ) : (
        <div className="flex flex-col gap-3">
          <h1 className="text-center font-bold text-gray-700 text-xl mb-2">
            Found Results:-
          </h1>
          {results.map((result) => (
            <ResultItem resultItem={result} key={result.position} />
          ))}
        </div>
      )}
    </main>
  );
}
