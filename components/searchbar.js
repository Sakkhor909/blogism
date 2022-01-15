import { MdSearch } from "react-icons/md";

function Searchbar() {
  return (
    <form>
      <input type="search" />
      <button>
        <MdSearch />
      </button>
    </form>
  );
}

export default Searchbar;
