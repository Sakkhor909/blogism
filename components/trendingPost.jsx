import HeadingContainer from "./presentational/headingContainer";
import { MdTrendingUp } from "react-icons/md";
import PostCard from "./TrendingPosts/postCard";
import Link from "next/link";

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
      <Link href="/">
        <a className="view-all-btn">View All</a>
      </Link>
    </>
  );
}

export default TrendingPost;
