import Link from "next/link";
import Image from "next/image";
import { MdEvent, MdAssignmentInd, MdRestaurantMenu } from "react-icons/md";

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
          <div className="post-date">
            <MdEvent /> 29/03/2021
          </div>
          <div className="post-author">
            <MdAssignmentInd /> Minhajur rahman
          </div>
          <Link href="/">
            <a className="post-category">
              <MdRestaurantMenu /> FOOD
            </a>
          </Link>
        </div>
      </div>
      <Link href="/">
        <a className="post-title">What is Lorem Ipsum?</a>
      </Link>
    </div>
  );
}

export default PostContainer;
