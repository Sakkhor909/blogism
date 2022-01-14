import Button from "./button";
import { MdSearch } from "react-icons/md";

function Searchbar() {
  return (
    <form>
      <input type="search" />
      <Button>
        <MdSearch />
      </Button>
    </form>
  );
}

export default Searchbar;
