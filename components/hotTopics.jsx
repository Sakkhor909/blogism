import HeadingContainer from "./presentational/headingContainer";
import { MdWhatshot } from "react-icons/md";
import Category from "./hotTopics/category";
import Link from "next/link";

function HotTopics() {
  return (
    <>
      <HeadingContainer marginTop="20px">
        <MdWhatshot /> Hot Topics
      </HeadingContainer>
      <div className="category-grid">
        <Category imageSrc={`/assets/images/food.jpg`} CatName={`Food`} />
        <Category
          imageSrc={`/assets/images/business.jpg`}
          CatName={`Business`}
        />
        <Category
          imageSrc={`/assets/images/Information_technology.jpg`}
          CatName={`Information Technology`}
        />
        <Category imageSrc={`/assets/images/Sports.jpg`} CatName={`Sports`} />
      </div>
      <Link href="/">
        <a className="view-all-btn hot-topics-view-btn">View All</a>
      </Link>
    </>
  );
}

export default HotTopics;
