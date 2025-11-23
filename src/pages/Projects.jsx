import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ExternalLink, Github } from "lucide-react";

// use relative imports to avoid alias issues in vite
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import { Button } from "../components/ui/button";

/**
 * Redesigned Projects section
 * - Improved header with gradient title
 * - Image overlay, gradient, and title on image
 * - Tag chips, Live / Code buttons with icons
 * - Responsive grid and nicer hover/scale animations
 * - Uses Lottie if provided per project
 *
 * Drop images under /public/projects/ and optional lottie JSONs under /public/animations/
 */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 16 },
  },
};

export default function ProjectsSection({ projects = sampleProjects }) {
  return (
    <section id="projects" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
              Selected Projects
            </h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Handpicked projects demonstrating UI, backend integration, and
              performance — built with modern tools and shipped to production.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="ghost"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore
            </Button>
            <a href="#contact" aria-label="Contact" className="inline-block">
              <Button size="sm">Hire me</Button>
            </a>
          </div>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.id || idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className="overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative h-56 sm:h-48 md:h-56 bg-slate-50 dark:bg-slate-900">
                    {/* image with gentle zoom on hover */}
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground">
                        No image
                      </div>
                    )}

                    {/* dark gradient overlay for text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    <div className="absolute left-4 right-4 bottom-4 flex items-center justify-between">
                      <div className="text-white">
                        <h3 className="text-sm font-semibold drop-shadow-sm">
                          {p.title}
                        </h3>
                        <p className="text-xs opacity-90 line-clamp-2 max-w-xs">
                          {p.short || p.description}
                        </p>
                      </div>

                      {/* optional lottie if provided */}
                      {p.lottie && (
                        <div className="w-12 h-12 rounded-full bg-white/10 p-1 backdrop-blur-sm">
                          <Lottie animationData={p.lottie} loop autoplay />
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground line-clamp-4">
                        {p.description}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {p.tags?.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-1 rounded-full bg-white/10 text-muted-foreground border border-white/6"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block"
                        >
                          <Button
                            size="sm"
                            className="flex items-center gap-2"
                            aria-label={`Open live site for ${p.title}`}
                          >
                            Live <ExternalLink className="w-4 h-4" />
                          </Button>
                        </a>
                      )}

                      {p.repo && (
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-block"
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex items-center gap-2"
                            aria-label={`Open code for ${p.title}`}
                          >
                            <Github className="w-4 h-4" /> Code
                          </Button>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex items-center justify-center">
          <Button
            size="md"
            className="px-8 py-3"
            onClick={() => (window.location.href = "/projects")}
          >
            See all projects
          </Button>
        </div>
      </div>
    </section>
  );
}

// -------------------------
// Sample projects data
// -------------------------

const sampleProjects = [
  {
    id: "p1",
    title: "AI Content Generator",
    description:
      "A lightweight content generator built with Next.js, Tailwind and Clerk. Supports templates, image generation and markdown export.",
    short: "Content generator with templates & image AI",
    image: "/projects/ai-content.png",
    live: "https://my-portfolio-ashy-one-37.vercel.app/",
    repo: "https://github.com/yourname/ai-content-generator",
    tags: ["Next.js", "Tailwind", "Clerk"],
  },
  {
    id: "p2",
    title: "MERN Chat App",
    description:
      "A realtime chat app using MongoDB, Express, React and Node with socket.io and file uploads.",
    short: "Realtime chat with socket.io",
    image: "/projects/mern-chat.png",
    live: "https://example-live-link.com",
    repo: "https://github.com/yourname/mern-chat",
    tags: ["MERN", "Socket.io"],
  },
  {
    id: "p3",
    title: "Energy-Efficient Edge Computing (Paper)",
    description:
      "A review paper site and visualizer for energy-efficient edge computing techniques.",
    short: "Interactive research visualizer",
    image: "/projects/edge-paper.png",
    live: "https://example-live-link.com",
    repo: "https://github.com/yourname/edge-paper",
    tags: ["Research", "Edge", "IoT"],
  },
];
