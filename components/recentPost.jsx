import { MdDynamicFeed, MdArrowDropDown } from "react-icons/md";
import PostContainer from "./Recentposts/postContainer";

function RecentPost() {
  return (
    <div className="recen-post-section">
      <div className="heading-container">
        <MdDynamicFeed /> RECENT ARTICLES
        <MdArrowDropDown className="dropdownicon" />
      </div>
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
    </div>
  );
}

export default RecentPost;
