import { useEffect, useState } from "react";

import LogoPriet from "./LogoPriet.jsx";
import SearchNav from "./SearchNav.jsx";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 150);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`shadow-lg fixed z-50 top-0 flex justify-between w-full mx-auto items-center px-16 py-4 transition-colors duration-300 ${
        scrolled
          ? "bg-[#e8f4f8]/90 backdrop-blur-md"
          : "bg-[#e8f4f8]/10"
      }`}
    >
      <div className="scale-125 text-3xl transition-transform duration-200 hover:scale-150">
        <a href="/">
          <LogoPriet />
        </a>
      </div>
      <div>
        <SearchNav />
      </div>
      <div>red social</div>
    </header>
  );
}
