import {
  faLightbulb,
  faPaw,
  faPuzzlePiece,
  faStethoscope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const getAboutIntro = () => {
  return (
    <>
      <p>
        Hi! I&apos;m Cassy, a passionate and dedicated software developer with a
        keen focus on
        <span className="block bg-red-300 dark:bg-sky-200 inset-0 skew-y-2 relative inline-block">
          web development
        </span>
        .
      </p>
      <br></br>
      <p>
        In a former life, I donned the scrubs as a Registered Nurse
        <FontAwesomeIcon icon={faStethoscope} /> &nbsp; before making the
        exciting leap into the world of technology.
      </p>
    </>
  );
};

export const getAboutDetails = () => {
  return (
    <>
      <p>
        My journey has led me to work alongside a diverse array of individuals,
        and my journey in development has spanned from startups to mid-size
        companies.
      </p>
      <p>
        Always hungry for knowledge, I embrace every opportunity to learn and
        grow. <FontAwesomeIcon icon={faLightbulb} />
      </p>
      <br></br>
      <p>
        Beyond coding and debugging, you&apos;ll find me engrossed in solving
        puzzles &nbsp;
        <FontAwesomeIcon icon={faPuzzlePiece} />
        &nbsp; —murder mysteries happen to be my absolute favorite.
      </p>
    </>
  );
};

export const getAboutOutro = () => {
  return (
    <>
      <p>
        When I&apos;m not in front of a screen, I love spending quality time
        with my four-legged companion, indulging in long walks and playful
        moments. <FontAwesomeIcon icon={faPaw} />
      </p>
      <br></br>
      <p>
        I highly enjoy interacting with others, and listening to new ideas! I am
        always open to connecting, so please feel free to contact me!
      </p>
    </>
  );
};
