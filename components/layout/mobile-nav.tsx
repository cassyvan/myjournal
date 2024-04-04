import { getNavLinks } from "@/utils/navlinks-utils";
import { faXmark, faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import RoundedPinkButton from "../ui/rounded-pink-button";

interface props {
  isOpen: boolean;
  // toggleMenu: () => void;
}

const MobileNav = () => {
  const navLinks = getNavLinks();
  const pathName = usePathname();

  return (
    <div>
      <div
        className={`fixed bottom-3 right-5 z-10 flex bg-white rounded-full px-10 py-2 border border-pink-200 shadow-sm`}
      >
        <ul className="text-3xl font-semibold flex gap-4">
          {navLinks.map((link) => (
            <li
              key={link.title}
              className="hover:text-red-300 dark:hover:text-sky-200"
            >
              <Link
                href={`/${link.title.toLowerCase()}`}
                className={
                  pathName === `/${link.title.toLowerCase()}`
                    ? "text-red-400 dark:text-sky-300"
                    : ""
                }
              >
                {" "}
                <FontAwesomeIcon icon={link.faIcon} className="p-2" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="fixed bottom-20 right-8 z-10 ">
        <RoundedPinkButton icon={<FontAwesomeIcon icon={faPlus} />} />
      </div>
    </div>
  );
};

export default MobileNav;
