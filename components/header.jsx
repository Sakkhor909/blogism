import Image from "next/image";
import { MdBrightness4, MdLogin, MdAppRegistration } from "react-icons/md";
import Button from "./button";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
function Header() {
  return (
    <header>
      <div className="first-row">
        <div className="identity-section">
          <Image
            src="/assets/images/logo.png"
            alt="Logo"
            width={70}
            height={70}
            priority
          />
          <h1>Blogism</h1>
        </div>
        <div className="link-section">
          <Button>
            <MdBrightness4 />
          </Button>

          <a className="link-btn ">
            Login <MdLogin />
          </a>
          <a className="link-btn register-btn">
            Register <MdAppRegistration />
          </a>
        </div>
      </div>
      <Navbar />
      <Searchbar />
    </header>
  );
}

export default Header;
