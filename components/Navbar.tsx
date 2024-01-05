"use client"
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/contants";
import Buttons from "./Buttons";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href={"/"} onClick={toggleTheme}>
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>
      
      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 dark:text-white flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}

        {/*Parenthesis means return immediaely*/}
      </ul>

      <div className="hidden lg:flexCenter">
         <Buttons
         
         type="button"
         title="Login"
         icon="/user.svg"
         variant="btn_dark_green"
         />
      </div>
      <Image
        src="/menu.svg"
        alt="Menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
