import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Project 1",
    description: "A description of your first project. What it does, the technologies used, and its impact.",
    image: "https://placehold.co/600x400/png",
    githubUrl: "https://github.com/bythebug/project1",
    liveUrl: "https://project1.demo.com",
    tags: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "A description of your second project. Highlight the key features and technical challenges.",
    image: "https://placehold.co/600x400/png",
    githubUrl: "https://github.com/bythebug/project2",
    liveUrl: "https://project2.demo.com",
    tags: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Project 3",
    description: "A description of your third project. Focus on the problem it solves and your role.",
    image: "https://placehold.co/600x400/png",
    githubUrl: "https://github.com/bythebug/project3",
    tags: ["Python", "Django", "PostgreSQL"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32">
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Hey, I&apos;m Suraj Verma 👋
            </h1>
            <h2 className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Software Engineer and Creator passionate about building innovative solutions
              and sharing knowledge through technical content.
            </h2>
            <div className="flex gap-4">
              <Link
                href="https://github.com/bythebug"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://twitter.com/bythebug"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linkedin.com/in/bythebug"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="container py-8 md:py-12 lg:py-24">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Featured Projects
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              Here are some of my recent projects that showcase my skills and interests.
            </p>
          </div>

          <div className="mx-auto mt-8 grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
