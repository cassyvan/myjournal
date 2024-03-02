import { getNavLinks } from "@/helpers/navlinks-utils";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface props {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileNav = ({ isOpen, toggleMenu }: props) => {
  const navLinks = getNavLinks();
  const pathName = usePathname();

  return (
    <div
      id="x-button"
      className={`fixed top-0 left-0 h-full w-full bg-stone-50 dark:bg-stone-900 transition-transform transform z-10 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } flex items-center justify-center`}
    >
      <span>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={toggleMenu}
          className="absolute top-0 right-0 fa-3x my-4 mx-10 cursor-pointer hover:text-red-300 dark:hover:text-sky-200"
        />
      </span>
      <ul className="text-3xl font-semibold flex flex-col gap-14">
        {navLinks.map((link) => (
          <li key={link} className="hover:text-red-300 dark:hover:text-sky-200">
            <Link
              href={`/${link.toLowerCase()}`}
              className={
                pathName === `/${link.toLowerCase()}`
                  ? "text-red-400 dark:text-sky-300"
                  : ""
              }
              onClick={toggleMenu}
            >
              {" "}
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileNav;
