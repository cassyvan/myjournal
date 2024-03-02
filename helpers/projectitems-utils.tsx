const getProjectList = () => {
  let portfolioSpanStyle =
    "block bg-red-300 dark:bg-sky-200 inset-0 skew-y-2 relative inline-block";
  const myPortfolio = {
    projectName: "My Portfolio",
    imageUrl: "/images/portfolio.png",
    projectDesc: [
      <p key={1}>
        A place to feature some projects I have been working on, as well as a
        space to share some of my writing. Built with{" "}
        <span className={portfolioSpanStyle}>Next.js</span> and{" "}
        <span className={portfolioSpanStyle}>Tailwind CSS</span>
        Auto deployments and hosting setup with{" "}
        <span className={portfolioSpanStyle}>Vercel</span>
      </p>,
    ],
    projectDemo: "",
    projectGitHub: "https://github.com/cassyvan/myportfolio",
    key: 1,
  };

  return [myPortfolio];
};

export default getProjectList;
