"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const navLinksContainer = navLinksRef.current;
    if (!navLinksContainer) return;

    const observer = new ResizeObserver((entries) => {
      if (entries[0].contentRect.width <= 690) {
        navLinksContainer.style.transition = "transform 0.3s ease-out";
      } else {
        navLinksContainer.style.transition = "none";
      }
    });

    observer.observe(document.body);

    return () => observer.disconnect();
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
            href="/gateaux"
            className={`${pathname === "/gateaux" ? styles["active"] : ""}`}
            onClick={handleLinkClick}>
            Nos gateaux
          </Link>
          <Link
            href="/services"
            className={`${pathname === "/services" ? styles["active"] : ""}`}
            onClick={handleLinkClick}>
            Services
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
            href="/a-propos"
            className={`${pathname === "/a-propos" ? styles["active"] : ""}`}
            onClick={handleLinkClick}>
            À propos
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
