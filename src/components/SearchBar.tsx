import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-around m-2 p-1">
      <form
        action="#"
        method="get"
        className=" border-2 border-gray-300 flex items-center justify-between gap-2 p-[2px] rounded-xl"
      >
        <button type="button" disabled>
          <FaSearch className=" fill-red-600 text-2xl p-1" />
        </button>
        <input
          type="text"
          name="search"
          placeholder="Search Products..."
          className="p-1 border border-gray-300 rounded-lg"
        />
      </form>
    </div>
  );
};
export default SearchBar;
