import Image from "next/image";
import { useTheme } from "next-themes";
import {
  MdBrightness4,
  MdLogin,
  MdAppRegistration,
  MdLightMode
} from "react-icons/md";
import Navbar from "./navbar";
import Searchbar from "./searchbar";

const ChangeTheme = (setTheme) => {
  if (localStorage.theme == "light") {
    if (typeof Storage !== "undefined") {
      localStorage.theme = "dark";
      setTheme("dark");
    }
  } else {
    if (typeof Storage !== "undefined") {
      localStorage.theme = "light";
      setTheme("light");
    }
  }
};

function Header() {
  const { theme, setTheme } = useTheme();
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
          <button onClick={() => ChangeTheme(setTheme)} title="Change Theme">
            {theme == "light" ? <MdBrightness4 /> : <MdLightMode />}
          </button>
          <a className="link-btn ">
            <span className="head-link-text">Login</span> <MdLogin />
          </a>
          <a className="link-btn register-btn">
            <span className="head-link-text">Register</span>{" "}
            <MdAppRegistration />
          </a>
        </div>
      </div>
      <Navbar />
      <Searchbar />
    </header>
  );
}

export default Header;
