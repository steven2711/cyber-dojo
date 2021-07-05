import Link from "next/link";
import styles from "../styles/Header.module.css";
import Hamburger from "./Hamburger";
import NavbarLinks from "./NavbarLinks";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.logo}>
          <Link href="/">
            <a>Cyber Dojo</a>
          </Link>
        </div>

        <NavbarLinks open={open} setOpen={setOpen} />
        <Hamburger open={open} setOpen={setOpen} />
      </nav>
    </header>
  );
}
