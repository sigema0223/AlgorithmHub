import { getProblemBySlug, getAllProblems } from '@/lib/markdown';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github.css';

interface ProblemProps {
  params: { slug: string };
}

export default function ProblemPage({ params }: ProblemProps) {
  // Get problem data based on slug
  const problem = getProblemBySlug(params.slug);

  // If no problem is found, show an error message
  if (!problem) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold">Problem Not Found</h1>
        <p className="text-gray-600">The requested problem does not exist.</p>
      </div>
    );
  }

  const { frontmatter, content } = problem;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      <p className="text-gray-600">Difficulty: {frontmatter.difficulty}</p>
      <p className="text-gray-600">Date: {frontmatter.date}</p>

      <div className="prose mt-6">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

// Generate static params for all problems
export async function generateStaticParams() {
  const problems = getAllProblems();

  return problems.map((problem) => ({
    slug: problem.slug,
  }));
}
