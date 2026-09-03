import {
    useQuery,
    type UseQueryOptions,
} from "@tanstack/react-query";

import {
    getProject,
    getProjects,
    type GetProjectsParams,
} from "./api";

import type { ProjectDTO } from "./types";

export function useProjects(
    params: GetProjectsParams,
    options?: Omit<
        UseQueryOptions<ProjectDTO[]>,
        "queryKey" | "queryFn"
    >,
) {
    return useQuery({
        queryKey: [
            "projects",
            params,
        ],
        queryFn: () =>
            getProjects(params),
        ...options,
    });
}

export function useProject(
    slug: string,
    locale: string,
    options?: Omit<
        UseQueryOptions<ProjectDTO>,
        "queryKey" | "queryFn"
    >,
) {
    return useQuery({
        queryKey: [
            "project",
            locale,
            slug,
        ],
        queryFn: () =>
            getProject(
                slug,
                locale,
            ),
        enabled:
            Boolean(slug) &&
            Boolean(locale),
        ...options,
    });
}
