import Image from "next/image";
import Button from "../ui/button";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface props {
  imageUrl: string;
  projectName: string;
  projectDesc: string | JSX.Element[];
  projectDemo: string;
  projectGitHub: string;
}

const ProjectsItem = ({
  imageUrl,
  projectName,
  projectDesc,
  projectDemo,
  projectGitHub,
}: props) => {
  return (
    <div className="shadow-md p-4 bg-white dark:bg-stone-800 rounded-lg">
      <div className="relative w-full max-h-80 overflow-hidden outline-dotted outline-1 outline-red-300 dark:outline-sky-200 rounded-lg">
        <Image
          src={imageUrl}
          width={300}
          height={300}
          alt={projectName}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col items-center mt-4">
        <div>
          <h3>{projectName}</h3>
          {projectDesc}
        </div>
        <div className="flex pt-4 gap-2">
          <Button name="Code" icon={faGithub} link={projectGitHub} />
          <Button
            name="Demo"
            title="You're already viewing it!"
            icon={faUpRightFromSquare}
            link={projectDemo}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsItem;
