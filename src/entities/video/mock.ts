import type { Video } from "./types";

export const videos: Video[] = [
    {
        id: 1,
        slug: "javascript-variables-let-const-var",
        title: "JavaScript Variables — let, const and var",
        description:
            "An introduction to JavaScript variables and the differences between let, const and var.",
        thumbnailUrl: null,
        videoUrl: "https://www.youtube.com/",
        platform: "youtube",
        duration: 542,
        tags: [
            "JavaScript",
            "Frontend",
            "Programming",
        ],
        publishedAt: "2026-09-01",
        featured: true,
    },
    {
        id: 2,
        slug: "python-for-machine-learning",
        title: "Python for Machine Learning",
        description:
            "The Python fundamentals you need before starting machine learning.",
        thumbnailUrl: null,
        videoUrl: "https://www.youtube.com/",
        platform: "youtube",
        duration: 812,
        tags: [
            "Python",
            "Machine Learning",
            "Programming",
        ],
        publishedAt: "2026-09-08",
        featured: true,
    },
    {
        id: 3,
        slug: "react-typescript-project-architecture",
        title: "React + TypeScript Project Architecture",
        description:
            "How to structure a scalable React and TypeScript application.",
        thumbnailUrl: null,
        videoUrl: "https://www.youtube.com/",
        platform: "youtube",
        duration: 1045,
        tags: [
            "React",
            "TypeScript",
            "Architecture",
        ],
        publishedAt: "2026-09-15",
        featured: false,
    },
];