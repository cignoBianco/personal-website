import type { Project } from "./types";

export const projects: Project[] = [
    {
        id: 1,
        slug: "intelligent-project-management-platform",
        title: "Intelligent Project Management Platform",
        shortDescription:
            "An intelligent platform for project management and collaboration with machine learning.",
        description:
            "A fullstack platform combining project management, collaboration tools and machine learning.",
        coverUrl: null,
        technologies: [
            "React",
            "TypeScript",
            "FastAPI",
            "PostgreSQL",
            "Python",
            "PyTorch",
        ],
        tags: [
            "Fullstack",
            "ML",
            "AI",
        ],
        githubUrl: null,
        demoUrl: null,
        featured: true,
        publishedAt: null,
    },
    {
        id: 2,
        slug: "pregnancy-fitness-platform",
        title: "Pregnancy Fitness Platform",
        shortDescription:
            "A web and mobile fitness platform for pregnancy and postpartum training.",
        description:
            "A fitness platform with personalized training plans, progress tracking and educational content.",
        coverUrl: null,
        technologies: [
            "React",
            "TypeScript",
            "React Native",
            "FastAPI",
            "PostgreSQL",
        ],
        tags: [
            "Fullstack",
            "Mobile",
            "Fitness",
        ],
        githubUrl: null,
        demoUrl: null,
        featured: true,
        publishedAt: null,
    },
];