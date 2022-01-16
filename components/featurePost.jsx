import Link from "next/link";
import { MdLocalActivity, MdReadMore } from "react-icons/md";
import Image from "next/image";

function FeaturePost() {
  return (
    <div className="featue-post-container">
      <div className="heading-section">
        <MdLocalActivity /> FEATURED POST
      </div>
      <div className="feature-post">
        <div className="image-section">
          <Image
            src="https://source.unsplash.com/1600x900/?nature,water"
            alt="Feature Image"
            layout="fill"
            className="feature-image"
          />
        </div>
        <div className="details-section">
          <div className="title-section">What is Lorem Ipsum?</div>
          <div className="content-section">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. remaining essentially
            unchange...
          </div>
        </div>
      </div>
      <Link href="/">
        <a className="link-btn read-more-btn">
          Read More <MdReadMore />
        </a>
      </Link>
    </div>
  );
}

export default FeaturePost;
