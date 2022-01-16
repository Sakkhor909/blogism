import { MdDynamicFeed } from "react-icons/md";
import PostContainer from "./Recentposts/postContainer";
import HeadingContainer from "./presentational/headingContainer";

function RecentPost({ RecentPosts }) {
  return (
    <div className="recen-post-section">
      <HeadingContainer right="125px">
        <MdDynamicFeed /> RECENT ARTICLES
      </HeadingContainer>
      {RecentPosts.map((post) => {
        return <PostContainer key={post.id} post={post} />;
      })}
    </div>
  );
}

export default RecentPost;
