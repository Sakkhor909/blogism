import HeadingContainer from "./presentational/headingContainer";
import { MdTrendingUp } from "react-icons/md";
import PostCard from "./TrendingPosts/postCard";

function TrendingPost() {
  return (
    <>
      <HeadingContainer right="400px" marginTop="20px">
        <MdTrendingUp /> TRENDING POSTS
      </HeadingContainer>
      <div className="posts-grid">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
    </>
  );
}

export default TrendingPost;
