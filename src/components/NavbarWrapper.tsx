"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  const hideNavbar =
    pathname?.startsWith("/demo/") ||
    pathname?.startsWith("/template/") ||
    pathname?.startsWith("/undangan/") ||
    pathname?.startsWith("/cover/"); // Tambahkan ini

  if (hideNavbar) return null;

  return <Navbar />;
}
