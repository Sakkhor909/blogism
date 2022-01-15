import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";

function Postcategory() {
  return (
    <Link href="/">
      <a className="post-category">
        <MdRestaurantMenu /> FOOD
      </a>
    </Link>
  );
}

export default Postcategory;
