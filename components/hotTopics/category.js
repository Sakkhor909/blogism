import Image from "next/image";
import Link from "next/link";

function Category({ imageSrc, CatName }) {
  return (
    <Link href="/">
      <a className="category" data-categoryname={CatName}>
        <Image
          src={imageSrc}
          alt="Feature Image"
          layout="fill"
          className="Cat-img"
        />
      </a>
    </Link>
  );
}

export default Category;
