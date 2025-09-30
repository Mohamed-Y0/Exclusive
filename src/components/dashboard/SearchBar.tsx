function SearchBar() {
  return (
    <div className="pt-10">
      <input
        type="search"
        name="search"
        id="search"
        className="w-full rounded-lg border border-neutral-200 px-2 py-2.5 focus:outline-neutral-300"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
