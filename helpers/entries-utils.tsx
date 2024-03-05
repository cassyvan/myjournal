// import fs from "fs";
// import path from "path";

// import matter from "gray-matter";

// const postsDirectory = path.join(process.cwd(), "posts");

// export function getEntryFiles() {
//   return fs.readdirSync(postsDirectory);
// }

// export function getEntryData(postIdentifier: string) {
//   const postSlug = postIdentifier.replace(/\.md$/, "");
//   const filePath = path.join(postsDirectory, `${postSlug}.md`);
//   const fileContent = fs.readFileSync(filePath, "utf-8");
//   const { data, content } = matter(fileContent);

//   const postData = {
//     slug: postSlug,
//     date: "string",
//     ...data,
//     content,
//   };

//   return postData;
// }

// export function getAllEntries() {
//   const postFiles = getEntryFiles();

//   const allPosts = postFiles.map((postFile) => {
//     return getEntryData(postFile);
//   });

//   const sortedPosts = allPosts.sort((postA, postB) =>
//     postA.date > postB.date ? -1 : 1
//   );

//   return sortedPosts;
// }

// export function getFeaturedPosts() {
//   const allPosts = getAllPosts();

//   const featuredPosts = allPosts.filter((post) => post.isFeatured);

//   return featuredPosts;
// }
