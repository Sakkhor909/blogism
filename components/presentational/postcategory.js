import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";

function Postcategory({ CatNo }) {
  let CategoryName = "Food";
  if (CatNo == 6 || CatNo == 6) {
    CategoryName = "Business";
  }
  if (CatNo == 7 || CatNo == 7) {
    CategoryName = "Information technology";
  }
  if (CatNo == 8 || CatNo == 8) {
    CategoryName = "Programming language";
  }
  return (
    <Link href="/">
      <a className="post-category">
        <MdRestaurantMenu /> {CategoryName ? CategoryName : "Food"}
      </a>
    </Link>
  );
}

export default Postcategory;
