import Link from "next/link";

function Navbar() {
  return (
    <aside>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/categories">
        <a>Categories</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>

      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </aside>
  );
}

export default Navbar;
