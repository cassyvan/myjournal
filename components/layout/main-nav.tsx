"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/router";
import { getNavLinks } from "../../utils/navlinks-utils";
import { useAuthContext } from "@/context/AuthContext";

import SignoutButton from "../ui/signout-button";
import RoundedPinkButton from "../ui/rounded-pink-button";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons/faArrowRightFromBracket";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useJournalContext } from "@/context/entryContext";
import MobileNav from "./mobile-nav";

const MainNavigation = () => {
  const context = useAuthContext();
  const navLinks = getNavLinks();
  const pathName = usePathname();
  const router = useRouter();
  const { updateEntry } = useJournalContext();

  if (context.user == null) {
    return;
  }

  const navigate = (link: string) => {
    router.push(link.toLowerCase());
  };

  const showJournalModal = () => {
    updateEntry({
      body: "",
      created: "",
      id: "",
      content: "",
    });
    router.push({ pathname: pathName, query: "modal=true" });
  };

  return (
    <div>
      <div className="fixed inset-y-0 z-10 flex flex-col left-0 h-screen absolute w-64 sm:hidden">
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

          <nav className="text-xl mr-16 text-zinc-400">
            <ul className="flex flex-col gap-y-4">
              {navLinks.map((link) => (
                <li
                  key={link.title.toLowerCase()}
                  className="hover:bg-gray-50 hover:cursor-pointer flex justify-center py-4"
                  onClick={() => navigate(link.title)}
                >
                  <FontAwesomeIcon
                    icon={link.faIcon}
                    className={
                      pathName === `/${link.title.toLowerCase()}`
                        ? "text-pink-300 mt-1 pr-2"
                        : "mt-1 pr-2"
                    }
                  />
                  <div
                    className={
                      pathName === `/${link.title.toLowerCase()}`
                        ? "text-pink-300"
                        : ""
                    }
                  >
                    {link.title}
                  </div>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mr-16 mt-16">
            <RoundedPinkButton
              title={"New Entry"}
              icon={<FontAwesomeIcon icon={faPlus} className="pr-2" />}
              onClick={showJournalModal}
            />
          </div>
          <div className="mr-20 hover:bg-gray-100 mt-52 text-zinc-400 p-4">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <SignoutButton />
          </div>
        </div>
      </div>
      <div className="lg:hidden md:hidden">
        <MobileNav addEntry={showJournalModal} />
      </div>
    </div>
  );
};

export default MainNavigation;
