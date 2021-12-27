import Links from "./Links";
import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import { useResultsContext } from "../contexts/ResultsContextProvider";

const Search = () => {
    const [text, setText] = useState("Elon Mask")
    const { setSearchTerm } = useResultsContext()
    const [debounceValue] = useDebounce(text, 500)

    useEffect(() => {
      if(debounceValue) setSearchTerm(debounceValue)
    }, [debounceValue])

  return (
    <div className="relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      {/* <p>Search</p> */}
      <form class="group relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          class="focus:ring-2 focus:ring-blue-500 focus:outline-none w-80 text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm hover:shadow-lg"
          type="search"
          value={text}
          aria-label="Filter projects"
          placeholder="Search anything..."
          onChange={(e) => setText(e.target.value)}
        />
       
      </form>
      <Links />
    </div>
  );
};

export default Search;
