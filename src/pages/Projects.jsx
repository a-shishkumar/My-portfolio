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
import { BorderBeam } from "../components/ui/border-beam";

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

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut", delay },
  },
});

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
    <section
      id="projects"
      className="h-full flex flex-col justify-center items-center px-6 sm:px-10 lg:px-[9vw] py-3"
    >
      <div className="w-full max-w-5xl">
        <motion.header variants={fadeUp(0)} className="mb-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f95e0] via-sky-400 to-blue-600">
            Selected Projects
          </h2>
          <p className="mt-2 text-sm text-gray-300/90 max-w-xl mx-auto">
            Handpicked projects demonstrating UI, backend integration, and
            performance — built with modern tools and shipped to production.
          </p>
        </motion.header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {projects.map((p, idx) => (
            <motion.article
              key={p.id || idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <Card className="relative overflow-hidden rounded-2xl bg-blue-500/5 backdrop-blur-md border border-gray-600 shadow-lg hover:shadow-[0_0_25px_rgba(79,149,224,0.5)] transition-shadow duration-300 shadow-[0_0_20px_rgba(79,149,224,0.3)]">
                <BorderBeam
                  size={100}
                  duration={8}
                  colorFrom="#4f95e0"
                  colorTo="#2563eb"
                />
                <CardHeader className="p-0">
                  <div className="relative h-40 sm:h-36 md:h-40 bg-slate-50 dark:bg-slate-900">
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

                    {/* optional lottie if provided */}
                    {p.lottie && (
                      <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 p-1 backdrop-blur-sm">
                        <Lottie animationData={p.lottie} loop autoplay />
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2 text-[#7EB1E4]">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-300 line-clamp-4 mb-3">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.tags?.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#4f95e0]/20 text-[#4f95e0] border border-[#4f95e0]/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-end gap-2">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block"
                      >
                        <Button
                          size="sm"
                          className="flex items-center gap-2 bg-[#4f95e0]/10 text-[#4f95e0] border border-[#4f95e0]/30 hover:bg-[#4f95e0]/20"
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
                          className="flex items-center gap-2 bg-[#4f95e0]/10 text-[#4f95e0] border border-[#4f95e0]/30 hover:bg-[#4f95e0]/20"
                          aria-label={`Open code for ${p.title}`}
                        >
                          <Github className="w-4 h-4" /> Code
                        </Button>
                      </a>
                    )}
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
