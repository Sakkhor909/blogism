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
            src="https://images.unsplash.com/photo-1561478557-9104e8b8cb7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            alt="Feature Image"
            layout="fill"
          />
        </div>
        <div className="details-section">
          <div className="title-section">What is Lorem Ipsum?</div>
          <div className="content-section">
            orem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchange...
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
