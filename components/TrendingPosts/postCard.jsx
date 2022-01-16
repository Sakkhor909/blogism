import Link from "next/link";
import { MdReadMore, MdVisibility, MdFavorite } from "react-icons/md";
import Image from "next/image";
import PostDate from "../presentational/postDate";
import AuthorName from "../presentational/authorName";
import Postcategory from "../presentational/postcategory";
function PostCard({ post }) {
  return (
    <div className="post-card-container">
      <div className="image-section">
        <Image
          src={`https://source.unsplash.com/random/300x18${post.id}`}
          alt="Feature Image"
          layout="fill"
          className="trending-post-img"
        />
      </div>
      <div className="post-title">{post.title}</div>
      <div className="post-content">{post.body}...</div>
      <div className="row">
        <div className="view-count">
          <MdVisibility /> 425
        </div>
        <div className="love-count">
          <MdFavorite /> 200
        </div>
        <PostDate />
      </div>
      <div className="row">
        <AuthorName />
        <Postcategory CatNo={post.id} />
      </div>

      <Link href="/">
        <a className="link-btn read-more-btn">
          Read More <MdReadMore />
        </a>
      </Link>
    </div>
  );
}

export default PostCard;
