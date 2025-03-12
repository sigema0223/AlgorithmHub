import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Ensure this code only runs on the server
import { cache } from "react";

export const getProblemBySlug = cache((slug) => {
  const filePath = path.join(process.cwd(), "problems", `${slug}.md`);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content } = matter(fileContents);

  return { frontmatter, content };
});

// Function to get all problems
export const getAllProblems = cache(() => {
  const files = fs.readdirSync(path.join(process.cwd(), "problems"));

  return files.map((filename) => {
    const fileContent = fs.readFileSync(path.join("problems", filename), "utf-8");
    const { data: frontmatter } = matter(fileContent);

    return {
      slug: filename.replace(".md", ""),
      title: frontmatter.title || "Untitled",
      difficulty: frontmatter.difficulty || "Unknown",
    };
  });
});
