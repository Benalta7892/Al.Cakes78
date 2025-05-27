"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const linkClass = (href: string) =>
    pathname === href
      ? "text-[#381a0f] underline underline-offset-[25%]"
      : "text-[#9a6f46]";

  return (
    <nav className="w-full bg-[#FFF5E9] px-[244px]">
      <div className="flex items-center justify-center gap-[80px] text-sm font-medium">
        {/* Bloc gauche */}
        <div className="flex gap-[80px]">
          <Link href="/gateaux" className={linkClass("/gateaux")}>
            Nos gâteaux
          </Link>
          <Link href="/services" className={linkClass("/services")}>
            Services
          </Link>
        </div>

        {/* Logo centré */}
        <Link href="/" className="flex flex-col items-center gap-1">
          <Image src="/images/Logo.png" alt="Logo" width={264} height={237} />
        </Link>

        {/* Bloc droit */}
        <div className="flex gap-[80px]">
          <Link href="/a-propos" className={linkClass("/a-propos")}>
            À propos
          </Link>
          <Link href="/contact" className={linkClass("/contact")}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
