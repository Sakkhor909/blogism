import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { MdAppRegistration } from "react-icons/md";
function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="sign-up-section">
          <div className="sign-up-text">Sign up for get notified !</div>
          <form className="sign-up-form">
            <input type="email" name="user_email" />
            <button type="submit">
              Sign up <MdAppRegistration />
            </button>
          </form>
        </div>
        <div className="footer-links">
          <Link href="/">
            <a>Report issue</a>
          </Link>
          <Link href="/">
            <a>Become a author</a>
          </Link>
          <div className="identity-section">
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={70}
              height={70}
              priority
            />
            <h4>Blogism</h4>
          </div>
          <Link href="/">
            <a>Privacy policy</a>
          </Link>
          <Link href="/">
            <a>Terms & Conditions</a>
          </Link>
        </div>
        <div className="social-section">
          <div className="link-section">
            <a href="#">
              <FaFacebook />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaPinterest />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
          <div className="copy-right-attr">
            © Brand, Inc. 2021. We love our users!
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
