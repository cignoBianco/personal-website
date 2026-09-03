import { useTranslation } from "react-i18next";

import {
    useProjects,
} from "@/entities/project";

import {
    ProjectCard,
} from "@/widgets/project-card";

import {
    useLocale,
} from "@/shared/routing";

export function ProjectsPage() {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    const {
        data,
        isLoading,
        isError,
    } = useProjects({
        locale,
    });

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

    const projects =
        data ?? [];

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

            <div>
                {projects.map(
                    (project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ),
                )}
            </div>
        </section>
    );
}