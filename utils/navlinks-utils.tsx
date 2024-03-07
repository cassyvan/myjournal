import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile, faCompass } from "@fortawesome/free-regular-svg-icons";

export const getNavLinks = () => {
  return [
    { title: "Hello", faIcon: faFaceSmile },
    {
      title: "Journal",
      faIcon: faBook,
    },
    // { title: "Guides", faIcon: faCompass },
  ];
};
