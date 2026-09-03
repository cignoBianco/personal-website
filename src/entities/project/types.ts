import type { components } from "@/shared/api/generated";

export type ProjectDTO =
    components["schemas"]["ProjectRead"];

export interface Project {
    id: number;
    slug: string;
    title: string;
    shortDescription: string;
    description: string | null;
    coverUrl: string | null;
    technologies: string[];
    tags: string[];
    githubUrl: string | null;
    demoUrl: string | null;
    featured: boolean;
    publishedAt: string | null;
}