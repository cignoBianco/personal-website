import {
    useParams,
} from "react-router-dom";

import {
    useProject,
} from "@/entities/project";

import {
    useLocale,
} from "@/shared/routing";

import { useTranslation } from "react-i18next";

export function ProjectPage() {
    const { t } =
        useTranslation();

    const locale =
        useLocale();

    const { slug } =
        useParams<{
            slug: string;
        }>();

    const {
        data: project,
        isLoading,
        isError,
    } = useProject(
        slug ?? "",
        locale,
    );

    if (isLoading) {
        return (
            <div>
                {t("common.loading")}
            </div>
        );
    }

    if (isError || !project) {
        return (
            <div>
                {t("common.error")}
            </div>
        );
    }

    return (
        <article>
            {project.cover_url && (
                <img
                    src={project.cover_url}
                    alt={project.title}
                />
            )}

            <header>
                <h1>
                    {project.title}
                </h1>

                {project.short_description && (
                    <p>
                        {project.short_description}
                    </p>
                )}
            </header>

            {project.description && (
                <div>
                    {project.description}
                </div>
            )}

            {project.technologies?.length > 0 && (
                <section>
                    <h2>
                        Technologies
                    </h2>

                    <ul>
                        {project.technologies.map(
                            (technology) => (
                                <li
                                    key={technology}
                                >
                                    {technology}
                                </li>
                            ),
                        )}
                    </ul>
                </section>
            )}
        </article>
    );
}