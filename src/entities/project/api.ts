import type { ProjectDTO } from "./types";

import { apiClient } from "@/shared/api/client";

export interface GetProjectsParams {
    locale: string;
    featured?: boolean;
    tag?: string;
    technology?: string;
    limit?: number;
    offset?: number;
}

export async function getProjects(
    params: GetProjectsParams,
): Promise<ProjectDTO[]> {
    const response = await apiClient.get<ProjectDTO[]>(
        "/projects",
        {
            params,
        },
    );

    return response.data;
}

export async function getProject(
    slug: string,
    locale: string,
): Promise<ProjectDTO> {
    const response = await apiClient.get<ProjectDTO>(
        `/projects/${slug}`,
        {
            params: {
                locale,
            },
        },
    );

    return response.data;
}