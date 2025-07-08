"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 690) {
        navLinksRef.current!.style.transition = "transform 0.3s ease-out";
      } else {
        navLinksRef.current!.style.transition = "none";
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={styles["navbar"]}>
      {/* Logo for mobile view */}
      <Link
        href="/"
        className={`${styles["nav-icon"]} ${styles["logo-mobile"]}`}
        aria-label="Aller à la page d’accueil"
        aria-current="page"
        onClick={handleLinkClick}>
        <Image
          src="/images/Logo.svg"
          width={264}
          height={237}
          alt="Logo"
          className={styles["img"]}
        />
      </Link>

      <div className="main-navlinks">
        <button
          className={`${styles["hamburger"]} ${isOpen ? styles["open"] : ""}`}
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          ref={navLinksRef}
          className={`${styles["navlinks-container"]} ${
            isOpen ? styles["open"] : ""
          }`}>
          <Link
            href="/"
            className={`${pathname === "/" ? styles["active"] : ""}`}
            onClick={handleLinkClick}>
            Accueil
          </Link>
          <Link
            href="/gateaux"
            className={`${pathname === "/gateaux" ? styles["active"] : ""}`}
            onClick={handleLinkClick}>
            Mes Entremets
          </Link>

          {/* Logo for desktop view */}
          <Link
            href="/"
            className={`${styles["nav-icon"]} ${styles["logo-desktop"]}`}
            aria-label="Aller à la page d’accueil"
            aria-current="page">
            <Image
              src="/images/Logo.svg"
              width={264}
              height={237}
              alt="Logo"
              className={styles["img"]}
            />
          </Link>

          <Link
            href="/services"
            className={`${pathname === "/services" ? styles["active"] : ""}`}
            onClick={handleLinkClick}>
            Services
          </Link>

          <Link
            href="/contact"
            className={`${pathname === "/contact" ? styles["active"] : ""}`}
            onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
