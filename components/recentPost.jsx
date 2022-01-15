import { MdDynamicFeed } from "react-icons/md";
import PostContainer from "./Recentposts/postContainer";
import HeadingContainer from "./presentational/headingContainer";

function RecentPost() {
  return (
    <div className="recen-post-section">
      <HeadingContainer right="125px">
        <MdDynamicFeed /> RECENT ARTICLES
      </HeadingContainer>
      <PostContainer />
      <PostContainer />
      <PostContainer />
      <PostContainer />
    </div>
  );
}

export default RecentPost;
