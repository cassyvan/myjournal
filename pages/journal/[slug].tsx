// import { getEntryData, getEntryFiles } from "@/helpers/entries-utils";

// interface props {
//   entry: {
//     content: string;
//     slug: string;
//     date: string;
//     title: string;
//     excerpt: string;
//     image: string;
//   };
// }

// const EntryDetail = ({ entry }: props) => {
//   return (
//     <div className="flex flex-col items-center gap-8 m-8">
//       <h1 className="sm:text-4xl">{entry.title}</h1>
//       <div className="flex flex-col items-center gap-4">
//         <div className="max-w-4xl">{entry.content}</div>
//       </div>
//     </div>
//   );
// };

// export function getStaticProps(context: { params: any }) {
//   const { params } = context;
//   const { slug } = params;

//   const entryData = getEntryData(slug);

//   return {
//     props: {
//       entry: entryData,
//     },
//     revalidate: 600,
//   };
// }

// export function getStaticPaths() {
//   const entryFilenames = getEntryFiles();

//   const slugs = entryFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

//   return {
//     paths: slugs.map((slug) => ({ params: { slug: slug } })),
//     fallback: false,
//   };
// }

// export default EntryDetail;
