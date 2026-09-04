import { useTranslation } from "react-i18next";

import {
    useProjects,
    type Project,
} from "@/entities/project";

import {
    useLocale,
} from "@/shared/routing";
import { ProjectCard } from "@/entities/project/components";
import { ProjectFilters, type ProjectFiltersState } from "@/features/project-filters";
import { useState, useMemo } from "react";

const EMPTY_PROJECTS: Project[] = [];

export function ProjectsPage() {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    const [
        filters,
        setFilters,
    ] = useState<ProjectFiltersState>({
        tag: null,
        technology: null,
        featured: false,
    });

    const params = useMemo(
        () => ({
            locale,
            ...(filters.tag
                ? {
                    tag: filters.tag,
                }
                : {}),
            ...(filters.technology
                ? {
                    technology:
                        filters.technology,
                }
                : {}),
            ...(filters.featured
                ? {
                    featured: true,
                }
                : {}),
        }),
        [
            locale,
            filters,
        ],
    );

    const {
        data,
        isLoading,
        isError,
    } = useProjects(params);

    const projects =
        data ?? EMPTY_PROJECTS;

    const tags = useMemo(
        () =>
            Array.from(
                new Set(
                    projects.flatMap(
                        (project) =>
                            project.tags,
                    ),
                ),
            ),
        [projects],
    );

    const technologies =
        useMemo(
            () =>
                Array.from(
                    new Set(
                        projects.flatMap(
                            (project) =>
                                project.technologies,
                        ),
                    ),
                ),
            [projects],
        );


    if (isLoading) {
        return (
            <div>
                {t("common.loading")}
            </div>
        );
    }

    if (isError) {
        return (
            <div>
                {t("common.error")}
            </div>
        );
    }

    return (
        <section>
            <div>
                <p>
                    {t(
                        "projects.eyebrow",
                    )}
                </p>

                <h1>
                    {t(
                        "projects.title",
                    )}
                </h1>

                <p>
                    {t(
                        "projects.description",
                    )}
                </p>
            </div>

            <ProjectFilters
                value={filters}
                tags={tags}
                technologies={
                    technologies
                }
                onChange={
                    setFilters
                }
            />

            <div>
                {projects.length === 0 ? (
                    <p>
                        {t(
                            "projects.empty",
                        )}
                    </p>
                ) : (
                    <div>
                        {projects.map(
                            (project) => (
                                <ProjectCard
                                    key={
                                        project.id
                                    }
                                    project={
                                        project
                                    }
                                />
                            ),
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}