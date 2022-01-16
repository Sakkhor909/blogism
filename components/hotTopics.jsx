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
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
      <Link href="/">
        <a className="view-all-btn hot-topics-view-btn">View All</a>
      </Link>
    </>
  );
}

export default HotTopics;
