"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/router";
import { getNavLinks } from "../../helpers/navlinks-utils";
import { useAuthContext } from "@/context/AuthContext";

import SignoutButton from "../ui/signout-button";
import RoundedPinkButton from "../ui/rounded-pink-button";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MainNavigation = () => {
  const [mounted, setMounted] = useState(false);
  const context = useAuthContext();
  const navLinks = getNavLinks();
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  if (context.user == null) {
    return;
  }

  const showJournalModal = () => {
    router.push({ pathname: pathName, query: "modal=true" });
  };

  return (
    <div className="fixed inset-y-0 z-10 flex flex-col left-0 h-screen absolute w-64">
      <svg
        className="absolute inset-0 w-full h-full text-white filter drop-shadow-lg"
        preserveAspectRatio="none"
        viewBox="0 0 309 800"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
      </svg>
      <div className="z-10 flex flex-col flex-1 text-center">
        <Image
          alt="logo"
          width={150}
          height={150}
          src="/images/pisces.png"
          className="self-center py-24 text-pink-300"
        />

        <nav className="text-xl mb-16 mr-16 text-zinc-400">
          <ul className="flex flex-col justify-center">
            {navLinks.map((link) => (
              <li
                key={link.title.toLowerCase()}
                className="py-6 hover:bg-gray-50"
              >
                <FontAwesomeIcon
                  icon={link.faIcon}
                  className={
                    pathName === `/${link.title.toLowerCase()}`
                      ? "text-pink-300"
                      : ""
                  }
                />
                <Link
                  href={`/${link.title.toLowerCase()}`}
                  className={
                    pathName === `/${link.title.toLowerCase()}`
                      ? "text-pink-300 pl-2"
                      : "pl-2"
                  }
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mr-16">
          <RoundedPinkButton
            title={"New Entry"}
            icon={<FontAwesomeIcon icon={faPlus} className="pr-2" />}
            onClick={showJournalModal}
          />
        </div>
        <div className="mr-20 hover:bg-gray-100 mt-28 text-zinc-400 p-4">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <SignoutButton />
        </div>
      </div>
    </div>
  );
};

export default MainNavigation;
