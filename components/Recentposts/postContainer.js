import Link from "next/link";
import Image from "next/image";
import PostDate from "../presentational/postDate";
import AuthorName from "../presentational/authorName";
import Postcategory from "../presentational/postcategory";
function PostContainer() {
  return (
    <div className="post-container">
      <div className="thumbnail-container">
        <div className="image-container">
          <Image
            src="https://source.unsplash.com/random/200x200"
            alt="Feature Image"
            layout="fill"
          />
        </div>
        <div className="right-column">
          <PostDate />
          <AuthorName />
          <Postcategory />
        </div>
      </div>
      <Link href="/">
        <a className="post-title">What is Lorem Ipsum?</a>
      </Link>
    </div>
  );
}

export default PostContainer;
