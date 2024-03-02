export const getTechLogos = (theme: string | undefined) => {
  const react = { imagesrc: "/images/techicons/react.svg", name: "React" };

  const javascript = {
    imagesrc: "/images/techicons/javascript.svg",
    name: "JavaScript",
  };

  const java = { imagesrc: "/images/techicons/java.svg", name: "Java" };

  const npm = { imagesrc: "/images/techicons/npm.svg", name: "NPM" };

  const tailwindCSS = {
    imagesrc: "/images/techicons/tailwind-css.svg",
    name: "Tailwind CSS",
  };

  const mongoDB = {
    imagesrc: "/images/techicons/mongodb.svg",
    name: "MongoDB",
  };

  const nextJS = {
    imagesrc:
      theme === "dark"
        ? "/images/techicons/nextjs-dark.svg"
        : "/images/techicons/nextjs.svg",
    name: "NextJS",
  };

  const typeScript = {
    imagesrc:
      theme === "dark"
        ? "/images/techicons/typescript-dark.svg"
        : "/images/techicons/type-script.svg",
    name: "TypeScript",
  };

  const aws = {
    imagesrc:
      theme === "dark"
        ? "/images/techicons/aws-dark.svg"
        : "/images/techicons/aws.svg",
    name: "AWS",
  };

  return [
    react,
    nextJS,
    typeScript,
    javascript,
    tailwindCSS,
    java,
    aws,
    mongoDB,
    npm,
  ];
};
