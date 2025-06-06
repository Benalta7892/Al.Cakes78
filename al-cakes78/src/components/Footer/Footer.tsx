import Image from "next/image";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["social-media-container"]}>
        <Link href="https://www.instagram.com/">
          <Image
            src="./images/insta.svg"
            height={44}
            width={44}
            alt="Logo Instagram"
          />
        </Link>

        <Link href="https://www.tiktok.com/">
          <Image
            src="./images/tiktok.svg"
            height={44}
            width={44}
            alt="Logo Titkok"
          />
        </Link>
      </div>

      <Link href="/" aria-label="Aller à la page d’accueil" aria-current="page">
        <Image
          src="/images/Logo.svg"
          width={264}
          height={237}
          alt="Logo"
          className={styles["logo-footer"]}
        />
      </Link>

      <p className={styles["rights"]}>
        📍Yvelines 78
        <br />© {new Date().getFullYear()} ALL RIGHTS RESERVED •
      </p>
    </footer>
  );
};
export default Footer;
