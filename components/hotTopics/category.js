import Image from "next/image";
import Link from "next/link";

function Category() {
  return (
    <Link href="/">
      <a className="category" data-categoryName="Category Name">
        <Image
          src="https://source.unsplash.com/random"
          alt="Feature Image"
          layout="fill"
        />
      </a>
    </Link>
  );
}

export default Category;
