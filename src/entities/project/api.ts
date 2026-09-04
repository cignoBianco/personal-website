// import type { ProjectDTO } from "./types";
import type { Project } from "./types";
import { projects } from "./mock";
// import { apiClient } from "@/shared/api/client";

export interface GetProjectsParams {
    locale: string;
    featured?: boolean;
    tag?: string;
    technology?: string;
    limit?: number;
    offset?: number;
}

// export async function getProjects(
//     params: GetProjectsParams,
// ): Promise<ProjectDTO[]> {
//     const response = await apiClient.get<ProjectDTO[]>(
//         "/projects",
//         {
//             params,
//         },
//     );

//     return response.data;
// }

// export async function getProject(
//     slug: string,
//     locale: string,
// ): Promise<ProjectDTO> {
//     const response = await apiClient.get<ProjectDTO>(
//         `/projects/${slug}`,
//         {
//             params: {
//                 locale,
//             },
//         },
//     );

//     return response.data;
// }

export async function getProjects(
    params: GetProjectsParams,
): Promise<Project[]> {
    let result = [...projects];

    if (params.featured !== undefined) {
        result = result.filter(
            (project) =>
                project.featured === params.featured,
        );
    }

    if (params.tag) {
        result = result.filter(
            (project) =>
                project.tags.includes(
                    params.tag!,
                ),
        );
    }

    if (params.technology) {
        result = result.filter(
            (project) =>
                project.technologies.includes(
                    params.technology!,
                ),
        );
    }

    return Promise.resolve(result);
}

export async function getProject(
    slug: string,
    _locale: string,
): Promise<Project | null> {
    return Promise.resolve(
        projects.find(
            (project) =>
                project.slug === slug,
        ) ?? null,
    );
}

export async function getProjectFilters() {
    return {
        tags: Array.from(
            new Set(
                projects.flatMap(
                    (project) =>
                        project.tags,
                ),
            ),
        ),
        technologies: Array.from(
            new Set(
                projects.flatMap(
                    (project) =>
                        project.technologies,
                ),
            ),
        ),
    };
}