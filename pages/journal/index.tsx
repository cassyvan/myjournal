import { getAllEntries } from "@/helpers/entries-utils";

interface props {
  posts: {
    content: string;
    slug: string;
    date: string;
    title: string;
    excerpt: string;
    image: string;
  }[];
}

const JournalHomePage = ({ posts }: props) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2>Journal</h2>
      <div className="grid grid-cols-2  max-w-6xl h-[10rem] sm:flex sm:flex-col sm:mx-6"></div>
    </div>
  );
};

// export const getStaticProps = () => {
//   const allPosts = getAllEntries();

//   return {
//     props: {
//       posts: allPosts,
//     },
//   };
// };

export default JournalHomePage;
