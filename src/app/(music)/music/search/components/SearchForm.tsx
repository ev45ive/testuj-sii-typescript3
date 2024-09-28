import { useEffect, useState } from "react";
import { useDebounce } from "./useDebounce";

type Props = {
  search: (q?: string) => void;
  query: string | undefined;
};

const SearchForm = ({ search, query = "" }: Props) => {
  const [draftQuery, setDraftQuery] = useState(query);

  useEffect(() => setDraftQuery(query), [query]);

  // useDebouncedFn(draftQuery, (q) => {
  //   if (q === query) return;
  //   search(q);
  // });

  const debouncedQuery = useDebounce(draftQuery);
  useEffect(() => {
    if (query === draftQuery) return;
    search(debouncedQuery);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedQuery]);

  return (
    <form
      className=" mb-3"
      onSubmit={(e) => {
        e.preventDefault();
        search(draftQuery);
      }}
    >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          value={draftQuery}
          // onKeyUp={e => e.key === 'Enter' && search(draftQuery)}
          onChange={(e) => setDraftQuery(e.currentTarget.value)}
        />

        <button
          className="btn btn-outline-secondary"
          type="submit"
          onClick={() => search(draftQuery)}
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
