import Link from "next/link";
import Image from "next/image";
import PostDate from "../presentational/postDate";
import AuthorName from "../presentational/authorName";
import Postcategory from "../presentational/postcategory";
function PostContainer({ post }) {
  return (
    <div className="post-container">
      <div className="thumbnail-container">
        <div className="image-container">
          <Image
            src={`https://source.unsplash.com/800x40${post.id}/?nature`}
            alt="Feature Image"
            layout="fill"
          />
        </div>
        <div className="right-column">
          <PostDate />
          <AuthorName />
          <Postcategory CatNo={post.id} />
        </div>
      </div>
      <Link href="/">
        <a className="post-title">{post.title}</a>
      </Link>
    </div>
  );
}

export default PostContainer;
